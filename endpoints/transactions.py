from datetime import datetime

from blockchain import blockexplorer
from fastapi import APIRouter
from fastapi_cache.decorator import cache

from utils.utils import satoshi_to_BTC

transactions_router = APIRouter(prefix='/transactions', tags=['Transactions'])


@transactions_router.get('/transaction/{transaction}')
@cache(expire=600)
def get_transaction(transaction: str):
    res = {}
    response = blockexplorer.get_tx(transaction)
    res_inputs = []
    if response.inputs[0].value > 0:
        for input in response.inputs:
            v = {'value': satoshi_to_BTC(input.value), 'address': input.address}
            res_inputs.append(v)
        res['inputs'] = res_inputs
    else:
        res['inputs'] = [{'value': 0, 'address': "coinbase"}]
    res_outputs = []
    for outputs in response.outputs:
        if outputs.value > 0:
            v = {'value': satoshi_to_BTC(outputs.value), 'address': outputs.address}
            res_outputs.append(v)
    res['outputs'] = res_outputs
    res['time'] = ' '.join(str(datetime.utcfromtimestamp(response.time)).split('T'))
    res['block_height'] = response.block_height
    res['type'] = 'segwit'
    res['confirmations'] = blockexplorer.get_latest_block().height - response.block_height
    res['size'] = response.size
    input_value = 0
    if response.inputs[0].value > 0:
        for input in response.inputs:
            input_value += input.value
        res['inputValue'] = satoshi_to_BTC(input_value)
    output_value = 0
    for output in response.outputs:
        output_value += output.value
    res['outputValue'] = satoshi_to_BTC(output_value)
    res['fee'] = satoshi_to_BTC(input_value - output_value)
    # TODO address types and feeRate
    return res

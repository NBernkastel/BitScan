from datetime import datetime

from blockchain import blockexplorer
from fastapi import APIRouter
from fastapi_cache.decorator import cache

transactions_router = APIRouter(prefix='/transactions', tags=['Transactions'])


@transactions_router.get('/transaction/{transaction}')
@cache(expire=30)
def get_transaction(transaction: str):
    res = {}
    response = blockexplorer.get_tx(transaction)
    res_inputs = []
    for input in response.inputs:
        v = {'value': input.value * 10 ** -8, 'address': input.address}
        res_inputs.append(v)
    res['inputs'] = res_inputs
    res_outputs = []
    for outputs in response.outputs:
        v = {'value': outputs.value * 10 ** -8, 'address': outputs.address}
        res_outputs.append(v)
    res['outputs'] = res_outputs
    res['time'] = ' '.join(str(datetime.utcfromtimestamp(response.time)).split('T'))
    res['block_height'] = response.block_height
    res['type'] = 'segwit'
    res['confirmations'] = blockexplorer.get_latest_block().height - response.block_height
    res['size'] = response.size
    input_value = 0
    for input in response.inputs:
        input_value += input.value
    res['inputValue'] = input_value * 10 ** -8
    output_value = 0
    for output in response.outputs:
        output_value += output.value
    res['outputValue'] = output_value * 10 ** -8
    res['fee'] = (input_value - output_value) * 10 ** -8
    # TODO address types and feeRate
    return res

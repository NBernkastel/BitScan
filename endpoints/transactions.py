from blockchain import blockexplorer
from fastapi import APIRouter
from fastapi_cache.decorator import cache

transactions_router = APIRouter(prefix='/transactions', tags=['Transactions'])


@transactions_router.get('/transaction')
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
    res['time'] = response.time
    res['block_height'] = response.block_height
    return res

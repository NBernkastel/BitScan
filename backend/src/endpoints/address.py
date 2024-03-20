import blockchain
from fastapi import APIRouter

from utils.utils import satoshi_to_BTC

address_router = APIRouter(prefix='/addresses', tags=['Addresses'])


@address_router.get('/address/{address}')
def get_address(address: str):
    address = blockchain.blockexplorer.get_address(address)
    transactions_info = []
    i = 0
    for transaction in address.transactions[:10]:
        trx = {
            'index': i,
            'hash': transaction.hash,
            'time': transaction.time,
            'amount': satoshi_to_BTC(sum([x.value for x in transaction.inputs]))
        }
        i += 1
        transactions_info.append(trx)
    res = {
        "balance": satoshi_to_BTC(address.final_balance),
        "total_received": satoshi_to_BTC(address.total_received),
        "total_sent": satoshi_to_BTC(address.total_sent),
        "transactions": transactions_info
    }
    return res

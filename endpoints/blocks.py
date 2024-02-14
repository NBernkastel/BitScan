from datetime import datetime

from blockchain import blockexplorer
from fastapi import APIRouter
from fastapi_cache.decorator import cache

from utils.utils import seconds_to_hh_mm_ss
import math
blocks_router = APIRouter(prefix='/blocks', tags=['Blocks'])


@blocks_router.get('/last_block_info')
def blockchain_height():
    last_block_info = {}
    height = str(blockexplorer.get_latest_block().height)
    chunks = [height[i:i + 3] for i in range(0, len(height), 3)]
    height = ' '.join(chunks)
    last_block_info['height'] = height
    time = seconds_to_hh_mm_ss(int(datetime.now().timestamp()) - blockexplorer.get_latest_block().time)
    last_block_info['time'] = time
    return last_block_info


@blocks_router.get('/last_blocks')
@cache(expire=120)
def get_last_blocks():
    blocks_info = []
    for i in range(0, 8):
        block = {}
        resp = blockexplorer.get_block(str(blockexplorer.get_latest_block().height - i))
        block['index'] = resp.block_index
        block['fee'] = round(resp.fee * 10 ** -8, 2)
        block['hash'] = resp.hash
        block['time'] = str(datetime.utcfromtimestamp(resp.time))
        block['transactions'] = len(resp.transactions)
        block['size'] = round(resp.size / 1024 / 1024, 2)
        blocks_info.append(block)
    return blocks_info


@blocks_router.get('/block/{block}')
def get_block(block: str):
    block_info = {}
    block = blockexplorer.get_block(block)
    block_info['index'] = block.block_index
    block_info['fee'] = block.fee * 10 ** -8
    block_info['hash'] = block.hash
    block_info['time'] = str(datetime.utcfromtimestamp(block.time))
    block_info['transactions_count'] = len(block.transactions)
    block_info['size'] = block.size
    block_info['version'] = block.version
    block_info['bits'] = block.bits
    block_info['nonce'] = block.nonce
    block_info['merkle_root'] = block.merkle_root
    block_info['previous_hash'] = block.previous_block
    block_info['main_chain'] = block.main_chain
    block_info['reward'] = 50 * 2 ** -(math.floor(block.block_index / 210_000))
    transactions_info = []
    i = 0
    for transaction in block.transactions[:10]:
        trx = {
            'index': i,
            'hash': transaction.hash,
            'time': transaction.time,
            'amount': sum([x.value for x in transaction.inputs]) * 10**-8
        }
        i += 1
        transactions_info.append(trx)
    block_info['transactions'] = transactions_info
    return block_info

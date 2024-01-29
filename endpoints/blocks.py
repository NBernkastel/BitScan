from datetime import datetime

from blockchain import blockexplorer
from fastapi import APIRouter
from fastapi_cache.decorator import cache

from utils.utils import seconds_to_hh_mm_ss

blocks_router = APIRouter(prefix='/blocks', tags=['Blocks'])


@blocks_router.get('/last_block_info')
@cache(expire=30)
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

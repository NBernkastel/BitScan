import '../pages/css/block_page.css'
import BlockHeader from "../components/block/block_header";
import BlockTransactions from "../components/block/transactions";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {Block, BlockIndex} from "../types";

function BlockPage() {

    const {blockIndex} = useParams<BlockIndex>()
    const [Block, setTransaction] = useState<Block | null>(null)

    useEffect(() => {
        if (typeof blockIndex !== 'undefined') {
            axios.get(`http://127.0.0.1:8000/blocks/block/${blockIndex}`)
                .then(response => {
                    setTransaction(response.data)
                })
        }
    }, [Block, blockIndex])
    if (blockIndex) {
        return (
            <div className="BlockPage">
                <BlockHeader block={Block}/>
                <BlockTransactions transactions={Block?.transactions}/>
            </div>
        );
    } else {
        return (
            <div>No such Block</div>
        )
    }
}

export default BlockPage;

import React, {useEffect, useState} from 'react';
import '../css/last_blocks.css'
import axios from 'axios'
import CopyComponent from "../utils/copy_not_component";
import {BlockInfo} from "../../types";

function LastBlocksComponent() {
    const [Blocks, setBlocks] = useState<[BlockInfo] | null>(null)

    const [showCopy, setShowCopy] = useState(false)

    useEffect(() => {
        update_blocks_state()
    }, []);

    function update_blocks_state() {
        axios.get('http://127.0.0.1:8000/blocks/last_blocks')
            .then((response) => {
                setBlocks(response.data)
            })
            .catch((error) => {
                console.error('Error to get last block', error);
            })
    }


    return (
        <>
            <div className="LastBlocks">
                <div className={'LastBlocksCard'}>
                    <div className={'LastBlocksCardTopName'}>
                        <p>LAST MASTERCHAIN BLOCKS</p>
                        <button className={'BlocksUpdateButton'} onClick={update_blocks_state}>🗘</button>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th> index</th>
                            <th> fee</th>
                            <th> time</th>
                            <th> transactions</th>
                            <th> size</th>
                            <th> hash</th>
                        </tr>
                        </thead>
                        <tbody>

                        {Blocks && Blocks.map((block, index) => (
                            <tr key={index}>
                                <td className={'index'}>{block.index}</td>
                                <td> {block.fee}</td>
                                <td> {block.time}</td>
                                <td> {block.transactions}</td>
                                <td> {block.size}</td>
                                <td onClick={e => {
                                    navigator.clipboard.writeText(block.hash)
                                    setShowCopy(true)
                                    const interval = setInterval(() => {
                                        setShowCopy(false)
                                        clearInterval(interval);
                                    }, 1000)
                                }} className={'hash'}> {block.hash}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
            {showCopy && <CopyComponent/>}
        </>
    )
}

export default LastBlocksComponent;
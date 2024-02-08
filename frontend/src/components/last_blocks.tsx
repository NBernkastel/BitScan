import React, {useEffect, useState} from 'react';
import './css/last_blocks.css'
import axios from 'axios'
import CopyComponent from "./copy_not_component";

function LastBlocksComponent() {
    const [Blocks, setBlocks] =
        useState(
            [
                {index: 0, fee: 0, time: '', transactions: 0, size: 0, hash: ''},
                {index: 0, fee: 0, time: '', transactions: 0, size: 0, hash: ''},
                {index: 0, fee: 0, time: '', transactions: 0, size: 0, hash: ''},
                {index: 0, fee: 0, time: '', transactions: 0, size: 0, hash: ''},
                {index: 0, fee: 0, time: '', transactions: 0, size: 0, hash: ''},
                {index: 0, fee: 0, time: '', transactions: 0, size: 0, hash: ''},
                {index: 0, fee: 0, time: '', transactions: 0, size: 0, hash: ''},
                {index: 0, fee: 0, time: '', transactions: 0, size: 0, hash: ''},
            ]
        )

    const [showCopy, setShowCopy] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://127.0.0.1:8000/blocks/last_blocks')
                .then((response) => {
                    setBlocks(response.data)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error('Error to get last block', error);
                });
        }, 10000);
        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className="LastBlocks">
                <div className={'LastBlocksCard'}>
                    <div className={'LastBlocksCardTopName'}>
                        <p>LAST MASTERCHAIN BLOCKS</p>
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
                        {Blocks.map((block, index) => (
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
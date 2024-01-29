import React, {useEffect, useState} from 'react';
import './css/blockchain_state.css'
import axios from 'axios'

function BlockchainStateComponent() {
    const [blochainstate, setblockchainstate] = useState({height: 0, time: ''})

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://127.0.0.1:8000/blocks/last_block_info')
                .then((response) => {
                    setblockchainstate(response.data)
                })
                .catch((error) => {
                    console.error('Error to get last block', error);
                });
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="BlocksState">
            <div className={'BlockchainState'}>
                <span>Blockchain Height</span>
                <span>{blochainstate.height}</span>
                <span>Time from last block</span>
                <span>{blochainstate.time}</span>
            </div>
        </div>
    );
}

export default BlockchainStateComponent;
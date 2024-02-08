import React, {useEffect, useState} from 'react';
import './css/blockchain_state.css'
import axios from 'axios'

function BlockchainStateComponent() {
    const [blochain_state, setBlockchainstate] = useState({height: 0, time: ''})

    useEffect(() => {
        state_update()
    }, []);

    function state_update() {
        console.log('fgf')
        axios.get('http://127.0.0.1:8000/blocks/last_block_info')
            .then((response) => {
                setBlockchainstate(response.data)
            })
            .catch((error) => {
                console.error('Error to get last block', error);
            })
    }

    return (
        <div className="BlocksState">
            <div className={'BlockchainState'}>
                <button className={'BlocksStateUpdateButton'} onClick={state_update}>🗘</button>
                <span>Blockchain Height</span>
                <span>{blochain_state.height}</span>
                <span>Time from last block</span>
                <span>{blochain_state.time}</span>
            </div>
        </div>
    );
}

export default BlockchainStateComponent;
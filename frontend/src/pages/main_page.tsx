import React, {useState} from 'react';
import './css/main_page.css'
// @ts-ignore
import bitcoinimage from "../images/bitcoin.png"
import {Link, useNavigate} from "react-router-dom";

function MainPage() {
    const [mainInput, setMainInput] = useState('')
    const navigate = useNavigate();

    function check_address(e: React.ChangeEvent<HTMLInputElement>) {
        let value = e.target.value
        const element = document.getElementById('BitcoinInput');
        setMainInput(value)
        if (element) {
            if (value.substring(0, 4) === "bc1q" || value.length === 0) {
                element.style.border = '1px solid #3b3b3b'
            } else {
                element.style.border = '1px solid red'
            }
        }
    }

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter' && mainInput.length > 40) {
            navigate(`/transaction/${mainInput}`)
        }
        if (event.key === 'Enter' && mainInput.length > 30 && mainInput.length < 40) {
            navigate(`/address/${mainInput}`)
        }
        if (event.key === 'Enter' && mainInput.length < 12) {
            navigate(`/block/${mainInput}`)
        }
    };

    return (
        <div className="MainPage">
            <img alt={'Bitcoin'} src={bitcoinimage} width={180} height={150} className={"BitcoinImage"}/>
            <input type={"text"}
                   className={"MainInput"}
                   placeholder="Search Bitcoon addresses and transactions..."
                   value={mainInput}
                   onChange={e => check_address(e)}
                   id={'BitcoinInput'}
                   onKeyDown={handleKeyDown}
            />
            <div className={"MainPageButtons"}>
                <button>Network</button>
                <Link to="/blocks">
                    <button>Blocks</button>
                </Link>
                <button>Transactions</button>
            </div>
        </div>
    );
}

export default MainPage;

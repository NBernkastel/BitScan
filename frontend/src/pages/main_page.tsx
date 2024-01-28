import React, {useState} from 'react';
import './css/main_page.css'
// @ts-ignore
import bitcoinimage from "../images/bitcoin.png"
function MainPage() {
    const [mainInput, setMainInput] = useState('')

    function check_address(e: React.ChangeEvent<HTMLInputElement>){
        let value = e.target.value
        setMainInput(value)
        if (value.substring(0, 4) === "bc1q"){
            const element = document.getElementById('BitcoinInput');
            if (element)
                element.style.border = '1px solid #3b3b3b'
        }
        else{
            const element = document.getElementById('BitcoinInput');
            if (element)
                element.style.border = '1px solid red'
        }
    }

  return (
    <div className="MainPage">
        <img alt={'Bitcoin'} src={bitcoinimage} width={180} height={150} className={"BitcoinImage"}/>
        <input type={"text"}
               className={"MainInput"}
               placeholder="Search Bitcoon addresses and transactions..." value={mainInput}
               onChange={e => check_address(e)}
               id={'BitcoinInput'}
        />
    </div>
  );
}

export default MainPage;

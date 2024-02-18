import '../css/transaction_header.css'
import {FullTransaction, TransactionID} from "../../types";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

interface TransactionHeaderProps{
    transaction: FullTransaction | null
    transactionID: TransactionID
}

function TransactionHeader(props: TransactionHeaderProps) {
    const {transaction, transactionID} = props;

    const navigate = useNavigate();

    return (
        <div className="TransactionHeader">
            {transaction && (
                <>
                    <div className={'TransactionName'}>Bitcoin
                        transaction <span>{transactionID}</span></div>
                    <div className={'LowDataHeader1'} onClick={e => navigate(`/block/${transaction.block_height}`)}>Block <span>{transaction.block_height}</span></div>
                    <div className={'LowDataHeader1'}>Type <span>{transaction.type}</span></div>
                    <div className={'LowDataHeader1'}>Confirmations <span>{transaction.confirmations}</span></div>
                    <div className={'LowDataHeader1'}>Size <span>{transaction.size}</span></div>
                    <div className={'LowDataHeader1'}>Fee <span>{transaction.fee}BTC</span></div>
                    <div className={'LowDataHeader2'}>Fee rate <span>307.45 satoshi/vByte</span></div>
                    <div className={'LowDataHeader2Time'}>Time <span>{transaction.time}</span></div>
                </>
            )}
        </div>
    )
}

export default TransactionHeader;
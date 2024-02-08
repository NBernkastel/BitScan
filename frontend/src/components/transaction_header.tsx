import './css/transaction_header.css'
import {Transaction, TransactionID} from "../types";

function TransactionHeader(props: { transaction: Transaction | null; transactionID: TransactionID; }) {
    const {transaction, transactionID} = props;
    return (
        <div className="TransactionHeader">
            {transaction && (
                <>
                    <div className={'TransactionName'}>Bitcoin
                        transaction <span>{transactionID}</span></div>
                    <div className={'LowDataHeader1'}>Block <span>{transaction.block_height}</span></div>
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
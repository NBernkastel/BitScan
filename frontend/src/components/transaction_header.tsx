import './css/transaction_header.css'
function TransactionHeader() {


    return (
            <div className="TransactionHeader">
                <div className={'TransactionName'}>Bitcoin transaction <span>bda164a5528ced9432f158840948145961f2c211be168801714e3d875c85695e</span> </div>
                <div className={'LowDataHeader1'}>Block <span>828104</span> </div>
                <div className={'LowDataHeader1'}>Type <span>segwit</span> </div>
                <div className={'LowDataHeader1'}>Confirmations <span>1</span> </div>
                <div className={'LowDataHeader1'}>Size <span>1541</span> </div>
                <div className={'LowDataHeader1'}>Fee <span>0.00694254BTC</span> </div>
                <div className={'LowDataHeader2'}>Fee rate <span>307.45 satoshi/vByte</span> </div>
            </div>
    )
}

export default TransactionHeader;
import TransactionHeader from "../components/transaction/transaction_header";
import './css/transaction_page.css'
import TransactionIO from "../components/transaction/transactions_io_component";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {FullTransaction, TransactionID} from "../types";

function TransactionPage() {
    const {transactionID} = useParams<TransactionID>()
    const [transaction, setTransaction] = useState<FullTransaction | null>(null)

    useEffect(() => {
        if (typeof transactionID !== 'undefined') {
            axios.get(`http://127.0.0.1:8000/transactions/transaction/${transactionID}`)
                .then(response => {
                    let res: FullTransaction = response.data;
                    if (parseInt(res.block_height) === -1) {
                        res.block_height = "unconfirmed"
                        res.confirmations = "unconfirmed"
                    }
                    setTransaction(res)
                })
        }
    },[transactionID])
    if (transactionID) {
        return (
            <div className="TransactionPage">
                <TransactionHeader transaction={transaction} transactionID={transactionID}/>
                <TransactionIO transaction={transaction}/>
            </div>
        )
    } else {
        return (
            <div>No such transaction</div>
        )
    }
}

export default TransactionPage;
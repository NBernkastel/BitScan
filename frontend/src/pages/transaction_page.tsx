import TransactionHeader from "../components/transaction/transaction_header";
import './css/transaction_page.css'
import TransactionIO from "../components/transaction/transactions_io_component";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Transaction, TransactionID} from "../types";

function TransactionPage() {
    const {transactionID} = useParams<TransactionID>()
    const [transaction, setTransaction] = useState<Transaction | null>(null)

    useEffect(() => {
        if (typeof transactionID !== 'undefined') {
            axios.get(`http://127.0.0.1:8000/transactions/transaction/${transactionID}`)
                .then(response => {
                    setTransaction(response.data)
                })
        }
    }, [])
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
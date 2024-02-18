import "../css/block_transactions.css"
import {useNavigate} from "react-router-dom";
import {Transaction} from "../../types";

interface TransactionProps {
    transactions: [Transaction] | undefined
}

function Transactions(props: TransactionProps) {
    const {transactions} = props;
    const navigate = useNavigate();

    if (!transactions) {
        return null
    }

    return (
        <div className="BlockTransactions">
            {transactions.map((transaction, index) => (
                <div className="DataBlockTransactions" key={index}>
                    <span>{transaction.index}</span>
                    <span>{transaction.time}</span>
                    <span>{transaction.amount} BTC</span>
                    <span className={'SpanHash'} onClick={() => navigate(`/transaction/${transaction.hash}`)}>{transaction.hash}</span>
                </div>
            ))}
        </div>
    );
}

export default Transactions;

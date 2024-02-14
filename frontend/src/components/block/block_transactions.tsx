import "../css/block_transactions.css"
import {Block} from "../../types";
import {useNavigate} from "react-router-dom";

interface BlockHeaderProps {
    block: Block | null
}

function BlockTransactions(props: BlockHeaderProps) {
    const {block} = props;
    const navigate = useNavigate();

    if (!block) {
        return null
    }

    return (
        <div className="BlockTransactions">
            {block.transactions.map((transaction, index) => (
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

export default BlockTransactions;

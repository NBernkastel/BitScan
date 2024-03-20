import '../css/transaction/transaction_IO.css'
import {FullTransaction} from "../../types";
import {useNavigate} from "react-router-dom";

interface TransactionIOProps {
    transaction: FullTransaction | null
}

function TransactionIO(props: TransactionIOProps) {

    const {transaction} = props
    const navigate = useNavigate();

    return (
        <div className="TransactionIO">
            {transaction && (
                <>
                    <div className={"IOColum"}>
                        <div
                            className={'IOName'}>{transaction.inputs.length} inputs<span>{transaction.inputValue}</span>
                        </div>
                        {transaction.inputs.map((inputB, index) => (
                            <div className={"IO"}>
                                <div className={'OIAddress'} onClick={e => {
                                    if (inputB.address !== "coinbase")
                                    navigate(`/address/${inputB.address}`)
                                    }
                                }
                                     key={index}>{inputB.address}</div>
                                <span>{inputB.value}</span>
                            </div>
                        ))}
                    </div>
                    <div className={"IOColum"}>
                        <div className={'IOName'}>{transaction.outputs.length}<span>{transaction.outputValue}</span>
                        </div>
                        {transaction.outputs.map((outputB, index) => (
                            <div className={"IO"}>
                                <div className={'OIAddress'} onClick={e => navigate(`/address/${outputB.address}`)}
                                     key={index}>{outputB.address}</div>
                                <span>{outputB.value}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default TransactionIO;
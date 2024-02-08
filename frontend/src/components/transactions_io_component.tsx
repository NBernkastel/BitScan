import './css/transaction_IO.css'
import {Transaction} from "../types";

function TransactionIO(props: { transaction: Transaction | null }) {

    const {transaction} = props


    return (
        <div className="TransactionIO">
            {transaction && (
                <>
                    <div className={"InputColum"}>
                        <div className={'IName'}>{transaction.inputs.length} inputs<span>{transaction.inputValue}</span></div>
                        {transaction.inputs.map((inputB, index) => (
                            <div className={'Input'} key={index}>{inputB.address}<span>{inputB.value}</span></div>
                        ))}
                    </div>
                    <div className={"OutputColum"}>
                        <div className={'OName'}>{transaction.outputs.length}<span>{transaction.outputValue}</span></div>
                        {transaction.outputs.map((outputB, index) => (
                            <div className={'Output'} key={index}>{outputB.address}<span>{outputB.value}</span></div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default TransactionIO;
import TransactionHeader from "../components/transaction_header";
import './css/transaction_page.css'
import TransactionIO from "../components/transactions_io_component";

function TransactionPage() {



    return (
            <div className="TransactionPage">
                <TransactionHeader/>
                <TransactionIO/>
            </div>
    )
}

export default TransactionPage;
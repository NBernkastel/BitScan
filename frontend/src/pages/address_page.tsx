import '../pages/css/address_page.css'
import AddressHeader from "../components/address/address_header";
import Transactions from "../components/block/transactions";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Transaction} from "../types";


function AddressPage() {
    const {address} = useParams()
    const [addressData, setAddressData] = useState<{
        balance: number,
        total_received: number,
        total_sent: number,
        transactions: [Transaction]
    }|null>(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/addresses/address/${address}`).then(res => {
            setAddressData(res.data)
        })
    }, [address]);

    if(!addressData){
        return null
    }

    return (
        <div className="AddressPage">
            <AddressHeader address={address} balance={addressData.balance}/>
            <Transactions transactions={addressData.transactions}/>
        </div>
    );
}

export default AddressPage;

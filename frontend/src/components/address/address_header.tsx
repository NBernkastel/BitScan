import '../css/address/address_header.css'
import QRCode from 'react-qr-code';

interface AddressHeaderProps {
    address: string| undefined
    balance: number
}

function AddressHeader(props: AddressHeaderProps) {

    const {address, balance} = props

    return (
        <div className="AddressHeader">
            <span className={"BitcoinAddress"}>{address}</span>
            <QRCode
                className={"QR"}
                size={256}
                viewBox={`0 0 256 256`}
                value={address || "no"}
            />
            <div className={"Balance"}>Balance: {balance}</div>
        </div>
    );
}

export default AddressHeader;

import "../css/user/marked_trx_and_addr.css"
import GreenDote from "../utils/greendote";

function MarkedTrxAndAddr() {

    return (
        <div className="MarkedTrxAndAddr">
            <div className={"MarkedTrxAndAddrLine"}>
                <div className={"LineName"}>Marked transaction - </div>
                <div className={"LineName"}>105.58425978 BTC</div>
                <GreenDote/>
            </div>
            <div className={"MarkedTrxAndAddrLine"}>
                <div className={"LineName"}>Marked transaction - </div>
                <div className={"LineName"}>105.58425978 BTC</div>
            </div>
            <div className={"MarkedTrxAndAddrLine"}>
                <div className={"LineName"}>Marked transaction - </div>
                <div className={"LineName"}>105.58425978 BTC</div>
                <GreenDote/>
            </div>
            <div className={"MarkedTrxAndAddrLine"}>
                <div className={"LineName"}>Marked transaction - </div>
                <div className={"LineName"}>105.58425978 BTC</div>
            </div>

        </div>
    );
}

export default MarkedTrxAndAddr

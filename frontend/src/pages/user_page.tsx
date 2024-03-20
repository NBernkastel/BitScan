import SavedTrxAndAddr from "../components/user/saved_trx_and_addr";
import "../pages/css/user_page.css"
import Utils from "../components/user/utils";
import MarkedTrxAndAddr from "../components/user/marked_trx_and_addr";
import BitcoinGraph from "../components/user/graph";

function UserPage() {

    return (
        <div className="UserPage">
            <div className="TRXNADDR">
                <SavedTrxAndAddr/>
                <SavedTrxAndAddr/>
                <Utils/>
            </div>
            <div className={"MarkedAndPrice"}>
                <MarkedTrxAndAddr/>
                <BitcoinGraph/>
            </div>
        </div>
    );
}

export default UserPage

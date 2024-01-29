import '../components/css/blockchain_state.css'
import BlockchainStateComponent from "../components/blockchain_state";
import LastBlocksComponent from "../components/last_blocks";

function BlocksPage() {

    return (
        <div className="BlocksState">
            <BlockchainStateComponent/>
            <LastBlocksComponent/>
        </div>
    );
}

export default BlocksPage;

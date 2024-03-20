import '../components/css/blockchain_state/blockchain_state.css'
import BlockchainStateComponent from "../components/blocks/blockchain_state";
import LastBlocksComponent from "../components/blocks/last_blocks";

function BlocksPage() {

    return (
        <div className="BlocksState">
            <BlockchainStateComponent/>
            <LastBlocksComponent/>
        </div>
    );
}

export default BlocksPage;

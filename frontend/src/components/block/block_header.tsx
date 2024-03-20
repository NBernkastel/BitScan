import '../css/block/block_header.css'
import {Block} from "../../types";

interface BlockHeaderProps {
    block: Block | null
}


function BlockHeader(props: BlockHeaderProps) {
    const {block} = props;
    if (!block) {
        return null
    }

    return (
        <div className="BlockHeader">
            {Object.entries(block).map(([key, value]) => (
                key !== "transactions" && (
                <div className="DataHeader" key={key}>
                    {key}
                    <span>{value.toString()}</span>
                </div>
                )
            ))}
        </div>
    )
}

export default BlockHeader;

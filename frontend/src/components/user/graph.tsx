import React from 'react';

import "../css/user/graph.css"
import BitcoinChart from "./BitcoinChart";


function BitcoinGraph() {

    return (
        <div className="BitcoinGraph">
            <div className={"BitcoinGraphStats"}>
                <div className={"BitcoinGraphStatsItem"}>Bitcoin Price</div>
                <div className={"BitcoinGraphStatsItem"}>$ 52 6525</div>
                <div className={"BitcoinStatChange"}><span>+10.52%</span></div>
                <div className={"BitcoinGraphStatsItem"}>Capitalization</div>
                <div className={"BitcoinGraphStatsItem"}>$ 7.93 B</div>
                <div className={"BitcoinStatChange"}><span>+10.55%</span></div>
            </div>
            <div className={"UserBitcoinChart"}>
                <BitcoinChart/>
            </div>
        </div>

    );
}

export default BitcoinGraph

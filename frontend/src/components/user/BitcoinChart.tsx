import React from "react";
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";
import {Tooltip, Area} from "recharts";


function BitcoinChart() {
    const data = [
        {
            name: "20.02",
            "BTC/USDT": 36733,
            amt: 2400
        },
        {
            name: "21.02",
            "BTC/USDT": 36830,
            amt: 2210
        },
        {
            name: "22.02",
            "BTC/USDT": 36808,
            amt: 2290
        },
        {
            name: "23.02",
            "BTC/USDT": 38489,
            amt: 2000
        },
        {
            name: "24.02",
            "BTC/USDT": 38777,
            amt: 2181
        },
        {
            name: "25.02",
            "BTC/USDT": 38766,
            amt: 2500
        },
        {
            name: "26.02",
            "BTC/USDT": 39972,
            amt: 2100
        },
        {
            name: "26.02",
            "BTC/USDT": 39603,
            amt: 2100
        },
           {
            name: "26.02",
            "BTC/USDT": 39383,
            amt: 2100
        },
             {
            name: "26.02",
            "BTC/USDT": 39615,
            amt: 2100
        },
                {
            name: "26.02",
            "BTC/USDT": 39953,
            amt: 2100
        },
                      {
            name: "26.02",
            "BTC/USDT": 50799,
            amt: 2100
        },
    ];

    return (
        <AreaChart
            width={550}
            height={300}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 10
            }}
        >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="35%" stopColor="#2C312D" stopOpacity={0.8}/>
                    <stop offset="100%" stopColor="#2C312D" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={"#14311c"}/>
            <XAxis dataKey="name"/>
            <Tooltip/>
            <Area type="monotone" dataKey="BTC/USDT" stroke="#289650" fillOpacity={1} fill="url(#colorUv)"/>
        </AreaChart>
    );
}

export default BitcoinChart;

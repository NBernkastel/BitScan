import React from 'react';
import MainPage from "./pages/main_page";
import {Route, Routes} from "react-router-dom";
import BlocksPage from "./pages/blocks_page";
import TransactionPage from "./pages/transaction_page";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/blocks" element={<BlocksPage/>}/>
                <Route path="/transaction" element={<TransactionPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

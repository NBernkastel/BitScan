import React from 'react';
import MainPage from "./pages/main_page";
import {Route, Routes} from "react-router-dom";
import BlocksPage from "./pages/blocks_page";
import TransactionPage from "./pages/transaction_page";
import BlockPage from "./pages/block_page";
import AddressPage from "./pages/address_page";
import UserProfiler from "./components/utils/user_profile";
import UserPage from "./pages/user_page";
import LogPage from "./pages/log_page";

function App() {
    return (
        <div className="App">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
            <UserProfiler/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/blocks" element={<BlocksPage/>}/>
                <Route path="/transaction/:transactionID" element={<TransactionPage/>}/>
                <Route path="/block/:blockIndex" element={<BlockPage/>}/>
                <Route path="/address/:address" element={<AddressPage/>}/>
                <Route path="/user/" element={<UserPage/>}/>
                <Route path="/sign/:SignType" element={<LogPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

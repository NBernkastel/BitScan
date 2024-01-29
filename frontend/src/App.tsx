import React from 'react';
import MainPage from "./pages/main_page";
import {Route, Routes} from "react-router-dom";
import BlocksPage from "./pages/blocks_page";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/blocks" element={<BlocksPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

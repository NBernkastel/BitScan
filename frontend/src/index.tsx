import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {FpjsProvider} from "@fingerprintjs/fingerprintjs-pro-react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <FpjsProvider
                loadOptions={{
                    apiKey: "nLhh1AyOC0HzbB0Q5cM0",
                    region: "eu"
                }}
            >
                <App/>
            </FpjsProvider>
        </BrowserRouter>
    </React.StrictMode>
);
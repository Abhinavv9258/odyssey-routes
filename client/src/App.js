import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./user/pages/Index";

export const URL = process.env.REACT_APP_SERVER_URL;
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

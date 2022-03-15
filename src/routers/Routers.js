import React from 'react'
import { Routes, Route } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";

function Routers(props){
    return(<Routes>
        <Route path="/" element={<BaseLayout/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
        </Route>
    </Routes>)
}export default Routers

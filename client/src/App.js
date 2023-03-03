import React from "react";
import {Route, Routes} from 'react-router-dom'
import Project from "../components/shared/Project";
import Home from './components/shared/Home'


const app = () => (
<>
<Routes>
<Route path='/' element={<Home/>}/>
<Route Path='/project' element={<Project/>}/>


</Routes>
</>
)

export default app;
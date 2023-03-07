import React from "react";
import {Route, Routes} from 'react-router-dom';
import Project from './components/shared/Project';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';

const app = () => (
<>
<Routes>
<Route path='/' element={<Home/>}/>
<Route Path='/project' element={<Project/>}/>
<Route path='/*' element={<Nomatch/>}/>
</Routes>
</>
)

export default app;
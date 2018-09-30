import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.css'

import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes'
import Menu from '../template/menu'

export default props =>
    <BrowserRouter>
        <div className='container'>
            <Menu />
            <Routes />
        </div>
    </BrowserRouter>
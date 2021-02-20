import ReactDOM from "react-dom";
import React from "react";

import { HashRouter } from "react-router-dom";


import RootComponent from "./component/RootComponent";




ReactDOM.render(  
                    <HashRouter>
                        <RootComponent></RootComponent> 
                    </HashRouter>
               

    , document.getElementById('root'))


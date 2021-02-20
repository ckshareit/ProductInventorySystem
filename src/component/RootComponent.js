import React from "react"

import Content from "./spa/contentcontainer/content";
import { Link } from 'react-router-dom';
import '../main.css';


class RootComponent extends React.Component{

    

    render(){
        return (
            <div>
                <nav class="navbar navbar-inverse">
                <div class="left logo"><img src="https://chandan-share.s3.amazonaws.com/logo.png" width="80px" height="80px"  alt="logo"></img></div>
                    <div><h1 class="textheader">Product Inventory System</h1></div>
                <div class="right">
                <Link to='/'><button class="btn">Home</button></Link>
                
                &nbsp;
                <Link to='/register'><button class="btn">Register</button></Link>
                &nbsp;
                <Link to='/login'><button class="btn">Login</button></Link>
                           
           </div>
                </nav> 

           
            
              <Content></Content>
           

              <div  id="footer"></div>
              <button id="footer">RetailShop</button>
            </div>
        )
    }

}


export default RootComponent
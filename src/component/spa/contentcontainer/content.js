import React from 'react';
import AllProducts from './product/allproducts';
import { Switch, Route } from "react-router-dom";
import Home from './home/home';
import Register from './register/register';
import Login from './login/login';
import Dashboard from './product/dashboard';
import AddProduct from './product/addproduct'
import UpdateProduct from "./product/updateproduct"


class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
        <div>
           
            <Switch>
                <Route exact path='/' component={Home}></Route>    
                <Route path='/products' component={AllProducts}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Route path='/addproduct' component={AddProduct}></Route>   
                <Route path='/updateProduct' component={UpdateProduct}></Route> 

            </Switch>   
          
        </div>
         );
    }
}
 
export default Content;
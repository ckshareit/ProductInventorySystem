import React from 'react';
import {Bar} from 'react-chartjs-2';
import axios from "axios";
import { Link } from 'react-router-dom';
import AddProduct from './addproduct';
import DeleteProduct from './deleteproduct';
import UpdateProduct from './updateproduct';
import AllProducts from './allproducts';
import ProductDetail from './productdetail';


import '../../../../main.css';
import { getDefaultNormalizer } from '@testing-library/react';



class Dashboard extends React.Component {

    constructor(props){
        super(props)
        this.state={
          products:[],
          searchProducts:[],
          searchValue:''
            
        }
    }

   
    componentWillMount(){
      this.getAllProducts()
  }
 
 
getAllProducts=()=>{
  axios.get('http://localhost:3006/products')
          .then(response=>{
              console.log(response);
              console.log(response.data)
              this.setState({products: response.data})
              this.setState({searchProducts: response.data})
              console.log(this.state.products);
          }, error=>{
              console.error(error);
          })

          
}

getSearch=(e)=>{
  let searchV = e.target.value
  if(searchV==''){
      this.getAllProducts()
  }
  
  this.setState({searchValue: searchV})
  console.log(searchV);
  console.log("Here");
  let searchF = this.state.products.filter(p=>{
      console.log(p);
                          return p.Category.toLowerCase().match(searchV.toLowerCase())
                      })
  console.log(searchF);    
  this.setState({searchProducts: searchF})                

}

getLebels=()=>{
  
  return this.state.searchProducts.map(product=>{
    return(
      product.ProductName
    )
})
}

getStockData=()=>{
  return this.state.searchProducts.map(product=>{

   var res=parseInt(product.stock)
   res=parseInt(product.stock)
  
    return(
      res
    )
})
  
}

  prepareData=()=>{
   
    return ({
      labels: this.getLebels(),
     
      datasets: [
        {
          label: 'Stock',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: this.getStockData()
        }
      ]
    })
  }

  

    render() { 
        return (  
      
           <div>
          <section class="aflogin">
  <nav class="dashnav">
   
    <h1 class="h1dash">DashBoard</h1>
    
    <br></br><br></br>
      <button class="btndashselect">Dashboard</button>
      <br></br><br></br>
      <Link to='/addproduct'><button class="btndash">Add Product</button></Link>
      <br></br><br></br>
      <Link to='/products'><button class="btndash">View Products</button></Link>
      <br></br><br></br>
      <Link to='/'><button class="btndash">LogOut</button></Link>
  </nav>
  
  <article>
  

<div class="divgraph">

<label>Category: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select class="form-control1" id="category" onChange={this.getSearch}>
                    <option value="">All Products</option>
  <option value="Electronics">Electronics</option>
  <option value="Clothes">Clothes</option>
  <option value="Home & Furniture">Home & Furniture</option>
  <option value="Sports">Sports</option>
  <option value="Home & Kitchen">Home & Kitchen</option>
  
  <option value="Home & Bathroom">Home & Bathroom</option>
  <option value="Home Lighting">Home Lighting</option>
</select>

    <Bar
          data={this.prepareData}
          options={{
            title:{
              display:true,
              text:'Stock Monitoring',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
  </article>
</section>
        
            </div>
        )
    }

}

export default Dashboard;
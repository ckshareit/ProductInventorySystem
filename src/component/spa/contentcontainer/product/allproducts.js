import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

import { Switch, Route } from "react-router-dom";
import AddProduct from './addproduct';
import DeleteProduct from './deleteproduct';
import UpdateProduct from './updateproduct';
import ProductDetail from './productdetail';
import '../../../../main.css';


class AllProducts extends React.Component {

    constructor(props){
        super(props)
        this.state={
            products:[],
            searchProducts:[],
            deleteSuccess:false,
            myid:0,
            searchValue:'',
        }
    }

    componentWillMount(){
        this.getAllProducts()
    }

    componentDidMount(){
        console.log(this.props)    
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

    deleteProductWithId=(id)=>{
        console.log('delete product for received id: ' + id);
        axios.delete('http://localhost:3006/products/' + id)
                .then(response=>{
                    console.log(response);
                     this.setState({deleteSuccess: true})
                     this.getAllProducts()
                     
                }, error=>{
                    console.error(error)
                })
    }
    updateProductWithId=(id)=>{
        this.setState({myid: id})
        console.log('Update with id: ' + id);
        this.props.history.push({
                                    pathname: '/updateProduct', 
                                    state: {myid: id}
                                })
    }


    renderAllProducts=()=>{
        return this.state.searchProducts.map(product=>{
            return(
              
                    <ProductDetail
                    ProductId={product.id}
                        ProductName={product.ProductName}
                        Category={product.Category}
                        SubCategory={product.SubCategory}
                        Brand={product.Brand}
                        Rating={product.Rating}
                        Price={product.Price}
                        Stock={product.stock}
                        Image={product.ProductImage}
                        deleteId={this.deleteProductWithId}
                        updateId={this.updateProductWithId}
                    >

                    </ProductDetail>
                    
            )
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
                                return p.ProductName.toLowerCase().match(searchV.toLowerCase())
                            })
        console.log(searchF);    
        this.setState({searchProducts: searchF})                

    }
   
    render() { 
        return (  
        
           <div>
            <section class="aflogin">
               
  <nav class="dashnav">
   
    <h2 class="h1dash">All Products</h2>
    <br></br><br></br>
      <Link to='/dashboard'><button class="btndash">Dashboard</button></Link>
      <br></br><br></br>
      <Link to='/addproduct'><button class="btndash">Add Product</button></Link>
      <br></br><br></br>
      <button class="btndashselect">View Products</button>
      <br></br><br></br>
      <Link to='/'><button class="btndash">LogOut</button></Link>
  </nav>
  
  <article>
  <div class="search">
                <input value={this.state.searchValue} onChange={this.getSearch} style={{color: "blue"}} class="form-control mr-sm-2" type="text" placeholder="Search.."></input>
                </div>
  {this.renderAllProducts()}
  
  </article>
</section>
           
                  
                   
               
               
           </div>
        );
    }
}
 
export default AllProducts;
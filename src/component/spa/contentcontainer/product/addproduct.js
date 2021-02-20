import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../../../main.css';


class AddProduct extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            id:'',
            productName:'',
            category:'',
            subCategory:'',
            brand:'',
            price:'',
            stock:'',
            productImage:'',
            idError:'',
           productNameError:'',
           categoryError:'',
           subCategoryError:'',
           brandError:'',
           priceError:'',
           stockError:'', 
            productError:''
          
        }
    }

  
    getProductName=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({productName: event.target.value})  
    }
    getCategory=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({category: event.target.value})  
    }
    getSubCategory=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({subCategory: event.target.value})  
    }
    getBrand=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({brand: event.target.value})  
    }
    getPrice=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({price: event.target.value})  
    }

    getStock=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({stock: event.target.value})  
    }

    getProductImage=(event)=>{

        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({productImage: event.target.value.substr(12)})
    }

    checkPrice=()=>{ 
        var letters = /^[0-9]+$/;
        if(this.state.price.match(letters))
        {
        return true;
        }
        else
        {
        return false;
        }
        }

        checkStock=()=>{ 
            var letters = /^[0-9]+$/;
            if(this.state.stock.match(letters))
            {
            return true;
            }
            else
            {
            return false;
            }
            }

    checkValidation=()=>{

        if(this.state.productName.length==0){
            this.setState({productNameError: ' Enter Product Name'})
            return false
        }
        else  if(this.state.category.length==0){
            this.setState({categoryError: ' Select Product Category'})
            return false
        }
        else  if(this.state.subCategory.length==0){
            this.setState({subCategoryError: ' Select Sub Category'})
            return false
        }
        else  if(this.state.brand.length==0){
            this.setState({brandError: ' Enter Product Brand'})
            return false
        }
        else  if(this.state.price.length==0){
            this.setState({priceError: ' Enter Product Price'})
            return false
        }
        else  if(!(this.checkPrice())){
            this.setState({priceError: ' Enter Numeric Value'})
            return false
        }
        else  if(this.state.stock.length==0){
            this.setState({stockError: ' Enter Product Stock'})
            return false
        }
        else  if(!(this.checkStock())){
            this.setState({stockError: ' Enter Numeric Value'})
            return false
        }

        else{return true}
    }

    addProduct=()=>{

        if(this.checkValidation()){
        console.log('Add Product via axios and post')
        let productRequestBody = {
           
            "ProductName": this.state.productName,
            "Category":this.state.category,
            "SubCategory":this.state.subCategory,
            "Brand":this.state.brand,
            "Rating": 0,
            "Price": this.state.price,
            "stock":this.state.stock,
            "ProductImage": this.state.productImage
           
        }
        console.log(productRequestBody)

        axios.post('http://localhost:3006/products', productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/products')
                }, error=>{
                    console.error(error);
                   
                     this.setState({productError: 'Try with different Product ID'})
                 
                })
            }
    }

    render() { 
        return ( 
            <div>
                          <section class="aflogin">
  <nav class="dashnav">
   
    <h1 class="h1dash">Add Product</h1>
    <br></br><br></br>
      <Link to='/dashboard'><button class="btndash">Dashboard</button></Link>
      <br></br><br></br>
      <button class="btndashselect">Add Product</button>
      <br></br><br></br>
      <Link to='/products'><button class="btndash">View Products</button></Link>
      
      <br></br><br></br>
      <Link to='/'><button class="btndash">LogOut</button></Link>
  </nav>
  
  <article>
  <div id="addproduct">
  <br></br><br></br>
                <form>
                   

                    <label>Product Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="productName" onChange={this.getProductName}></input>
                    <span class="error"> {this.state.productNameError}</span>
                    <br></br> <br></br>

                    <label>Category: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select class="form-control1" id="category" onChange={this.getCategory}>
                    <option value="">Select</option>
  <option value="Electronics">Electronics</option>
  <option value="Clothes">Clothes</option>
  <option value="Home & Furniture">Home & Furniture</option>
  <option value="Sports">Sports</option>
  <option value="Home & Kitchen">Home & Kitchen</option>
  
  <option value="Home & Bathroom">Home & Bathroom</option>
  <option value="Home Lighting">Home Lighting</option>
</select><span class="error"> {this.state.categoryError}</span>
                    <br></br> <br></br>


                    
                    <label>Sub Category: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select class="form-control1" id="subCategory" onChange={this.getSubCategory}>
                    <option value="">Select</option>
  <option value="Fashion">Fashion</option>
  <option value="Accessories">Accessories</option>
  <option value="Mobile">Mobile</option>
  <option value="Outdoor">Outdoor</option>
  <option value="Utensil">Utensil</option>
  <option value="Decoration">Decoration</option>

                    </select>
                    <span class="error"> {this.state.subCategoryError}</span>
                    <br></br> <br></br>

                    <label>Brand: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="brand" onChange={this.getBrand}></input>
                    <span class="error"> {this.state.brandError}</span>
                    <br></br> <br></br>

                    <label>Price: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="price" onChange={this.getPrice}></input>
                    <span class="error"> {this.state.priceError}</span>
                    <br></br> <br></br>

                    <label>Stock: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="stock" onChange={this.getStock}></input>
                    <span class="error"> {this.state.stockError}</span>
                    <br></br> <br></br>

                    <label>Product Image: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control2" type="file" onChange={this.getProductImage} multiple accept='image/*'  id="productImage" ></input>
                    
                    <br></br> <br></br>
                   
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="btnr" type="button" onClick={this.addProduct} >Add Product</button>
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <div class="error">{this.state.productError}</div><br></br>
                    
                </form>
                </div>
 
  </article>
</section>
           
            </div>
         );
    }
}
 
export default AddProduct;
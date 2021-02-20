import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


class UpdateProduct extends React.Component {
    constructor(props){
        super(props)
      
        this.state={
            id:'',
            productName:'',
            category:'',
            subCategory:'',
            brand:'',
            rating:'',
            price:'',
            stock:'',
            image:'',
            idError:'',
            productNameError:'',
            categoryError:'',
            subCategoryError:'',
            brandError:'',
            ratingError:'',
            priceError:'',
            stockError:'', 
             productError:''
          
        }

    }

    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3006/products/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        id:response.data.id,
                        productName:response.data.ProductName,
                        category:response.data.Category,
                        subCategory:response.data.SubCategory,
                        brand:response.data.Brand,
                        rating:response.data.Rating,
                        price:response.data.Price,
                        stock:response.data.stock,
                        image:response.data.ProductImage
                    })
                }, error=>{
                    console.error(error);
                })
        }
    }

    getID=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({id: event.target.value})  
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

    getRating=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({rating: event.target.value})  
    }

    getProductImage=(event)=>{

        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({image: event.target.value.substr(12)})
    }

    /*
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
*/
    checkValidation=()=>{

        if(this.state.id.length==0){
            this.setState({idError: ' Enter Product ID'})
            return false
        }
       else if(this.state.productName.length==0){
            this.setState({productNameError: ' Enter Product Name'})
            return false
        }
        else  if(this.state.category.length==0){
            this.setState({categoryError: ' Enter Product Category'})
            return false
        }
        else  if(this.state.subCategory.length==0){
            this.setState({subCategoryError: ' Enter Sub Category'})
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
        /*
        else  if(!(this.checkPrice())){
            this.setState({priceError: ' Enter Numeric Value'})
            return false
        }
        */
        else  if(this.state.stock.length==0){
            this.setState({stockError: ' Enter Product Stock'})
            return false
        }
        /*
        else  if(!(this.checkStock())){
            this.setState({stockError: ' Enter Numeric Value'})
            return false
        }
        */
        else  if(this.state.rating.length==0){
            this.setState({ratingError: ' Enter Product Rating'})
            return false
        }

        else{return true}
    }

    updateProduct=()=>{
        if(this.checkValidation()){
        console.log('Update Product and put')
        let productRequestBody = {
            "id": this.state.id,
            "ProductName":this.state.productName,
            "Category": this.state.category,
            "SubCategory":this.state.subCategory,
            "Brand": this.state.brand,
            "Rating":this.state.rating,
            "Price": this.state.price,
            "stock": this.state.stock,
            "ProductImage": this.state.image
        }
        axios.put('http://localhost:3006/products/'+this.state.id, productRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/products')
                }, error=>{
                    console.error(error);
                })
            }
    }


   
    render() { 

        if(this.props.location.state === undefined){
            return (
                <div>
                     <section class="aflogin">
  <nav class="dashnav">
   
    <h2 class="h1dash">Update Product</h2>
    <br></br><br></br>
      <Link to='/dashboard'><button class="btndash">Dashboard</button></Link>
      <br></br><br></br>
      <Link to='/addproduct'><button class="btndash">Add Product</button></Link>
      <br></br><br></br>
      <Link to='/products'><button class="btndash">View Products</button></Link>
      <br></br><br></br>
      <button class="btndashselect">Update Product</button>
      <br></br><br></br>
      <Link to='/'><button class="btndash">LogOut</button></Link>
  </nav>
  
  <article>
  <center><h1 style={{color: "red"}}>Click on <b>View Products </b></h1></center>
  <center><h2>Then <b>Select Product</b> to Update</h2></center>

  
  </article>
</section>    
                   
                </div>
            )
        }

        return ( 

            <div>
               <section class="aflogin">
  <nav class="dashnav">
   
    <h2 class="h1dash">Update Product</h2>
    <br></br><br></br>
      <Link to='/dashboard'><button class="btndash">Dashboard</button></Link>
      <br></br><br></br>
      <Link to='/addproduct'><button class="btndash">Add Product</button></Link>
      <br></br><br></br>
      <Link to='/products'><button class="btndash">View Products</button></Link>
      <br></br><br></br>
      <button class="btndashselect">Update Product</button>
      <br></br><br></br>
      <Link to='/'><button class="btndash">LogOut</button></Link>
  </nav>
  
  <article>
  <div id="updateproduct">
  <br></br><br></br>
                <form>
                    <label>Product ID: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="id" value={this.state.id} onChange={this.getID} disabled={true}></input>
                    <span class="error"> {this.state.idError}</span>
                    <br></br> <br></br>

                    <label>Product Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="productName" value={this.state.productName} onChange={this.getProductName}></input>
                    <span class="error"> {this.state.productNameError}</span>
                    <br></br> <br></br>

                    <label>Category: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select class="form-control1" id="category" value={this.state.category} onChange={this.getCategory}>
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
                    <select class="form-control1" id="subCategory" value={this.state.subCategory} onChange={this.getSubCategory}>
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
                    <input class="form-control1" type='text' id="brand" value={this.state.brand} onChange={this.getBrand}></input>
                    <span class="error"> {this.state.brandError}</span>
                    <br></br> <br></br>

                    <label>Price: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="price" value={this.state.price} onChange={this.getPrice}></input>
                    <span class="error"> {this.state.priceError}</span>
                    <br></br> <br></br>

                    <label>Stock: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="stock" value={this.state.stock} onChange={this.getStock}></input>
                    <span class="error"> {this.state.stockError}</span>
                    <br></br> <br></br>

                    <label>Rating: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="rating" value={this.state.rating} onChange={this.getRating}></input>
                    <span class="error"> {this.state.ratingError}</span>
                    <br></br> <br></br>

                    <label>Product Image: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control2" type="file" onChange={this.getProductImage} multiple accept='image/*'  id="productImage" ></input>
                    
                    
                    
                  
                   
                    <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="btnr" type="button" onClick={this.updateProduct} >Update Product</button>
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <div class="error">{this.state.productError}</div><br></br>
                    
                </form>
                </div>
  
  </article>
</section>    
            
            </div>
         );
    }
}
 
export default UpdateProduct;
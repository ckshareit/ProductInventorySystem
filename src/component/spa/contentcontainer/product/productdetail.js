import React from 'react';
import axios from "axios";
import '../../../../main.css';


class ProductDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
        }
       
    }

    deleteCurrentProduct=()=>{
        console.log("delete product with id: " + this.props.ProductId);
        this.props.deleteId(this.props.ProductId)
    
    }

    updateProductWithId=()=>{
        
        console.log("Update Product with id: " + this.props.ProductId);
        this.props.updateId(this.props.ProductId)
    }

    render() { 
        return ( 

            <div class="divproduct">
                 <table><tr class="trpro"><td class="trpro">
                <div class="divprodetail">
                   
                    <img src={"images/" +this.props.Image} width="250px" height="250px"  alt="Product image"></img><br></br><br></br>
                   
                    &nbsp;&nbsp;&nbsp;&nbsp; <label>Rating: </label>&nbsp;&nbsp; {this.props.Rating}
                </div></td>&nbsp;&nbsp;
                <td class="trpro">
                   <div class="divprodetail">     
                   <h1>{this.props.ProductName}</h1>   <br></br>
                   <h3>Price:   {this.props.Price}</h3> <br></br>
                   </div>
</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<td class="trpro"><div>
                   <label>Category: </label>&nbsp;&nbsp; {this.props.Category}<br></br><br></br>
                   <label>Sub Category: </label>&nbsp;&nbsp; {this.props.SubCategory}<br></br><br></br>
                   <label>Brand: </label>&nbsp;&nbsp; {this.props.Brand}
                  

</div></td>
<td class="trpro">
<div class="divprodetail">
    <button class="btnpro" onClick={this.updateProductWithId}>Update</button><br></br><br></br>
    <button class="btnpro" onClick={this.deleteCurrentProduct}>Delete</button>
    </div></td></tr>
</table>
      </div>
           
                 
        )
    }

}

export default ProductDetail;
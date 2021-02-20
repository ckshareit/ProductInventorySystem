import React from 'react';
import axios from 'axios'
import '../../../../main.css';

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:'',
            emailError:'',
            passwordError:'',
          
          
        }
    }


    
    getEmail=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({email: event.target.value})
     

    }

    getPassword=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({password: event.target.value})
       

    }

    checkEmail=()=>{ 
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(this.state.email.match(mailformat))
        {
        return true;
        }
        else
        {
        return false;
        }
        }

        checkValidation=()=>{
            if(this.state.email.length==0){
                this.setState({emailError: ' Email cannot be Blank'})
                return false
            }
            else if(!(this.checkEmail())){
                this.setState({emailError: ' Invalid Email'})
                return false
            }
            
            else if(this.state.password.length==0){
                this.setState({passwordError: ' Enter Password'})
                return false
            }
            else{return true}
            
         }

    loginUser=()=>{

        if(this.checkValidation()){
      
            
                    this.props.history.push('/dashboard')
                   
            }
    }
   
    render() { 
        return ( 
            <div>
                <div id="register">
                <h1 class="textfont"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; User Login !!!!</h1><hr></hr>
                <br></br>
                <form>
                    <label>Email: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='email' id="email" onChange={this.getEmail}></input>
                    <span class="error"> {this.state.emailError}</span>
                    <br></br> <br></br>
                    
                    <label>Password: </label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='password' id="password" onChange={this.getPassword}></input>
                    <span class="error">{this.state.passwordError}</span>
                    <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="btnr" type="button" onClick={this.loginUser} >Login</button>
                    <br></br><br></br>
                    
                </form>
                </div>
            </div>
         );
    }
}
 
export default Login;
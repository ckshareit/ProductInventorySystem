import React from 'react';
import axios from 'axios'
import '../../../../main.css';

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            email:'',
            name:'',
            gender:'',
            password:'',
            emailError:'',
            nameError:'',
            genderError:'',
            passwordError:'',
            userError:''
          
        }
    }

    

   

    getEmail=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({email: event.target.value})
     

    }

    getName=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})
       

    }
    getGender=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({gender: event.target.value})
       

    }

    getPassword=(event)=>{
        
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({password: event.target.value})
       

    }

checkChar=()=>{ 
var letters = /^[a-zA-Z]+$/;
if(this.state.name.match(letters))
{
return true;
}
else
{
return false;
}
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
        else if(this.state.name.length==0){
            this.setState({nameError: ' Name cannot be Blank'})
            return false
        }
        else if(!(this.checkChar())){
            this.setState({nameError: ' Enter Alphabets Only'})
            return false
        }
        else if(this.state.gender.length==0){
            this.setState({genderError: '      Select Gender'})
            return false
        }
        else if(this.state.password.length==0){
            this.setState({passwordError: ' Enter Password'})
            return false
        }
        else{return true}
        
     }

    addUser=()=>{

        if(this.checkValidation()){
        console.log('Add User via axios and post')
        let userRequestBody = {
            "id": this.state.email,
            "name": this.state.name,
            "gender": this.state.gender,
            "password": this.state.password
        }
        console.log(userRequestBody)

        axios.post('http://localhost:3006/users', userRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/login')
                }, error=>{
                    console.error(error);
                   
                     this.setState({userError: 'Try with different Email ID'})
                 
                })
            }
    }


    render() { 
        return ( 
            <div>
                
                <div id="register">
                <h1 class="textfont">User Registration !!!!</h1><hr></hr>
                <br></br>
                <form>
                    <label>Email: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='email' id="email" onChange={this.getEmail}></input>
                    <span class="error"> {this.state.emailError}</span>
                    <br></br> <br></br>
                    <label>Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='text' id="name" onChange={this.getName}></input>
                    <span class="error">{this.state.nameError}</span>
                    <br></br><br></br>
                    <label>Gender: </label> <span class="error">{this.state.genderError}</span>
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="male" name="gender" value="male" onChange={this.getGender}></input>&nbsp;&nbsp;<label>Male </label>
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="female" name="gender" value="female" onChange={this.getGender}></input>&nbsp;&nbsp;<label>Female </label>
                   
                    <br></br><br></br>
                    <label>Password: </label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input class="form-control1" type='password' id="password" onChange={this.getPassword}></input>
                    <span class="error">{this.state.passwordError}</span>
                    <br></br><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="btnr" type="button" onClick={this.addUser} >Register</button>
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <div class="error">{this.state.userError}</div><br></br>
                    
                </form>
                </div>
            </div>
         );
    }
}
 
export default Register;
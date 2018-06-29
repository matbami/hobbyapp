import React, { Component } from 'react';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';

import {Link,Redirect} from 'react-router-dom';
export default class Signup extends Component {
   constructor(props){
     super(props);
     this.state = {
       username:'',
       email:'',
       password:'',
       phonenumber:'',
      //  password2:''
     }
   }

   signUp(){
    const user = {
      username:this.state.username,
      password:this.state.password,
      phonenumber:this.state.phonenumber,
      email:this.state.email
    }
    axios.post("http://localhost:1337/register",user)
    .then(res=>{
      console.log(res.data)
      alert(res.data.message);
      toast.success(res.data.message);
    })
   
     console.log('this.state',this.state);
   }
  render() {
      return (
        
          
        <div className = "form-inline">
        <h2>Sign up</h2>
        <div className="form-group">
        <input className ="form-control" type ="text" placeholder= "username" onChange={event=> this.setState({username:event.target.value})}/>
        <input className ="form-control" type ="text" placeholder= "email" onChange={event=> this.setState({email:event.target.value})}/>
        <input className ="form-control" type ="number" placeholder= "number" onChange={event=> this.setState({phonenumber:event.target.value})}/>
        <input className ="form-control" type ="password" placeholder= "password"  onChange={event=> this.setState({password:event.target.value})}/>
        
        {/* <input className ="form-control" type ="password" placeholder= "password" onChange={event=> this.setState({password2:event.target.value})}/> */}
        <button className= "btn btn-primary" type = "button" onClick={()=> this.signUp()} >Signup</button>
        
        
        </div>
        <p> registered? <Link to = {'/login'}>Login</Link></p>
        </div>
      );
    }
  }

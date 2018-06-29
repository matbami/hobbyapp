import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      // isLoggedIN: false,
      // errormessage=''
      
     
    }
  }

 
  login(){
    const user = {
      username:this.state.username,
      password:this.state.password
    }
    // alert(this.state.username);
    // alert(this.state.password);
    axios.post("http://localhost:1337/login",user)
    .then(res=>{
      console.log(res.data)
      // localStorage.setItem("username", user.username);
      // localStorage.setItem("id", user.id);
      alert(res.data.users.id);
      

      toast.success(res.data.message);
    })
    console.log('this.state',this.state);
  }
    render() {
      // if (this.state.isLoggedIN==true){

      // }
      return (
        <div id = "app">
        <h2>LOGIN</h2>
        <div className="form-inline">
        <label for= "username">enter username</label>
        <input className="form-control" type = "text" placeholder="enter username" id = "username" onChange={event=> this.setState({username:event.target.value})} /> <br/>
       

       <label for= "username">enter password</label>
        <input className="form-control" type = "password" placeholder="password" id = "password" onChange={event=> this.setState({password:event.target.value})} /> <br/>
      

    
      <button className="btn btn-primary" type="submit"  onClick={()=> this.login()}>Login</button>
      </div>

    <p>Not registered? <Link to = {'/signup'}>sign up</Link></p>
    <ToastContainer />
        </div>
      );
    }
  }
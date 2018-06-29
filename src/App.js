import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route} from 'react-router-dom';
// import Route from  "react-router-dom";
import './App.css';
import './css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import Routes from "./routers/router"
import Signup from "./componenets/Signup"

import Login from "./componenets/Login"
import Update from "./componenets/Update"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        
      <Route path="/" exact render={
          ()=>{
            return (<Login />)
          }
        } />
        <Route path="/signup" exact render={
          ()=>{
            return ( <Signup />)
          }
        } />
       

        <Route path="/login" exact render={
          ()=>{
            return (<Login />)
          }
        } />

         <Route path="/update" exact render={
          ()=>{
            return (<Update />)
          }
        } />
       
       
      </div>

      
        </BrowserRouter>
    );
  }
}

export default App;
``
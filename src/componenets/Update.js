import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';


export default class Update extends Component{
    constructor(props){
        super(props);

        this.state = {
            hobbies:[]
        }
    }
    addhobbies(e){
        e.preventDefault(); 
        const {hobbies} = this.state;
        const newItem = document.getElementById("newitem").value;
        const newbody = document.getElementById("newbody").value;

        //this.addForm.reset(); 

        const hobby = {
            title:newItem,
            username:localStorage.getItem("username"),
            userid:localStorage.getItem("id"),
            body:newbody
          }
          axios.post("http://localhost:1337/addhobbies",hobby)
          .then(res=>{
            console.log(res.data)
          })
         
           console.log('this.state',this.state);

    }

    render(){
        const {hobbies} = this.state;
        return(
            <div>
            <header>
                <h1>My Hobbies</h1>
            <form ref ={input => this.addForm =input} className="form-group" onSubmit={(e) =>{this.addhobbies(e)}}>
            <div className="form-group">
            <label className ="sr-only" htmlFor="newItemInput"> Add New Hobby</label>
            <input ref={input => this.newItem = input} type="text" placeholder="e.g title" className="form-control" id="newitem"/>
            {/* <input ref={input => this.newItem = input} type="text" placeholder="e.g body" className="form-control" id="newBody"/> */}<br/>
            <textarea placeholder="body" className="form-control" type="text" id = "newbody"></textarea>



            </div>
            <button type = "submit" className="btm btn-primary">Add</button>
            </form>
                </header>
                <div className = "content">
                <table className = "table">
                <caption>Hobbies List</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Hobbies</th>
                        <th>Action</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                    hobbies.map(item =>{
                        return(
                            <tr key={item}>
                            <th scope ="row">1</th>
                            <td> {item}</td>
                            {/* <td>{hobbies}</td> */}
                            <td>Button</td>
                            
                            </tr>
                        )
                    })
                    }
                        </tbody>       
                </table>
                </div>


            </div>
        )
    }
}
import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import fire from '../config/config';



class inicio extends Component {
    constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state={
        email : "",
        password : ""
    }
}

    componentDidMount(){
    this.authListener();
 }

    authListener(){
    fire.auth().onAuthStateChanged((email)=>{
      if(email)
      {
        this.setState({email})
        this.props.history.push('/')
      }
      else{
        this.setState({email :null })
      }
    })
}

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{                 
            this.authListener();
            console.log(u)
            localStorage.setItem('user', this.state.email);
        }).catch((err)=>{
            alert(err);
        })
        
    }

    handleChange = (e) => {
       this.setState({
           [e.target.id] : e.target.value
       })
    }

    handleSubmit(e){
        e.preventDefault();
    }
   
    render() {
        return(
            <div className="App">
                <form onSubmit={this.handleSubmit} className="white">
                <h5>Inicio</h5>
                <div className="input-field">
                    <label>Correo </label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label>Password </label>
                    <input type="password" id="password" onChange={this.handleChange} /> <br/>
                </div>
                <div className="input-field">
                    <button className="Button" onClick={this.login}>Iniciar Sesion</button> <space is = "html"/>
                    <button className="Button"><Link to="/registro">Registrarse </Link></button> <space is = "html"/> 
                    <button className="Button"><Link to="/">Volver</Link></button> <space is = "html"/> 
                    
                </div>
                </form>
            </div>
        )
    }
}

export default inicio;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import fire from '../config/config'

class registro extends Component {
    state = {
        email: '',
        password: '',
        nombre: '',
        apellido: ''
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
    handleChange = (e) => {
       this.setState({
           [e.target.id] : e.target.value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(
        (info)=>{
         if(info.user){
        info.user.updateProfile({
         displayName: this.state.nombre,
        displayApellido: this.state.apellido
         }).then(
        (s)=> {
            alert('Registrado con exito');
            console.log(s);
        }
      )
    }
})
.catch(function(error) {
 alert(error)
});
        
    }
    render() {
        return(
            <div className="App">
                <form onSubmit={this.handleSubmit} className="white">
                <h5>Registro</h5>
                <div className="input-field">
                    <label htmlFor="nombre">Nombre </label>
                    <input type="nombre" id="nombre" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="apellido">Apellido </label>
                    <input type="apellido" id="apellido" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email </label>
                    <input type="email" id="email" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password </label>
                    <input type="password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="Button">Registrase </button> <space is ="html"/>
                    <button className="Button"><Link to="/inicio">Iniciar Sesion</Link></button> <space is = "html" />
                    <button className="Button"><Link to="/">Volver</Link></button> <space is = "html"/>

                </div>
                </form>
            </div>
        )
    }
}

export default registro;
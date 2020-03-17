import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

class Anonimo extends Component{

	render() {
		return (
			<div className="NoteForm">
			<h5>Debe <button className="Button"><Link to="/inicio">Iniciar Sesion</Link></button> <space is = "html"/> para poder publicar notas</h5> <br/>
            <h5>O tambien puede <button className="Button"><Link to="/registro">Registrarse </Link></button> <space is = "html"/></h5>	
			</div>
		)
	}
}

export default Anonimo;



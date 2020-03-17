import React, { Component } from 'react';
import './NoteForm.css';
import fire from '../config/config';


class NoteForm extends Component {
	constructor() {
		super();
		this.state = {
			newNoteText: ''
			
		};
		this.handleUserInput = this.handleUserInput.bind(this);
		this.addNote = this.addNote.bind(this);
		this.logout = this.logout.bind(this);

	}


	handleUserInput(e) {
		this.setState({
			newNoteText: e.target.value
		})
	}

	addNote() {
		this.props.addNote(this.state.newNoteText);
		
		this.setState({
			newNoteText: ''			
		});
		this.textInput.focus();
	}

	componentDidMount() {
		this.textInput.focus();
	}

	logout(){
		fire.auth().signOut();
		
	}

	render() {
		return (
			<div className="NoteForm">
				<input
					placeholder="Escribe una nueva Nota"
					className="noteInput"
					ref={input => { this.textInput = input;}}
					value={this.state.newNoteText}
					onChange={this.handleUserInput}
					type="text"/>
				<button 
					onClick={this.addNote}
					className="noteButton">
					Agregar Nota
				</button> <space is ="html"/>
				<button className="Button" onClick={this.logout}>Log out</button> 

			</div>
		)
	}
}

export default NoteForm;

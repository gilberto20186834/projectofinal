import React, { Component } from 'react';

import Note from '../Note/Note';
import NoteForm from '../NoteForm/NoteForm';
import Anonimo from '../Note/Anonimo';


import fire from '../config/config';
import 'firebase/database';

class Muro extends Component {

	constructor() {
		super();
		this.state = {
			notes: [],
			user: {},			
		}
		this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);
	


		this.app = fire;
		this.db = this.app.database().ref().child('notes');
	}

	componentDidMount() {
		const { notes } = this.state;
		this.db.on('child_added', snap => {
			notes.push({
				noteId: snap.key,
				noteContent: snap.val().noteContent
			});

			this.setState({notes});
			this.authListener();
		});

		this.db.on('child_removed', snap => {
			for(let i = 0; i < notes.length; i++) {
				if(notes[i].noteId === snap.key) {
					notes.splice(i , 1);
				}
			}

			this.setState({notes});
		});

	}

	authListener(){
		fire.auth().onAuthStateChanged((user)=>{
		  if(user)
		  {
			user = user.displayName;
		  }
		  else{
			this.setState({user :null })
		  }
		})
	}
	addNote(note) {

		this.db.push().set({noteContent: note});
	}	

	removeNote(noteId) {
		this.db.child(noteId).remove();
	}

	render() {
		return (
			<div className="notesContainer">
			
				<div className="notesHeader">
					<h1>Muro Interactivo de Notas</h1>
				</div>

				<div className="notesBody">
					{
						this.state.notes.map(note => {
							return (
								<Note 
									noteContent={note.noteContent} 
									noteId={note.noteId}
									key={note.noteId}
									removeNote={this.removeNote}
								/>)
						})
					}
					
				</div>
				
				<div className="notesFooter">
					{this.state.user ?
					 (<NoteForm addNote={this.addNote}/> ) : 
					 (<Anonimo/>)}			
					
				</div>
				
			</div>
		);
	}
}

export default Muro;

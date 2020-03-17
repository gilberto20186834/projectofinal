import React, { Component } from 'react';
import './Note.css';
import propTypes from 'prop-types';
//import fire from '../config/config'

class Note extends Component {
	
	constructor(props) {
		super(props);
		this.noteContent = props.noteContent;
		this.noteId = props.noteId;
		//this.user= pros.user;
	}

	

	render(props) {
		return (
			<div className="Note">
			
				<p>{this.noteContent}</p>
			</div>
		)
	}

}

Note.propTypes = {
	noteContent: propTypes.string	
};

export default Note;

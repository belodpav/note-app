import React, {Component} from 'react';
import './style.css';
import NoteItem from '../NoteItem/';

class NoteList extends Component {
	render() {
		const notesList = this.props.notesList;
		
		return (
			<div className="notes-list">
				{
					notesList.map( note => 
						(<NoteItem key={note.id} id={note.id} onDeleteNote={this.props.onDeleteNote}> {note.text} </NoteItem>) )
				}
			</div>
		);
	}
}

export default NoteList;
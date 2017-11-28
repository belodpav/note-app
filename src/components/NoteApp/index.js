import React, {Component} from 'react';
import './style.css';
import NoteEditor from '../NoteEditor/';
import NoteList from '../NoteList/';


class NoteApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notesList: []
		};
		this.handleCreateNote = this.handleCreateNote.bind(this);
		this.handleDeleteNote = this.handleDeleteNote.bind(this);
	}
	componentDidMount() {
		try {
			const notes = JSON.parse(localStorage.getItem('notes'));
			if (notes) {
				this.setState({
					notesList: notes
				});
			}
			
		} catch(err) {
			console.error(err);
		}
	}
	componentDidUpdate() {
		this.saveToLocalStorage();
	}
	handleCreateNote(note) {
		
		this.setState({
			notesList: [note, ...this.state.notesList]
		});
		if (!localStorage) {
				
		}
	}
	saveToLocalStorage() {
		localStorage.setItem('notes', JSON.stringify(this.state.notesList));
	}
	handleDeleteNote(id) {
		this.setState({
			notesList: this.state.notesList.filter( note => 
				note.id === id ? false : true
			)
		});
	}
	render() {
		return (
			<div className="note-app">
				<div className="note-app__header">
					<div className="note-app__inner">
						<p className="note-app__title">Store your notes easy</p>
						<NoteEditor onCreateNote={this.handleCreateNote} />
					</div>
				</div>
				<div className="note-app__inner">
					<NoteList onDeleteNote={this.handleDeleteNote} notesList={this.state.notesList} />
				</div>
			</div>
		);
	}
}

export default NoteApp;
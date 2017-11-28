import React, {Component} from 'react';
import './style.css';

const ENTER_KEY = 13;

class NoteEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.onChangeText = this.onChangeText.bind(this);
		this.onCreateNote = this.onCreateNote.bind(this);
		this.addNewNote = this.addNewNote.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
	}
	onChangeText(event) {
		this.setState({
			text: event.target.value
		})
	}
	addNewNote() {
		if (!this.state.text) return;
		this.props.onCreateNote({
			text: this.state.text,
			id: Date.now()
		});
		this.setState({ text: '' });
	}
	onKeyDown(event) {
		if (!event.shiftKey && event.keyCode === ENTER_KEY) {
			this.refs.myTextArea.blur();
			this.addNewNote()
			event.preventDefault();
			
		}
	}
	onCreateNote(event) {
		this.addNewNote();
		event.preventDefault();
	}
	
	render() {
		return (
			<div className="note-editor">
				<div className="note-editor__form">
					<textarea 
						className={"note-editor__textarea" + (!this.state.text ? " note-editor__textarea--empty" : "")}  
						placeholder="Start typing your new note..."
						value={this.state.text}
						onChange={this.onChangeText}
						onKeyDown={this.onKeyDown}
						ref='myTextArea'
					>
					</textarea>
					<button
						className="note-editor__btn"
						onClick={this.onCreateNote}
					>
					Add
					</button>
				</div>
			</div>
		);
	}
}

export default NoteEditor;
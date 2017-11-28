import React, {Component} from 'react';
import './style.css';

class NoteItem extends Component {
	constructor(props) {
		super(props);
		this.onDeleteNote = this.onDeleteNote.bind(this);
	}
	onDeleteNote() {
		this.props.onDeleteNote(+this.props.id);
	}
	render() {
		const content = this.props.children;
		return (
			<div className="noteItem">
				<div className="noteItem__wrapper">
					<div className="noteItem__content">
						{content}
					</div>
					<button 
						className="noteItem__delete-btn"
						onClick={this.onDeleteNote}
					>
					x
					</button>
				</div>
			</div>
		);
	}
}
export default NoteItem;


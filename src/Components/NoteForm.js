import React, { Component } from "react";
import { connect } from "react-redux";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.editItem) {
      const { key, noteTitle, noteContent } = this.props.editItem;
      this.setState({
        id: key,
        noteTitle,
        noteContent,
      });
    }
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddNote = () => {
    const { showForm } = this.props;
    const { id, noteTitle, noteContent } = this.state;
    if (id) {
      const note = { id, noteTitle, noteContent };
      const { editData } = this.props;
      editData(note);
      showForm();
    } else {
      const note = { noteTitle, noteContent };
      const { addNote } = this.props;
      addNote(note);
      showForm();
    }
  };

  renderTitle = () => {
    if (this.state.id) {
      return "Edit Note";
    }
    return "Add Note";
  };

  render() {
    const { noteTitle, noteContent } = this.state;
    return (
      <div className="col-4">
        <h4>{this.renderTitle()}</h4>
        <form>
          <div className="form-group">
            <label htmlFor="noteTitle">Note Title</label>
            <input
              type="text"
              className="form-control"
              name="noteTitle"
              id="noteTitle"
              aria-describedby="helpIdNoteTitle"
              onChange={this.onChange}
              defaultValue={noteTitle}
              placeholder="Input Note Title..."
            />
            <small id="helpIdNoteTitle" className="form-text text-muted">
              Input Note Title
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="noteContent">Note Content</label>

            <input
              type="text"
              className="form-control"
              name="noteContent"
              id="noteContent"
              aria-describedby="helpIdNoteContent"
              onChange={this.onChange}
              defaultValue={noteContent}
              placeholder="Input Note Content..."
            />
          </div>
          <button
            type="reset"
            className="btn btn-block btn-primary"
            onClick={this.handleAddNote}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editItem: state.editItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => {
      dispatch({
        type: "ADD",
        note,
      });
    },
    editData: (note) => {
      dispatch({ type: "EDIT", note });
    },
    showForm: () => {
      dispatch({
        type: "SHOW_FORM",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);

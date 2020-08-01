import React, { Component } from "react";
import { connect } from "react-redux";

class NoteItem extends Component {
  handleEditNote = () => {
    const { showForm, sendEdit, note } = this.props;
    showForm();
    sendEdit(note);
  };

  handleDeleteNote = () => {
    const { noteDelete, note } = this.props;
    noteDelete(note.key);
  };

  render() {
    const { i } = this.props;
    const { noteTitle, noteContent } = this.props.note;
    return (
      <div className="card">
        <div className="card-header" role="tab" id="note1">
          <h5 className="mb-0">
            <a
              data-toggle="collapse"
              data-parent="#noteList"
              href={`#number${i}`}
              aria-expanded="true"
              aria-controls="noteContent1"
            >
              {noteTitle}
            </a>
            <div className="btn-group float-right">
              <div className="btn btn-success" onClick={this.handleEditNote}>
                Edit
              </div>
              <div
                className="btn btn-danger ml-1"
                onClick={this.handleDeleteNote}
              >
                Delete
              </div>
            </div>
          </h5>
        </div>
        <div
          id={`number${i}`}
          className="collapse in"
          role="tabpanel"
          aria-labelledby="note1"
        >
          <div className="card-body">{noteContent}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    noteDelete: (deleteID) => {
      dispatch({
        type: "DELETE",
        deleteID,
      });
    },
    showForm: () => {
      dispatch({
        type: "SHOW_FORM",
      });
    },
    sendEdit: (noteEdit) => {
      dispatch({
        type: "SEND_EDIT",
        noteEdit,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(NoteItem);

import React, { Component } from "react";
import { DataNotes as DataBase } from "./DataBase";
import NoteItem from "./NoteItem";
import { connect } from "react-redux";

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NotesData: [],
    };
  }

  componentDidMount() {
    this.props.showLoading();
    DataBase.on("value", (notes) => {
      var NotesData = [];
      notes.forEach((note) => {
        const key = note.key;
        const { noteTitle, noteContent } = note.val();
        NotesData.push({
          key,
          noteTitle,
          noteContent,
        });
      });
      this.setState({
        NotesData,
      });
    });
    setTimeout(() => {
      this.props.hideLoading();
    }, 1000);
  }

  getData = () => {
    if (this.state.NotesData) {
      return this.state.NotesData.map((value, key) => (
        <NoteItem i={key} key={key} note={value} />
      ));
    }
  };

  render() {
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {this.getData()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showLoading: () => {
      dispatch({
        type: "SHOW_LOADING",
      });
    },

    hideLoading: () => {
      dispatch({
        type: "HIDE_LOADING",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(NoteList);

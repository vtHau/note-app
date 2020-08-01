import React, { Component } from "react";
import "./../App.css";
import Nav from "./Nav";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import Loading from "./Loading";

class App extends Component {
  showForm = () => {
    if (this.props.showForm) {
      return <NoteForm />;
    }
  };

  render() {
    return (
      <div>
        <Nav />
        <ToastContainer position="bottom-right" />
        <div className="container">
          <div className="row">
            <NoteList />
            {this.showForm()}
          </div>
        </div>
        <Loading />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showForm: state.showForm,
  };
};

export default connect(mapStateToProps)(App);

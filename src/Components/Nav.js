import React, { Component } from "react";
import { connect } from "react-redux";

class Nav extends Component {
  addNote = (e) => {
    e.preventDefault();
    this.props.showForm();
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-dark mb-4"
        style={{ backgroundColor: "black" }}
      >
        <a className="navbar-brand" href="# ">
          TRUNG HAU
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavId"
        >
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#v">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="# " onClick={this.addNote}>
                Add Note
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showForm: () => {
      dispatch({
        type: "SHOW_FORM",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Nav);

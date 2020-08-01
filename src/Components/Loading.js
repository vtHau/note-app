import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingIcon from "./../images/loading.gif";

class Loading extends Component {
  render() {
    if (this.props.showLoading) {
      return (
        <div className="loading-mask">
          <img src={LoadingIcon} alt="loading" className="loading-icon" />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    showLoading: state.showLoading,
  };
};

export default connect(mapStateToProps)(Loading);

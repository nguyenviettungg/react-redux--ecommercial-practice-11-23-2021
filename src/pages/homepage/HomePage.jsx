import React, { Component } from "react";
import Directory from "../../components/directory/Directory";
import "./HomePage.styles.scss";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}
export default Homepage;

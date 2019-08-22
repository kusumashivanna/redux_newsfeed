import React, { Component } from "react";
import Newsfeedcontainer from "./container/Newsfeedcontainer";

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Newsfeedcontainer />
      </div>
    );
  }
}

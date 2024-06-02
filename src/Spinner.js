import React, { Component } from "react";
import loading2 from "./loading2.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          className="my-1"
          src={loading2}
          alt="loading2"
          width="50"
          height="50"
        />
      </div>
    );
  }
}

export default Spinner;

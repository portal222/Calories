import React, { Component } from 'react'

class Display extends Component {
  render() {
    let { result } = this.props;
    return <div className="result"> {result} </div>
  }
}
export default Display
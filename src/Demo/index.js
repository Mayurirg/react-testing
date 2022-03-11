import React, { Component } from 'react';
import { render } from 'react-dom';
class Reactstate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.toggleDiv = this.toggleDiv.bind(this);
  }
  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleDiv}>Toggle Div</button>;<br></br>
        {this.state.show && <Box />}
      </div>
    );
  }
}
class Box extends React.Component {
  render() {
    return <div>This is a div </div>;
  }
}
ReactDOM.render(<Reactstate />, document.getElementById('root'));

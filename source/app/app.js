import React from 'react';
import Application from 'meepworks/application';


export default class App extends Application {
  constructor(props, context) {
    super(props, context);
    this.state =  {
      msg: 'Meepworks'
    };
  }
  componentDidMount() {
    this.setState({
      msg: 'World'
    });
  }
  render() {
    return (
      <div>Hello {this.state.msg}!</div>
    );
  }
}

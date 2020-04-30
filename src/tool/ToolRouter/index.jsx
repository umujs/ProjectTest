import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'

export default class ToolRouter extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        {
          this.props.router.map(v => (
            <Route {...v}></Route>
          ))
        }
      </Fragment>
    );
  }
}

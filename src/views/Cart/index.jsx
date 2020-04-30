import React, { Component, Fragment } from 'react';

// 引入 组件(component) 模块
import TabBar from '../../components/TabBar';

export default class Cart extends Component {
  render() {
    return (
      <Fragment>
        Cart 
        <TabBar/>
      </Fragment>
    );
  }
}

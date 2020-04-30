import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// 引入 组件(component) 模块
import TabBar from '../../components/TabBar';

// 引入 工具(tool) 模块
import ToolRouter from '../../tool/ToolRouter'

// 引入路由配置
import { indexRoute } from '../../router/router.config'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        <nav>
          {/* <NavLink to={'/my-list'}>我的清单</NavLink> */}
          <NavLink to={'/'}>我的清单</NavLink>
          <NavLink to={'/city-hot'}>城市热卖</NavLink>
        </nav>
        {
          <ToolRouter router={indexRoute}></ToolRouter>
        }

        {
          // indexRoute.map(v => (
          //   <Route {...v}></Route>
          // ))
        }

        {/* <Route path={'/my-list'} component={MyList}></Route> */}
        {/* 如展开后效果 */}
        {/* <Route path={'/'} exact component={MyList}></Route> */}
        {/* <Route path={'/city-hot'} component={CityHot}></Route> */}

        <TabBar/>
      </Fragment>
    );
  }
}

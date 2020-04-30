import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 引入 工具(tool) 模块
// import ToolRouter from './tool/ToolRouter'

// 引入路由配置
import router from './router/router.config'

// 引入 CSS 文件
import './assets/css/vendor.css'
import './assets/css/bundle.css'

function App() {
  return (
    <div className="App">
      <Router>
        {/* Switch: 自上向下只匹配一个路由 */}
        <Switch>
          {
            // <ToolRouter router={router}></ToolRouter>
          }
          {
            router.map(v => (
              // path:路由路径 exact:精确匹配 component:所显示的模块
              <Route path={v.path} component={v.component} key={v.key}></Route>
            ))
          }
          {
            // 使用展开运算符 ...
            // router.map(v => (
            //   <Route {...v} key={v.key}></Route>
            // ))
          }
        </Switch>
      </Router>

      {/* 如展开后效果 */}
      {/* <Router> */}
        {/* Switch: 自上向下只匹配一个路由 */}
        {/* <Switch> */}
          {/* path:路由路径 exact:精确匹配 component:所显示的模块 */}
          {/* <Route path={'/mall'} component={Mall}></Route>
          <Route path={'/purchase'} component={Purchase}></Route>
          <Route path={'/cart'} component={Cart}></Route>
          <Route path={'/user-center'} component={UserCenter}></Route>
          <Route path={'/login'} component={Login}></Route>
          <Route path={'/'} component={Index}></Route>
          <Route path={'/404'} component={Error404}></Route> */}
        {/* </Switch> */}
      {/* </Router> */}

    </div>
  );
}

export default App;

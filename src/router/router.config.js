// 引入 页面(views) 模块
import Index from '../views/Index';
import Mall from '../views/Mall';
import Purchase from '../views/Purchase';
import Cart from '../views/Cart';
import UserCenter from '../views/UserCenter';
import Login from '../views/Login';
import Error404 from '../views/404';

// 引入 组件(component) 模块
import MyList from '../components/MyList'
import CityHot from '../components/CityHot'

export const indexRoute = [
  {
    path: '/',
    component: MyList,
    key: 10061,
    exact: true

  },
  {
    path: '/city-hot',
    component: CityHot,
    key: 10062,
  }
]

export default [
  {
    path: '/mall',
    component: Mall,
    key: 10001,
  },
  {
    path: '/purchase',
    component: Purchase,
    key: 10002
  },
  {
    path: '/cart',
    component: Cart,
    key: 10003
  },
  {
    path: '/user-center',
    component: UserCenter,
    key: 10004
  },
  {
    path: '/login',
    component: Login,
    key: 10005
  },
  {
    path: '/',
    component: Index,
    key: 10006,
    childrens: [
      {
        path: '/',
        component: MyList,
        key: 100061,
        exact: true
      },
      {
        path: '/city-hot',
        component: CityHot,
        key: 100062,
      }
    ]
  },
  {
    path: '/404',
    component: Error404,
    key: 10007
  }
]
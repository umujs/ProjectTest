## 基础页面
- 404
- 购物车 cart
- 商品详细 goods-detail
- 首页(美菜商城) index
- 登录 login
- 全部菜品 mall
- 订单列表 order
- 在线充值 prepay
- 常用清单 purchase
- 搜索 search
- 个人中心 user-center

## 文件结构
- public
  + favicon.ico
  + index.html
  + logo192.png
  + logo512.png
  + manifest.json
  + robots.txt
- src
  + assets
    - css
  + components --- 组件模块
    - CityHot ----------- 城市热卖
    - MyList ------------ 我的清单
    - TabBer ------------ 底部导航
  + filters ------ 过滤器
  + router ------- 路由
    - router.config.js -- 路由配置
  + store -------- 数据
  + tool --------- 封装组件(工具类)
    - ToolRouter
  + views -------- 页面级模块
    - 404
    - Cart -------- 有导航
    - GoodsDetail
    - Index ------- 有导航
    - Login
    - Mall -------- 有导航
    - Order
    - PrePay
    - Purchase ---- 有导航
    - Search
    - UserCenter -- 有导航
  + App.js
  + index.js
- .gitignore
- package-lock.json
- package.json
- README.md
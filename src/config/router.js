const myRoute=[{
  key: '/login',
  name: 'login',
  path: '/login',
  exact: true,
  component: 'views/Login',
  model: 'store/login'
}, {
  key: '/home',
  name: 'home',
  path: '/home',
  exact: true,
  component: 'views/home',
  model: 'store/home'
}]


export default myRoute;

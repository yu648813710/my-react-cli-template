export const initRouter = [
  {
    path: '/',
    name: '首页',
    key: 'index',
    icon: 'mail',
  }, {
    path: '/users',
    key: 'users',
    name: '用户列表',
    icon: 'mail',
  }, {
    key: 'two',
    name: '二级',
    icon: 'mail',
    children: [
      {
        path: '/users',
        key: 'subUsers',
        name: '用户列表',
        icon: 'mail',
      }, {
        path: '/',
        name: '首页',
        key: 'subIndex',
        icon: 'mail',
      },
    ],
  },
];

export const authRouter = [
  {
    path: '/',
    name: '权限首页',
    key: 'authIndex',
    icon: 'mail',
  }, {
    path: '/users',
    name: '权限用户列表',
    key: 'authUsers',
    icon: 'mail',
  }, {
    key: 'authTwo',
    name: '二级',
    icon: 'mail',
    children: [
      {
        path: '/users',
        key: 'authSubUsers',
        name: '权限用户列表',
        icon: 'mail',
      }, {
        path: '/',
        name: '权限首页',
        key: 'authSubIndex',
        icon: 'mail',
      },
    ],
  },
];
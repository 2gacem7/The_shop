
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/Product.vue') },
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/register', component: () => import('pages/register.vue') },
      { path: '/profile', component: () => import('pages/profile.vue') },
      { path: '/admin', component: () => import('pages/BoardAdmin.vue') },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]


export default routes

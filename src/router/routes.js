
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/product',component: () => import('pages/Product.vue')},
      { path: '/detail', component: () => import('pages/ProductDetail.vue')},
     
    ]
  },
  { path: '/auth', component: () => import('layouts/Auth.vue')}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

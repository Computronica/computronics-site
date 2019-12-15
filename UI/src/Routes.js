import React from 'react'
import loadable from 'react-loadable'

export const Home = loadable({
  loader: () => import('./pages/Home/Home'),
  loading: () => null,
})

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    groupKey: 'home',
    name: 'Home',
  },
]

export default Routes

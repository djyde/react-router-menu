import * as React from 'react'
import { IReactRouterMenuRoute, createReactRouterMenu } from '../src'

export const routes: IReactRouterMenuRoute = {
  title: 'App',
  path: '/',
  component: App,
  childRoutes: [
    { title: 'Home', path: '/home', component: () => <div>Home</div> },
    { title: 'About', path: '/about', component: () => <div>About</div> },
    {
      title: 'Help', path: 'help', component: ({ children }) => <div>Help: {children}</div>, childRoutes: [
        { title: 'FAQ', path: '/faq', component: () => <div>FAQ</div> },
        { title: 'Contact', path: '/contact', component: () => <div>Contact</div> }
      ]
    }
  ]
}


function App({ children }) {
  const ReactRouterMenu = createReactRouterMenu(routes)
  return (
    <div>
      <ReactRouterMenu mode='horizontal' />
      <div>
        {children}
      </div>
    </div>
  )
}

import * as React from 'react'
import { storiesOf } from '@storybook/react'
import {
  createReactRouterMenu
} from '../src'
import { Router, hashHistory } from 'react-router'

declare var module

const App = ({ children }) => {
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

const routes = {
  title: 'Index',
  path: '/',
  component: App,
  childRoutes: [
    { title: 'Home', path: 'home', component: () => <div>Home</div> },
    { title: 'About', path: 'about', component: () => <div>About</div> }
  ]
}

storiesOf('ReactRouterMenu', module)
  .add('Basic', () => {
    return (
      <Router history={hashHistory} routes={routes}>
      </Router>
    )
  })
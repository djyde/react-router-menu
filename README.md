# react-router-menu

React Router binding for Ant.Design's Menu.

## Install

```bash
$ yarn add react-router-menu
```

## Basic

```tsx
import * as React from 'react'
import { render } from 'react-router'
import { createReactRouterMenu } from 'react-router-menu'
import { Router, hashHistory } from 'react-router'

// declare a plain route
const routes = {
  title: 'App',
  path: '/',
  component: App,
  childRoutes: [
    { title: 'Home', path: 'home', component: () => <div>Home</div> },
    { title: 'About', path: 'about', component: () => <div>About</div> }
  ]
}

// App component 
function App ({ children }) {
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

// render the router
render((
  <Router history={hashHistory} routes={routes}>
  </Router>
), mountNode)
```

## `<ReactRouterMenu />`

This component is same as Ant Design's [<Menu />](https://ant.design/components/menu)

# License

MIT License

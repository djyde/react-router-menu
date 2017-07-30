# react-router-menu

React Router binding for Ant.Design's Menu.

## Install

```bash
$ yarn add react-router-menu
```

## Basic

Live demo: https://djyde.github.io/react-router-menu/

```tsx
import * as React from 'react'
import { render } from 'react-router'
import { createReactRouterMenu } from 'react-router-menu'
import { Router, hashHistory } from 'react-router'

// Declare the routes
const routes = {
  title: 'App',
  path: '/',
  component: App,
  childRoutes: [
    { title: 'Home', path: '/home', component: () => <div>Home</div> },
    { title: 'About', path: '/about', component: () => <div>About</div> },
    {
      title: 'Help', path: 'help', component: ({ children }) => <div>Help: {children}</div> ,childRoutes: [
        { title: 'FAQ', path: '/faq', component: () => <div>FAQ</div> },
        { title: 'Contact', path: '/contact', component: () => <div>Contact</div> }
      ]
    }
  ]
}

// Create a ReactRouterMenu
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

// Render the router
render((
  <Router history={hashHistory} routes={routes}>
  </Router>
), mountNode)
```

![](https://ws1.sinaimg.cn/large/006tKfTcgy1fi1zpbetnaj30dk08gt8v.jpg)

### `<ReactRouterMenu />`

This component is same as Ant Design's [<Menu />](https://ant.design/components/menu)

### routes

`routes` that pass to `Router` has the same property as [`PlainRoute`](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#plainroute), except these listed property:

- **title: string** Title for Menu Item

## Limitation

- Asynchronous `getComponent(s)`, `getChildRoutes`, `getIndexRoute` are not supported yet.

# License

MIT License

import * as React from 'react'
import { createReactRouterMenu } from '../src'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Router, hashHistory } from 'react-router'

describe('createReactRouterMenu', () => {

  const routes = {
    title: 'App',
    path: '/',
    component: App,
    childRoutes: [
      { title: 'Home', path: 'home', component: () => <div>Home</div> },
      { title: 'About', path: 'about', component: () => <div>About</div> }
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

  const Root = <Router history={hashHistory} routes={routes} />

  it('snapshot', () => {
    let tree = renderer.create(Root)
    tree.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
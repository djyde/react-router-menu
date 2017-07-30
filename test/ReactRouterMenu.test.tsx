import * as React from 'react'
import { createReactRouterMenu, IReactRouterMenuRoute } from '../src'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Router, hashHistory } from 'react-router'
import { routes } from './mock'

describe('createReactRouterMenu', () => {
  const Root = <Router history={hashHistory} routes={routes} />

  it('snapshot', () => {
    let tree = renderer.create(Root)
    tree.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
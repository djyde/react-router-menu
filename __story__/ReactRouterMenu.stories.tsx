import * as React from 'react'
import { storiesOf } from '@storybook/react'
import {
  createReactRouterMenu, IReactRouterMenuRoute
} from '../src'
import { Router, hashHistory } from 'react-router'
import { routes } from '../test/mock'

declare var module

storiesOf('ReactRouterMenu', module)
  .add('Basic', () => {
    return (
      <Router history={hashHistory} routes={routes}>
      </Router>
    )
  })
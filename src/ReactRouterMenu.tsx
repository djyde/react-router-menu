import * as React from 'react'
import {
  Menu
} from 'antd'
import { PlainRoute, Link } from 'react-router'
import { MenuProps } from 'antd/lib/menu'
import { LocationState } from "history"

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

export type RouteCallback = (err: any, route: PlainRoute) => void
export type RoutesCallback = (err: any, routesArray: PlainRoute[]) => void

export interface IReactRouterMenuRoute extends PlainRoute {
  path: string,
  title: string,
  childRoutes?: IReactRouterMenuRoute[],
  getChildRoutes?(partialNextState: LocationState, callback: RoutesCallback): void,
  indexRoute?: IReactRouterMenuRoute,
  getIndexRoute?(partialNextState: LocationState, callback: RouteCallback): void
}

const createMenuItem = (route: IReactRouterMenuRoute) => {
  if (route.getChildRoutes || route.getIndexRoute) {
    console.warn('getChildRoutes and getIndexRoute are not supported yet.')
    return
  }
  if (route.path === '/') {
    return createMenuItemFromRoutes(route.childRoutes)
  }
  if (!route.childRoutes && !route.getChildRoutes) {
    return (
      <MenuItem key={route.path}>
        <Link to={route.path}>
          {route.title}
        </Link>
      </MenuItem>
    )
  } else {
    return (
      <SubMenu key={route.path} title={route.title}>
        {createMenuItemFromRoutes(route.childRoutes)}
      </SubMenu>
    )
  }
}

const createMenuItemFromRoutes = (childRoutes: IReactRouterMenuRoute[] = []) => {
  return childRoutes.map(route => {
    return createMenuItem(route)
  })
}

export const createReactRouterMenu = (route: IReactRouterMenuRoute) => {
  const r = createMenuItem(route)
  return (props: MenuProps) => (
    <Menu {...props}>
      {r}
    </Menu>
  )
}

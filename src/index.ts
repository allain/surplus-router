import S from "s-js"
import { HashSignal } from "./lib/HashSignal"
import matchPath from "./lib/matchPath.js"

let hash: HashSignal

export type RouteParams = {
  path: string
  children?: any
  exact?: boolean
}

export function Route({ path, children, exact }: RouteParams) {
  hash = hash || HashSignal()

  return S(() => {
    const currentPath = (hash() || "#/").replace(/^#/, "")

    const match = matchPath(currentPath, { path, exact }, null)
    if (match)
      return typeof children === "function" ? children(match.params) : children
  })
}

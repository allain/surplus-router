import S from 's-js' //eslint-disable-line
import HashSignal from './lib/HashSignal'
import matchPath from './lib/matchPath'

let hash

export function Route({ path, children, exact }) {
  hash = hash || HashSignal()

  return S(() => {
    const currentPath = (hash() || '#/').replace(/^#/, '')

    const match = matchPath(currentPath, { path, exact })
    if (match)
      return typeof children === 'function' ? children(match.params) : children
  })
}

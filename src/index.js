import S from 's-js' //eslint-disable-line
import HashSignal from './HashSignal'
import matchPath from './lib/matchPath'

let hash

export function Route({ path, children, exact }) {
  console.log('creating hash signal')
  hash = hash || HashSignal()

  return S(() => {
    const currentPath = (hash() || '#/').replace(/^#/, '')
    console.log(currentPath)

    const match = matchPath(currentPath, { path, exact })
    if (match) {
      if (typeof children === 'function') {
        return children(match.params)
      } else {
        return children
      }
    }
  })
}

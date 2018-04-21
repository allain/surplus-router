import S from 's-js'

// Taken from https://github.com/adamhaile/surplus-realworld
export default function HashSignal() {
  // we need to detect sets to the data signals so that we can also change the
  // window location, so we make underlying data signals and wrap them
  const _hash = S.data(window.location.hash)
  const _change = S.data(window.location.hash)

  // setting hash also replaces current location in browser
  const hash = loc => (loc === undefined ? _hash() : set(loc, false))

  // setting change also sets hash and assigns a new location in browser
  const change = loc => (loc === undefined ? _change() : set(loc, true))

  const set = (loc, isChange) =>
    S.freeze(() => {
      _hash(loc)
      if (isChange) _change(loc)
      window.location[isChange ? 'assign' : 'replace'](loc)
      return loc
    })

  hash.change = change

  // change from the other direction: set signals when a hashchange event occurs
  const onHashChange = () =>
    S.freeze(() => {
      console.log((window.location.hash || '#') !== _hash())
      if ((window.location.hash || '#') !== _hash())
        _hash(_change(window.location.hash))
    })

  window.addEventListener('hashchange', onHashChange)
  S.cleanup(() => window.removeEventListener('hashchange', onHashChange))

  return hash
}

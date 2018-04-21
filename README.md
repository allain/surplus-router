# surplus-router

> A simple router for use with Surplus

[![NPM](https://img.shields.io/npm/v/surplus-router.svg)](https://www.npmjs.com/package/surplus-router)

## Install

```bash
npm install --save surplus-router
```

## Example Usage

```jsx
import * from Surplus from 'surplus'
import { Route } from 'surplus-router'

const view = <div>
    <Route path="/">
      <h1>Main Page</h1>
      <p><a href="#/test/123">Test 123</a></p>
      <p><a href="#/test/456">Test 456</a></p>
    </Route>
    <Route path="/test/:number">{({number}) => <p>Test {number}</p>}</Route>
  </div>;

document.body.appendChild(view); // add view to document
```

## API

## License

ISC © [allain](https://github.com/allain/surplus-router)

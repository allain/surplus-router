import * as Surplus from 'surplus';
import S from 's-js';

import {Route} from '@allain/surplus-router'

const HomePage = () => <div>
  <h1>Welcome</h1>
  <div><a href="#/test/123">Test 123</a></div>
  <div><a href="#/test/456">Test 456</a></div>
</div>

const TestPage = ({number}) => <p><a href="#/">Home</a><h1>Testing {number}</h1></p>

S.root(() => {
  console.log('in root')
  const view = (
    <div>
      <!-- Static Children -->
      <Route path="/" exact="true"><HomePage /></Route>

      <!-- Render props approach -->
      <Route path="/test/:number" exact="true">{({number}) => <TestPage number={number} />}</Route>
    </div>
  );

  const root = document.getElementById('root');

  root.innerHTML = '';
  root.appendChild(view)

  console.log(S.Owner)

  S.cleanup(() => console.log('cleaning up'))
});


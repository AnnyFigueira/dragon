import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import setupStore from './store/setup';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <Provider store={setupStore()}>
        <Router>
          <Switch>    
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

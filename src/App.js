import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import setupStore from './store/setup';
import DragonList from './screens/DragonList';
import DragonForm from './screens/DragonForm';

function App() {
  return (
    <div className="App">
      <Provider store={setupStore()}>
        <Router>
          <Switch>
            <Route path="/dragon/new" component={DragonForm} />    
            <Route path="/" component={DragonList} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

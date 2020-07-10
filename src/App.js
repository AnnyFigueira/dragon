import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Store, {reducer, initialState} from './Store';
import Header from './Header';
import DragonsList from './DragonsList';
import DragonForm from './DragonForm';
import DragonPage from './DragonPage';
import Login from './Login';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Store.Provider value={{ state, dispatch }}>
        <Router>
        <div className="App">
          {state.logged && <Header/> }
          <Switch>
            <Route path="/login" render={() => !state.logged ? <Login /> : <Redirect to="/" />} />
            <Route path="/dragon/new" render={() => state.logged ? <DragonForm /> : <Redirect to="/login" />} />
            <Route path="/dragon/:id" render={() => state.logged ? <DragonPage /> : <Redirect to="/login" />} />
            <Route path="/" render={() => state.logged ? <DragonsList /> : <Redirect to="/login" />} />
          </Switch>
        </div>
        </Router>
      </Store.Provider>
    </div>
  );
}

export default App;

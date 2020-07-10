import React, { useCallback, useContext } from 'react';
import { useHistory, Link } from "react-router-dom";
import Store from './Store';

export default function Header() {
  const { dispatch } = useContext(Store);
  const history = useHistory();
  const logout = useCallback(() => {
    dispatch({type: 'LOGOUT'});
    localStorage['logged'] = false;
    history.push('/login');
  });
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="w-100 d-flex justify-content-between">
            <div className="d-flex">
              <Link to="/" className="navbar-brand" title="Lista de Dragões"> Dragões </Link>
            </div>
            <div className="d-flex">
              <Link to="/dragon/new" className="btn btn-outline-success d-inline-block" title="Cadastrar Dragão"> + </Link>
              <button onClick={logout} className="btn btn-outline-dark d-inline-block ml-2"> Logout </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );

}
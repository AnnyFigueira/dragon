import React, { useContext, useCallback, useState } from 'react';
import { useHistory } from "react-router-dom";

import Store from './Store';

export default function Login() {
  const { dispatch } = useContext(Store);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = useCallback((e) => {
    e.preventDefault();
    if(!email || !password) {
      setError('Login incorreto');
    } else {
      dispatch({type: 'LOGIN'});
      localStorage['logged'] = true;
      history.push('/');
    }
  });
  return (
    <section className="container pt-5">
      <div className="row d-flex justify-content-center">
        <div className="card col-md-4">
          <div className="card-body">
            <form onSubmit={login}>
              <div className="form-outline mb-4">
                <label className="form-label"> Email </label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label"> Senha </label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {error && <p className="text-danger mb-4"> {error} </p> }
              <button className="btn btn-primary btn-block"> Entrar </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
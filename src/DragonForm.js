import React, { useContext, useCallback, useState } from 'react';
import { useHistory } from "react-router-dom";

import Store from './Store';

export default function DragonForm() {
  const {dispatch} = useContext(Store);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const create = useCallback((e) => {
    e.preventDefault();
    if (!name || !type) {
      setError('Preencha todos os campos');
    } else {
      const payload = {name, type};
      fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
        method: 'POST', body: JSON.stringify(payload)
      }).then((response) => response.json().then((dragon) => {
        dispatch({type: 'CREATE_DRAGON', dragon});
        history.push(`/dragon/${dragon.id}`);
      })).catch(() => {
        setError('Ocorreu um erro ao cadastrar este dragão, por favor tente novamente!');
      });
    }
  }, [name, type]);
  return (
    <section className="container pt-5">
      <div className="row d-flex justify-content-center">
        <div className="card col-md-4">
          <div className="card-body">
          <form onSubmit={create}>
              <div className="form-outline mb-4">
                <label className="form-label"> Nome </label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label"> Tipo </label>
                <input type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)} />
              </div>
              {error && <p className="text-danger mb-4"> {error} </p> }
              <button className="btn btn-primary btn-block"> Criar </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


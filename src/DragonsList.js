import React, { useContext, useCallback, useState, useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Store from './Store';

function Dragon({dragon}) {
  const {dispatch} = useContext(Store);
  const [name, setName] = useState(dragon.name);
  const [type, setType] = useState(dragon.type);
  const update = useCallback((e) => {
    e.preventDefault();
    const payload = {...dragon, name, type};
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`, {
      method: 'PUT', body: JSON.stringify(payload)
    }).then((response) => response.json().then((dragon) => {
      dispatch({type: 'UPDATE_DRAGON', dragon});
      setName(dragon.name);
    }));
  }, [name]);
  const destroy = useCallback((e) => {
    e.preventDefault();
    fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`, {
      method: 'DELETE'
    }).then((response) => response.json().then((dragon) => {
      dispatch({type: 'DESTROY_DRAGON', dragon});
    }));
  }, [name]);
  return (
    <tr>
      <td>
        <input plceholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
      </td>
      <td>
        <input plceholder="Tipo" value={type} onChange={(e) => setType(e.target.value)} className="form-control" />
      </td>
      <td className="text-right">
        <button onClick={update} className="btn btn-sm btn-primary d-inline-block"> Salvar </button>
      </td>
      <td className="text-right">
        <button onClick={destroy} className="btn btn-sm btn-danger"> Delete </button>
      </td>
      <td className="text-right">
        <Link to={`/dragon/${dragon.id}`} className="btn btn-sm btn-info"> Ver mais </Link>
      </td>
    </tr>
  )
}

export default function DragonsList() {
  const {state} = useContext(Store);
  const {dispatch} = useContext(Store);

  useEffect(() => {
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon').then((response) => {
      response.json().then((dragons) => dispatch({type: 'INDEX_DRAGONS', dragons}))
    })
  }, []);
  return (
    <section className="container py-5">
      <h1> Listar Dragões </h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th className="text-right">Salvar</th>
              <th className="text-right">Remover</th>
              <th className="text-right">Ver mais</th>
            </tr>
          </thead>
          <tbody>
            {state.dragons.map((dragon) => <Dragon key={dragon.id} dragon={dragon} /> )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
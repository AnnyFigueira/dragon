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
    const payload = {name, type, createdAt: new Date()};
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', {
      method: 'POST', body: JSON.stringify(payload)
    }).then((response) => response.json().then((dragon) => {
      dispatch({type: 'CREATE_DRAGON', dragon});
      history.push(`/dragon/${dragon.id}`);
    })).catch(() => {
      setError('Ocorreu um erro ao cadastrar este dragão por favor tente novamente!');
    });
  }, [name, type]);
  return (
    <form onSubmit={create}>
      <input plceholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input plceholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
      <button> Create </button>
      {error && <p> {error} </p>}
    </form>
  )
}
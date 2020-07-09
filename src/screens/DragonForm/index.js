import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createDragon } from '../../store/actions';

export default function DragonForm() {
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const typeRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();

    dispatch(createDragon({
      name: nameRef.current.value,
      type: typeRef.current.value
    }))

    nameRef.current.value = '';
    typeRef.current.value = '';
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nome: </label>
        <input ref={nameRef} name="name" type="text" />
      </div>
      <div>
        <label> Tipo: </label>
        <input ref={typeRef} name="type" type="text" />
      </div>
      <button>Salvar</button>
    </form>
  );
}
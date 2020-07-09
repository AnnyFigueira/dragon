import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../../store/actions';

export default function Home() {
  const dragonList = useSelector(state => state.dragon.dragonList);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getDragons()) }, []);


  return(<>{dragonList.map((item) => <li key={item.id}>{item.name}</li>)}</>);
}
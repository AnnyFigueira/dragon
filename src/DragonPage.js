import React, { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Store from './Store';

export default function DragonPage() {
  const { state } = useContext(Store);
  const [dragon, setDragon] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    let found = state.dragons.find((d) => d.id.toString() == id.toString());
    if (found) { 
      setDragon(found);
    } else { 
      fetch(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`).then((response) => {
        response.json().then((data) => {  
          if(typeof(data) === 'object') { setDragon(data); }
        });
      });
    } 
  }, []);
  
  return (
    <div className="container">
      <section className="border p-4 text-center mb-4 mt-5">
        <section className="text-center">
        {dragon &&
          <div> 
            <h1> {dragon.name} </h1>
            <h4> {dragon.type} </h4>
            <small className="text-muted"> {Intl.DateTimeFormat('pt-BR', {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'}).format(new Date(dragon.createdAt))}</small>
            {dragon.histories && !!dragon.histories.length && 
              <article>
                <hr className="my-4" />
                <h3> Histórias </h3>
                <hr className="my-4" />
                <div className="row">
                  { dragon.histories.map((story) => <div className="col"><p>{story}</p></div>)}
                </div>
              </article>
            }
          </div>
        }
        {!dragon &&
          <div> 
            Dragão nao encontrado
          </div>
        }
        </section>
      </section>
    </div>
  )
}
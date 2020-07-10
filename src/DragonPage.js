import React, { useContext, useMemo } from 'react';
import { useParams } from "react-router-dom";

import Store from './Store';

export default function DragonPage() {
  const { state } = useContext(Store);
  const { id } = useParams();
  const dragon = useMemo(() => state.dragons.find((d) => d.id.toString() == id.toString()), [state, id]);
  return (
    <section>
      {dragon &&
        <div> 
          <h1> {dragon.name} </h1>
        </div>
      }
      {!dragon &&
        <div> 
          Dragão nao encontrado
        </div>
      }
    </section>
  )
}
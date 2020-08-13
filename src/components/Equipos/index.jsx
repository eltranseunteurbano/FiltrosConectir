import React from 'react';
import './index.scss';

import Equipo from './Equipo';

const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

const Equipos = () => {
  return(
    <section className='Equipos'>
      <h1 className='title'>Equipos</h1>

      <article className='Equipos__body'>
        {data.map( () => {
          return(
            <Equipo />
          )
        })}
      </article>
    </section>
  )
}

export default Equipos;
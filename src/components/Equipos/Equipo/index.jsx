import React from 'react';
import './index.scss';
import Arrow from '../../Arrow';

const Equipo = ({name = 'Name Computer', ghz=5}) => {
  return(
    <div className='Equipo'>

      <div className='Equipo__body'>
        <div className='Equipo__body__img'>
          <img src={process.env.PUBLIC_URL + '/img/Computer.png'} alt={name} />
        </div>

        <div className='Equipo__body__header'>
          <h1 className='Equipo__body__header__title'>{name}</h1>
          <p className='Equipo__body__header__ghz'>{ghz} Ghz</p>
          <div className='Equipo__body__header__logos'>
            <div className='Equipo__body__header__logos__item'>
              <img alt="Illustrator" src={process.env.PUBLIC_URL + '/programas/Illustrator.png'} />
            </div>
            <div className='Equipo__body__header__logos__item'>
              <img alt="Photoshop" src={process.env.PUBLIC_URL + '/programas/Photoshop.png'} />
            </div>
            <div className='Equipo__body__header__logos__item'>
              <img alt="XD" src={process.env.PUBLIC_URL + '/programas/XD.png'} />
            </div>
            <div className='Equipo__body__header__logos__item'>
              <img alt="Premiere" src={process.env.PUBLIC_URL + '/programas/Premiere.png'} />
            </div>
          </div>
        </div>
      </div>

      <div className='Equipo__schedule'>
        <div className='Equipo__schedule__header'>
          <h1 className='Equipo__schedule__header__title'>HORARIO</h1>
          <div className='Equipo__schedule__header__btns'>
            <div>
              <Arrow />
            </div>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
        <div className='Equipo__schedule__body'>
        <div className='Equipo__schedule__body__date'>
            <p>Lunes 22</p>
            <div className='Equipo__schedule__body__date__hour'>
              <span>08:00</span> - <span>14:30</span>
            </div>
          </div>

          <div className='Equipo__schedule__body__date'>
            <p>Lunes 22</p>
            <div className='Equipo__schedule__body__date__hour'>
              <span>08:00</span> - <span>14:30</span>
            </div>
          </div>
        </div>
      </div>

      <div className='Equipo__btn'>
        <button disabled>Seleccionar</button>
      </div>
    </div>
  )
}

export default Equipo;
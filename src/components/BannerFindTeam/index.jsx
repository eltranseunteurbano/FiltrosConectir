import React from 'react';
import './index.scss';

const BannerFindTeam = () => {
  return(
    <section className='BannerFindTeam'>
      <h1 className='title'>Encuentra tu equipo</h1>

      <article className='BannerFindTeam__wp'>
        <p className='BannerFindTeam__wp__text'>Busca entre las diferentes opciones que puedes encontrar usando el filtro, o navegando en la lista</p>
        <img className='BannerFindTeam__wp__img' src={process.env.PUBLIC_URL + '/img/BannerFindTeam.svg'} alt='Imagen Ilustrativa'/>
        <img className='BannerFindTeam__wp__flowers' src={process.env.PUBLIC_URL + '/img/Flowers.svg'} alt='Imagen Ilustrativa'/>
      </article>
    </section>
  )
}

export default BannerFindTeam;
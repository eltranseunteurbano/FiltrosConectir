import React from 'react';
import Logo from '../Logo';
import MenuIcon from '../MenuIcon';

import './index.scss';
import './MenuResponsive.scss';

import Modal from 'react-modal';

const Header = () => {

  const [showResponsive, setShowResponsive] = React.useState(false);

  //Ancho | Width
  React.useEffect( () => {
    function onElementWidthChange(elm, callback){
      var lastWidth = elm.clientWidth, newWidth;
      (function run(){
          newWidth = elm.clientWidth;
          if( lastWidth !== newWidth )
              callback(newWidth)
          lastWidth = newWidth
          if( elm.onElementWidthChangeTimer )
          clearTimeout(elm.onElementWidthChangeTimer)
          elm.onElementWidthChangeTimer = setTimeout(run, 200)
      })()
      }
      onElementWidthChange(document.body, function(width){
          if(width >= 700) {
            setShowResponsive(false);
          }
      });
  }, [])


  return(
    <header className='header'>
      <Logo />
      <nav className='header__nav '>
        <a href=''>
          <img src={process.env.PUBLIC_URL + '/iconos/Home.svg'} alt='Home' />
          Inicio
        </a>

        <a href=''>
          <img src={process.env.PUBLIC_URL + '/iconos/Proyecto.svg'} alt='Proyecto' />
          Proyectos
        </a>

        <a href='' className='header__nav-selected'>
          <img src={process.env.PUBLIC_URL + '/iconos/Equipo.svg'} alt='Equipo' />
          Equipo
        </a>
      </nav>
      <div className='header__user'>
        <div className='header__user__img'></div>
        <button className='header__user__btn' disabled>Conectar</button>
      </div>

      <div className='header__responsive' onClick={ () => {setShowResponsive(!showResponsive)}}>
        <MenuIcon active={showResponsive} />
      </div>

      <Modal
        isOpen={showResponsive}
        onRequestClose={() => setShowResponsive(false)}
        overlayClassName='MenuResponsive appear'
        className='MenuResponsive__body appearFromRight'
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className='MenuResponsive__body__user'>
          <div className='MenuResponsive__body__user__img'></div>
          <button className='MenuResponsive__body__user__btn' disabled>Conectar</button>
        </div>

        <nav className='MenuResponsive__body__menu'>
          <a href=''>
            <img src={process.env.PUBLIC_URL + '/iconos/Home.svg'} alt='Home' />
            Inicio
          </a>

          <a href=''>
            <img src={process.env.PUBLIC_URL + '/iconos/Proyecto.svg'} alt='Proyecto' />
            Proyectos
          </a>

          <a href='' className='header__nav-selected'>
            <img src={process.env.PUBLIC_URL + '/iconos/Equipo.svg'} alt='Equipo' />
            Equipo
          </a>
        </nav>
      </Modal>
    </header>
  )
}

export default Header;
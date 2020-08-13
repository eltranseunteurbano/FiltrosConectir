import React from 'react';
import '../../assets/css/reset.scss';
import '../../assets/css/vars.scss';
import './index.scss';

import Header from '../../components/Header';
import BannerFindTeam from '../../components/BannerFindTeam';
import Equipos from '../../components/Equipos';

const Home = () => {
  return(
    <>
      <Header />
      <section className='Home'>
        <main>
          <BannerFindTeam />
          <Equipos />
        </main>

        <aside>

        </aside>
      </section>
    </>
  )
}

export default Home;
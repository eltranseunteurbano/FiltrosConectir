import React from 'react';
import '../../assets/css/reset.scss';
import '../../assets/css/vars.scss';
import './index.scss';

import BannerFindTeam from '../../components/BannerFindTeam';
import Equipos from '../../components/Equipos';
import Filters from '../../components/Filters';

const Home = () => {
  return(
      <section className='Home'>
        <main>
          <BannerFindTeam />
          <Equipos />
        </main>

        <Filters />
      </section>
  )
}

export default Home;
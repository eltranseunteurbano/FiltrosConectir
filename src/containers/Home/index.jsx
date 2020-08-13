import React from 'react';
import Header from '../../components/Header';
import BannerFindTeam from '../../components/BannerFindTeam';

import '../../assets/css/reset.scss';
import '../../assets/css/vars.scss';

const Home = () => {
  return(
    <main className='Home'>
      <Header />
      <BannerFindTeam />
    </main>
  )
}

export default Home;
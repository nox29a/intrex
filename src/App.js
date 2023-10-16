import React from 'react';
import Reservation from './components/Reservation';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Map from './components/Map';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Order from './components/Order';

const App = () => {
  return <div className='overflow-hidden'>
    <Header />
    <Hero />
    <Order />
    <Reservation />
    <Portfolio />
    <Map />
    <Footer />
  </div>;
};

export default App;

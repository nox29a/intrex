import React from 'react';
import Reservation from './components/Newsletter';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Order from './components/Order';

const App = () => {
  return <div className='overflow-hidden'>
    <Header />
    <Hero />
    <Order />

    <Portfolio />
    <Newsletter />
    <Footer />
  </div>;
};

export default App;

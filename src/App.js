import React from 'react';
import Solutions from './components/Solutions';
import Header from './components/Header';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Category from './components/Category';
import History from './components/History';


const App = () => {
  return <div className='overflow-hidden'>
    <Header />
    <Hero />
    <Category />
    <About />
    <Solutions/>
    <History/>
    <Newsletter />
    <Footer />
  </div>;
};

export default App;

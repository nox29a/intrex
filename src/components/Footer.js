import React from 'react';
import {BsInstagram, BsFacebook} from 'react-icons/bs';

const Footer = () => {
  return (
  <footer className='bg-slate-800 py-6 flex '>
    <div className='container mx-auto flex'>
    <a href='https://www.facebook.com/fornirossi777'>
    <div><BsFacebook className='text-xl ml-20'></BsFacebook></div>
    </a>
    <a href='https://www.instagram.com/fornirossi777/'>
    <div><BsInstagram className='text-xl ml-4'></BsInstagram></div>
    </a>
      <p className='text-white text-center ml-40'>Adamczyk Łukasz 2023 &copy; All rights reserved.</p>
    </div>
  </footer>
  )
};

export default Footer;

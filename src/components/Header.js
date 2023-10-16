import React from 'react';
import logo from '../img/logo.png';
import brand from '../img/logo_brand.png';
import {BsInstagram, BsFacebook, BsFillBasketFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
const Header = () => {
  return (
    <header className='border border-slate-800 bg-slate-800'>
    <div className='flex '>

        <img className='m-4 w-auto h-24 ml-20' src={logo} alt="logo"></img> 
        <div className='w-5/6 '>

        <div className='flex border-b border-slate-600 h-14 place-items-center p-6'>
          <img className='m-4 h-12 ml-80' src={brand} alt="logo"></img> 
          <div className='hover:text-red-600 ml-10'>Wigilie firmowe</div>
          <div className='hover:text-red-600 ml-10'>Imprezy okolicznościowe</div>
          <div className='hover:text-red-600 ml-10'>Kontakt</div>
          <div className='hover:text-red-600 ml-10'>
          
    <a href='https://www.facebook.com/fornirossi777'>
    <div><BsFacebook className='text-2xl ml-5'></BsFacebook></div>
    </a>
    </div>
    <div className='hover:text-red-600 ml-2'>
      
    <a href='https://www.instagram.com/fornirossi777/'>
    <div><BsInstagram className='text-2xl ml-5'></BsInstagram></div>
    </a>
          </div>
        </div>
        <div className='h-12 flex mt-1 '>
          <div className='hover:text-red-600 ml-48 mt-4'>O nas</div>
          <div className='hover:text-red-600 ml-10 mt-4'>Pizza neapolitańska</div>
          <div className='hover:text-red-600 ml-10 mt-4'>Menu lokalu</div>
          <div className='hover:text-red-600 ml-10 mt-4'>Galeria</div>
          <button class=" mt-2 ml-10 bg-red-600 hover:bg-white  hover:text-red-600 py-3 px-4 rounded uppercase text-sm  flex">

          <div><BsFillArrowRightCircleFill className='mx-2'></BsFillArrowRightCircleFill></div>

Zarezerwuj stolik
</button>
          <button class=" mt-2 ml-10 bg-red-600 hover:bg-white  hover:text-red-600 py-3 px-4 rounded uppercase text-sm  flex">

          <div><BsFillBasketFill className='mx-2'></BsFillBasketFill></div>


Zamów online
</button>
        </div>
        </div>
    </div>
    </header>
  ); 
};

export default Header;



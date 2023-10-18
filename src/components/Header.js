import React from 'react';
import logo from '../img/logo.svg';

import {BsBook, BsFillRocketTakeoffFill, BsFillTelephoneFill, BsBank2} from 'react-icons/bs';
const Header = () => {
  return (
    <header className=' bg-slate-800 text-white'>
    <div className='bg-red-600 h-10 pl-20 items-center flex text-xs'><div className=' border-r pr-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>NEWS</div><div className='pl-6'>
Drukarki Domino optymalne do kodowania jaj zgodnie z Moba</div></div>
    <div className='flex justify-between mx-40 my-2  p-2'>

      <img src={logo} alt="logo"></img>
      <div className='flex rounded-xl border w-80 h-8 text-xs items-center mt-4'>
      <div className='w-3/4 ml-2'>
      Wyszukaj po frazie...</div>
      <div className='border-l flex h-8 w-1/4 items-center justify-center text-xs'>Szukaj</div>
      </div>
      <div className='flex'>
      <div className='grid mx-2'>
      <div><BsBank2 className='text-3xl ml-2'></BsBank2></div>
      <div>Firma</div>
      </div>
      <div className='grid mx-2'>
      <div><BsBook className='text-3xl ml-7'></BsBook></div>
      <div>Aktualności</div>
      </div>
      <div className='grid mx-2'>
      <div><BsFillRocketTakeoffFill className='text-3xl ml-3'></BsFillRocketTakeoffFill></div>
      <div>Kariera</div>
      </div>
      <div className='grid mx-2'>
      <div><BsFillTelephoneFill className='text-3xl ml-4'></BsFillTelephoneFill></div>
      <div>Kontakt</div>
      </div>

      </div>
    </div>
    <div className='bg-black text-xs flex justify-between px-40 py-3'>
      <div>Drukarki przemysłowe</div>
      <div>Znakowanie</div>
      <div>Etykieciarki</div>
      <div>Robotyzacja</div>
      <div>Branże</div>
      <div>Druk cyfrowy</div>
      <div>Polski</div>
    </div>
    </header>
  ); 
};

export default Header;



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
      <div className='flex rounded-xl border w-80 h-9 text-xs items-center mt-4'>
      <textarea className='w-3/4 bg-slate-800  rounded-l-xl items-center flex text-center' placeholder='Wyszukaj po frazie...'>
      </textarea>
      <div className='border-l flex h-8 w-1/4 items-center justify-center text-xs cursor-pointer'>Szukaj</div>
      </div>
      <div className='flex'>
      <div className='grid mx-2  cursor-pointer'>
      <div><BsBank2 className='text-3xl ml-2'></BsBank2></div>
      <div>Firma</div>
      </div>
      <div className='grid mx-2  cursor-pointer'>
      <div><BsBook className='text-3xl ml-7'></BsBook></div>
      <div>Aktualności</div>
      </div>
      <div className='grid mx-2 cursor-pointer'>
      <div><BsFillRocketTakeoffFill className='text-3xl ml-3'></BsFillRocketTakeoffFill></div>
      <div className=''>Kariera</div>
      </div>
      <div className='grid mx-2 cursor-pointer'>
      <div><BsFillTelephoneFill className='text-3xl ml-4'></BsFillTelephoneFill></div>
      <div>Kontakt</div>
      </div>

      </div>
    </div>
    <div className='bg-black text-xs flex justify-between px-40 py-3'>
      <div className='cursor-pointer'>Drukarki przemysłowe</div>
      <div className='cursor-pointer'>Znakowanie</div>
      <div className='cursor-pointer'>Etykieciarki</div>
      <div className='cursor-pointer'>Robotyzacja</div>
      <div className='cursor-pointer'>Branże</div>
      <div className='cursor-pointer'>Druk cyfrowy</div>
      <div className='cursor-pointer'>Polski</div>
    </div>
    </header>
  ); 
};

export default Header;



import React from 'react';
import {BsPinMapFill, BsTelephoneFill, BsMailbox} from 'react-icons/bs';
import logo from '../img/logo.svg';

const Footer = () => {
  return (
  <footer className='bg-black pt-4 text-white'>
    <div className='mx-16 flex justify-between'>
      <div className='w-1/4 '>
        <img className='mb-2' src={logo} alt="logo"></img>
        <div>Potrzebujesz wyceny lub konsultacji?</div>
        <div className='text-xs text-red-600'>Wypełnij nasz formularz kontaktowy!</div>
        <div className='my-8 bg-red-600 hover:bg-red-800 py-3 px-4 rounded-2xl text-base w-52'>Skontaktuj się z nami</div>
      </div>
      <div className='w-1/2 flex justify-between mx-20'>
        <div className=''>    
          <div className='mb-4'>Oferta</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>Drukarki przemysłowe</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>Etykieciarki</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>Znakowarki</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>Robotyzacja</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>Farmacja</div>
        </div>
        <div>
          <div className='mb-4'>Mapa strony</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>Strefa dystrybutora</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>O firmie</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>Kontakt</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>Aktualności</div>
          <div className='text-xs hover:text-gray-500 cursor-pointer mb-1'>Kariera</div>
        </div>
        <div>
          <div className='mb-4'>Informacje</div>
          <div className='text-xs  hover:text-gray-500 cursor-pointer mb-1'>Polityka prywatności</div>
          <div className='text-xs  hover:text-gray-500 cursor-pointer mb-1'>Informacje o <br/> administratorze</div>
        </div>
      </div>
      <div className='w-1/4'>
        <div className='flex m-5 mt-0'>
          <BsPinMapFill className='text-xl text-red-600 mt-3'></BsPinMapFill>
          <div className='ml-5'>Sady, ul. Za Motelem 7<br/> 62-080 Tarnowo Podgórne</div>
          </div>
        <div className='flex m-5'>
          <BsTelephoneFill className='text-xl text-red-600'></BsTelephoneFill><div className=' ml-5 md:w-1/2'>+48 61 8417 203</div>
          </div>
        <div className='flex m-5'>
          <BsMailbox className='text-xl text-red-600'></BsMailbox>
          <div className='ml-5 md:w-1/2'>intrex@intrex.pl</div>
        </div>
      </div>
    </div>
    <div className='p-4 text-center bg-slate-800'>Adamczyk Łukasz 2023 &copy; All rights reserved.</div>
  </footer>
  )
};

export default Footer;

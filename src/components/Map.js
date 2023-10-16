import React from 'react';
import {BsPinMapFill, BsTelephoneFill, BsMailbox} from 'react-icons/bs';
import logo from '../img/logo.png';

const Map = () => {
      return (
<div id='Map' className='grid py-16 bg-map bg-contain bg-no-repeat bg-right'>
      <div className='flex ml-20'>
      <img className='m-4 w-auto h-32 mx-20' src={logo} alt="logo"></img>      
      <div className=' border-l'>
      <div className='flex m-5'>
                                        <div>Forni Rossi 777 Pizza Napoletana – Naramowice</div>
                                    </div>
                                    <div className='flex m-5'>
                                        <BsPinMapFill className='text-xl'></BsPinMapFill><div className='ml-5'>ul. Naramowicka 92, 61-619 Poznań</div>
                                    </div>
                                  <div className='flex m-5'>
                                        <BsTelephoneFill className='text-xl'></BsTelephoneFill><div className=' ml-5 md:w-1/2'>+48 513 296 866</div>
                                    </div><div className='flex m-5'>
                                        <BsMailbox className='text-xl'></BsMailbox><div className='ml-5 md:w-1/2'>
kontakt@fornirossi.pl</div>
                                    </div>
                                </div>

      </div>
</div>
      )
};

export default Map;

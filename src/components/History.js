import React from 'react';
import history from '../img/history.png';
import Slider from './Slider';


const History = () => {
  return (
<div id='History' className='grid text-center py-16'>
<div className='text-center'>
        <div className='text-gray-400 uppercase'>POZNAJ NAS</div>
        <div className='text-2xl text-black p-3 leading-10'>Stoi za nami  <span className='py-2 text-white px-2 rounded-2xl bg-red-600'>bogata historia</span> i doświadczenie.</div>
        <p className='text-sm'>Poznaj naszą historię oraz ścieżkę rozwoju naszej organizacji. Naszym silnikiem napędowym zawsze byli ludzie i innowacje, co wyznajemy od samych początków istnienia Intrex.</p>
        <div className='w-full max-w-lg lg:max-w-[1100px] mx-auto mt-3'>
          <Slider />
        </div>
        </div>
  </div>

  )
};

export default History;

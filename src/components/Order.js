import React from 'react';

import Flag from '../img/icon_flag.png';

const Order = () => {
 
  return (
  <div id='Order' className='py-16 bg-slate-800'>
    <div className='grid place-items-center '>
    <h1 className='text-3xl'>Zamów najlepszą pizze w mieście!</h1>
    <img className='m-4' src={Flag} alt="Flag"></img>
    <button class="flex my-8 bg-red-600 hover:bg-white  hover:text-red-600 py-3 px-4 rounded uppercase text-sm">

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mx-2">
      <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM6 13.25V3.5h8v9.75a.75.75 0 01-1.064.681L10 12.576l-2.936 1.355A.75.75 0 016 13.25z" clipRule="evenodd" />
    </svg>

    Zobacz pełne menu
    </button>
    </div>
  </div>
)
};

export default Order;

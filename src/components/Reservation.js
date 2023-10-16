import React from 'react';
import Flag from '../img/icon_flag.png';

const Reservation = () => {
  return (
  <div id="Reservation" className='flex bg-slate-900'>
  <div className='lg:mx-60 py-16'>

    <div className='grid bg-red-600 md:w-[500px] pt-4 pl-8 rounded-md'>
    <h1 className='text-3xl'>Zarezerwuj stolik</h1>
    <img className='m-4' src={Flag} alt="Flag"></img>
    <p>Planujesz do nas wskoczyć na pyszną pizzę? <br/>Zarezerwuj stolik z wyprzedzeniem!</p>
    <button class="flex my-8 bg-red-600 hover:bg-white  hover:text-red-600 py-3 px-4 rounded border uppercase text-sm w-48">
    Zarezerwuj teraz!
    </button>
    </div>
    <div></div>

    </div>
  </div>

  )
};

export default Reservation;

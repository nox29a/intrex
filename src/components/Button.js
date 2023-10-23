import React from 'react';
import {BsBook, BsFillRocketTakeoffFill, BsFillTelephoneFill, BsBank2} from 'react-icons/bs';
const Button = () => {
  return (
<div id="Button" className='border'>

    <div className='fixed h-10 z-50 end-0 top-80 right-0 cursor-pointer'>
        <div className='text-6xl bg-red-600 border border-white ml-2 text-white rounded-l-xl'>
        <BsBank2  className=' p-3    border-b border-white'></BsBank2>
        <BsBank2  className=' p-3 border-b border-white'></BsBank2>
        <BsBank2  className=' p-3 border-b border-white'></BsBank2>
        <BsBank2  className=' p-3 border-b border-white'></BsBank2>
        <BsBank2  className=' p-3 border-white'></BsBank2>
        </div>
        <BsBank2  className='text-3xl bg-slate-700 p-2 mt-5 ml-4 text-white'></BsBank2>
        

    </div>
</div>
    );
};

export default Button;

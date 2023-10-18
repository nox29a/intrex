import React from 'react';

const Hero = () => {
  return (
<div id="Hero" className=' mx-auto my-40 text-center w-[500px] bg-black text-white'>
    <h1 className='text-2xl my-10 font-semibold'>Intrex - Twój partner w systemach znakujących i etykietujących</h1>
    <p className='text-xs'>Projektujemy, wdrażamy, produkujemy systemy etykietujące, znakujące i nie tylko. Skutecznie wspieramy linie produkcyjne najbardziej wymagających firm z całego świata i co najważniejsze, otaczamy naszych klientów zaawansowaną opieką.</p>
    <div className='flex justify-between mx-20'>
      <button class="flex my-8 bg-red-600 hover:bg-black py-3 px-4 rounded-2xl text-base">
          Więcej o firmie
      </button>
      <button class="flex my-8 bg-white hover:bg-black text-black hover:text-white py-3 px-4 rounded-2xl text-sm">
          Kontakt
      </button>
    </div>
</div>
    );
};

export default Hero;

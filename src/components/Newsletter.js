import React from 'react';


const Newsletter = () => {
  return (
  <div id="Newsletter" className='flex bg-red-600  items-center text-white'>
    <div className='w-1/2 text-center'>
      <div className='text-xl m-3'>Dołącz do naszego Newslettera!</div>
      <div>Możesz zrezygnować w każdej chwili</div>
    </div>
    <div className='w-2/3 m-4'>
      <div className='flex m-2'>
        <textarea className='w-full text-gray-300 p-2 text-xs mr-4' rows="1" placeholder="Wpisz swój adres e-mail..."></textarea>
        <button className='flex bg-black w-32 py-3 px-4 rounded-2xl text-sm'>Zapisz się</button>
      </div>
      <p className='text-xs m-2'>Administratorem Twoich danych osobowych jest INTREX sp. z o.o. Przedmiotowe dane będą przetwarzane w celu wysyłki Newslettera. Masz prawo dostępu do danych, ich sprostowania, ograniczenia przetwarzania, usunięcia, sprzeciwu, przenoszenia danych, cofnięcia zgody oraz złożenia skargi do organu nadzorczego. Szczegółowe informacje dotyczące przetwarzania Twoich danych w związku z wysyłką Newslettera znajdziesz  </p>
      <div className='flex m-2'>
        <input id="link-checkbox" type="checkbox" value="" class="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
        <p className='text-xs'>Wyrażam zgodę na przetwarzanie moich danych osobowych dla celów przesyłania informacji handlowych dotyczących produktów i usług INTREX sp. z o.o. oraz na otrzymywanie drogą elektroniczną na podany przeze mnie adres e-mail informacji handlowych wysyłanych przez INTREX sp. z o.o., a także na używanie telekomunikacyjnych urządzeń końcowych i automatycznych systemów wywołujących dla celów marketingu bezpośredniego prowadzonego przez INTREX sp. z o.o. w związku z wysyłką  Newslettera.  *</p>
      </div>
    </div>
  </div>

  )
};

export default Newsletter;

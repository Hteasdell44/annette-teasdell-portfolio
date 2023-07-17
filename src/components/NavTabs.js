import React from 'react';

function NavTabs() {
  return (

    <header className='p-8 bg-gray-200 lg:flex'>

      <a href='' className='text-center text-5xl font-bold'>Annette Teasdell</a>

      <ul className='hidden flex gap-4 ml-auto my-auto text-xl font-bold lg:flex'>

        <a href=''>Home</a>
        <a href='#about'>About</a>
        <a href='#publications'>Publications</a>
        <a href='#contact'>Contact</a>

      </ul>

    </header>
  );
}

export default NavTabs;

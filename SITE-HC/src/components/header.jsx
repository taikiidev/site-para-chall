import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='border-b-2 border-spacing-1'>
        
      <div className='font-abezee flex justify-between text-l m-auto w-2/3 p-6 p-6'>
        <Link to='http://localhost:5173/'><h1>Amigos da Saúde</h1></Link>
        <Navbar/>
      </div>
      
    </header>
  );
}

export default Header;

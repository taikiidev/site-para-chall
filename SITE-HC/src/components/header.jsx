import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='border-b-2 border-spacing-1'>
      <div className='font-abezee flex justify-between text-sm m-auto w-2/3 p-4'>
        <div className='flex gap-5'>
          <ul className="flex gap-5">
            <li>
              <Link to='https://www.hc.fm.usp.br/hc/portal/' target='_blank'><h1>- HC</h1></Link>
            </li>
            <li>
              <Link to='http://localhost:5173'><p>-Home</p></Link>
            </li>
            <li>
              <Link to='https://portalpaciente.icr.usp.br/portal/' target='_blank'><h1>- Instituto da Criança</h1></Link>
            </li>
          </ul>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;

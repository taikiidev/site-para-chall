import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return ( 
        <>

        <div className='flex justify-between gap-6'>

            <Link to = 'contato'><h1>Contato</h1></Link>
            <Link to = 'equipe'><h1>Equipe</h1></Link>
            <Link to = 'funcionamento'><h1>Funcionamento</h1></Link>

        </div>
      
        </>
     );
}

export default Navbar;
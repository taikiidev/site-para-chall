import Navbar from '../Navbar';

function Header() {
  return (
    <header className='h-16 border-b-2 border-spacing-1 fixed top-0 left-0 right-0 bg-white z-10'>
      <div className='font-abezee flex justify-between text-sm m-auto w-2/3 p-4'>
        <ul className="flex gap-5">
          <li>
            <a href='https://www.hc.fm.usp.br/hc/portal/' target='_blank'><h1>HC</h1></a>
          </li>
          <li>
            <a href='http://localhost:5173'><p>Home</p></a>
          </li>
          <li>
            <a href='https://portalpaciente.icr.usp.br/portal/' target='_blank'><h1>Instituto da Criança</h1></a>
          </li>
        </ul>
        <Navbar />
      </div>
    </header>

  );
}

export default Header;

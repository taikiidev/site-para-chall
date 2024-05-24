import { Link } from "react-router-dom";
import menuIcon from "/src/assets/menu-icon.svg"

function Navbar() {
    const openMenu = () => {
        const navContainer = document.getElementById('nav_container')
        navContainer.classList.toggle('hidden')
        navContainer.classList.toggle('flex')
    }

    return (
        <div>
            <div className="hidden justify-between gap-6 xl:flex">
                <Link to= "personagem">
                    <h1>Meu personagem</h1>
                </Link>
                <Link to="assista">
                    <h1>Meus vídeos</h1>
                </Link>
                <Link to="jogos">
                    <h1>Jogos</h1>
                </Link>
                <Link to="contato">
                    <h1>Contato</h1>
                </Link>
                <Link to="equipe">
                    <h1>Equipe</h1>
                </Link>
                <Link to="funcionamento">
                    <h1>Funcionamento</h1>
                </Link>
            </div>
            
            <div className="block cursor-pointer xl:hidden">
                <button onClick={openMenu}>
                    <img src={menuIcon} alt="" />
                </button>

                <div id="nav_container" className="hidden absolute flex-col gap-3 bg-white mt-3 py-2 px-4 rounded-lg translate-x-[-80%]">
                    <Link to= "personagem">
                        <h1>Meu personagem</h1>
                    </Link>
                    <Link to="assista">
                        <h1>Meus vídeos</h1>
                    </Link>
                    <Link to="jogos">
                        <h1>Jogos</h1>
                    </Link>
                    <Link to="contato">
                        <h1>Contato</h1>
                    </Link>
                    <Link to="equipe">
                        <h1>Equipe</h1>
                    </Link>
                    <Link to="funcionamento">
                        <h1>Funcionamento</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

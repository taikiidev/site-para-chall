import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-home-bg h-screen w-full">
        <div className="font-modak flex justify-center items-center h-60">
          <h1 className="text-7xl text-yellow-300">Amigos da Saúde!</h1>
        </div>

        <div className="flex justify-between w-5/12 m-auto font-modak gap-3">

          <Link to = 'jogos'>
            <div className="flex items-center justify-center gap-4 text-4xl">
              <img src="src/assets/game-controller-svgrepo-com.svg" alt="ícone de controle de jogo" className="w-8" />
              <p>JOGAR</p>
            </div>
          </Link>
          
          <Link to = 'assista'>
            <div className="flex items-center justify-center gap-4 text-4xl">
              <img src="src/assets/tv-alt-svgrepo-com.svg" alt="ícone de TV" className="w-8" />
              <p>ASSISTIR</p>
            </div>
          </Link>
        
          <Link to= 'personagem'>
            <div className="flex items-center justify-center gap-4 text-4xl">
              <img src="src/assets/edit-2-svgrepo-com.svg" alt="ícone de edição" className="w-8" />
              <p>MEU PERSONAGEM</p>
            </div>
          </Link>
          






        </div>
      </div>
    </>
  );
}

export default Home;

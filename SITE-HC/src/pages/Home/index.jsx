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
            <div className="flex items-center text-white justify-center gap-4 text-4xl">
              <img src="src/assets/game-controller-svgrepo-com.svg" alt="ícone de controle de jogo" className="w-8" />
              <p>JOGAR</p>
            </div>
          </Link>
          
          <Link to = 'assista'>
            <div className="flex items-center justify-center gap-4 text-white text-4xl">
              <img src="src/assets/tv-alt-svgrepo-com.svg" alt="ícone de TV" className="w-8" />
              <p>ASSISTIR</p>
            </div>
          </Link>
        
          <Link to= 'personagem'>
            <div className="flex items-center justify-center text-white gap-4 text-4xl">
              <img src="src/assets/edit-2-svgrepo-com.svg" alt="ícone de edição" className="w-8" />
              <p>MEU PERSONAGEM</p>
            </div>
          </Link>
        </div>

        <div className="flex justify-center w-5/12 m-auto">
          <h1 className="text-4xl font-modak mt-12 mb-14 text-white">Explore novos vídeos!</h1> 
        </div>
       
        <div className="flex justify-between w-6/12 m-auto gap-5">
          <div>
            <iframe width="400" className="border-dashed" height="315" src="https://www.youtube.com/embed/SS4HMzDs2Bc" title="ICr lança manual lúdico para crianças internadas" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

          <div>
            <p className="text-white text-3xl font-abezee leading-relaxed">
              Crie o seu próprio super-herói e acompanhe-o numa jornada inesquecível! Assista vídeos e complete missões para receber recompensas e aprimorar seus personagens!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

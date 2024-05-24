import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

function Home() {
  const [profile, setProfile] = useState(null);

  const responseMessage = (response) => {
    const decoded = jwtDecode(response.credential);
    setProfile(decoded);
    return profile
  };

  return (
    <>
      <div className="bg-home-bg bg-cover py-4 h-screen w-full flex flex-col items-center">
        <div className="font-modak flex justify-center items-center h-60">
          <h1 className="text-5xl text-yellow-300 text-center sm:text-7xl">
            Amigos da Saúde!
          </h1>
        </div>

        <nav className="flex flex-col justify-between w-[20rem] font-modak gap-3 lg:w-[60rem] lg:flex-row">
          <Link to="jogos">
            <div className="flex items-center justify-center gap-4 text-white text-3xl sm:text-4xl">
              <img
                src="src/assets/game-controller-svgrepo-com.svg"
                alt="ícone de controle de jogo"
                className="w-8"
              />
              <p>JOGAR</p>
            </div>
          </Link>

          <Link to="assista">
            <div className="flex items-center justify-center gap-4 text-white text-3xl sm:text-4xl">
              <img
                src="src/assets/tv-alt-svgrepo-com.svg"
                alt="ícone de TV"
                className="w-8"
              />
              <p>ASSISTIR</p>
            </div>
          </Link>

          <Link to="personagem">
            <div className="flex items-center justify-center gap-4 text-white text-3xl sm:text-4xl">
              <img
                src="src/assets/edit-2-svgrepo-com.svg"
                alt="ícone de edição"
                className="w-8"
              />
              <p className="text-nowrap">MEU PERSONAGEM</p>
            </div>
          </Link>

          <GoogleLogin
            onSuccess={responseMessage}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </nav>

        <div className="flex justify-center w-5/12">
          <h1 className="text-4xl font-modak mt-12 mb-14 text-white text-center">
            Explore novos vídeos!
          </h1>
        </div>

        <div className="flex justify-between gap-5">
          <div>
            <iframe
              width="320"
              className="border-dashed"
              height="280"
              src="https://www.youtube.com/embed/SS4HMzDs2Bc"
              title="ICr lança manual lúdico para crianças internadas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <p className="hidden w-[30rem] text-white text-3xl font-abezee leading-relaxed lg:block">
            Crie o seu próprio super-herói e acompanhe-o numa jornada
            inesquecível! Assista vídeos e complete missões para receber
            recompensas e aprimorar seus personagens!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

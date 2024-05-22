import avatarImg from "../../assets/avatar/avatar.png";
import { useContext, useEffect } from "react";
import { AvatarContext } from "../../provider/AvatarProvider";

function Personagem() {
  const {avatar, avatarInfo, setAvatar} = useContext(AvatarContext)
  
  useEffect(() => {
    const avatarSaved = JSON.parse(localStorage.getItem("avatar"))
    if(avatarSaved){
      setAvatar(avatarSaved)
    }
  }, [setAvatar])

  const salvarAvatar = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar))
  }

  const trocarProximo = (caracteristica) => {
    setAvatar((prevAvatar) => {
      const newIndex =
        (prevAvatar[caracteristica] + 1) % avatarInfo[caracteristica].length;
      return { ...prevAvatar, [caracteristica]: newIndex };
    });
  };

  const trocarAnterior = (caracteristica) => {
    setAvatar((prevAvatar) => {
      const newIndex =
        (prevAvatar[caracteristica] - 1 + avatarInfo[caracteristica].length) %
        avatarInfo[caracteristica].length;
      return { ...prevAvatar, [caracteristica]: newIndex };
    });
  };

  return (
    <div className="pt-16 h-screen flex bg-blue-500">
      <div className="w-1/2 flex items-center justify-center">
        <div className="h-[32rem] w-[15rem] flex flex-col items-center justify-center relative">
          <img
            className="w-[100%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={avatarImg}
            alt=""
          />
          <img
            className="z-20 w-[85%] absolute top-[58%] left-[47%] translate-x-[-50%] translate-y-[-50%]"
            id="avatar-camisa"
            data-attribute="camisa"
            data-index="0"
            src={avatarInfo.camisa[avatar.camisa]}
            alt=""
          />
          <img
            className="z-10 w-[58%] absolute top-[80%] left-[49%] translate-x-[-50%] translate-y-[-50%]"
            id="avatar-short"
            data-attribute="short"
            data-index="0"
            src={avatarInfo.short[avatar.short]}
            alt=""
          />
          <img
            className="z-10 w-[95%] absolute top-[96%] left-[49%] translate-x-[-50%] translate-y-[-50%]"
            id="avatar-tenis"
            data-attribute="tenis"
            data-index="0"
            src={avatarInfo.tenis[avatar.tenis]}
            alt=""
          />
        </div>
      </div>

      <div className="w-1/2  bg-avatar-bg flex justify-center items-center">
        <div className="flex flex-col justify-center items-center rounded-2xl py-5 w-1/3 h-1/3 gap-5 bg-white">
          <div className="flex justify-between w-32 p-1 rounded-3xl gap-5 bg-zinc-200">
            <button onClick={() => trocarProximo("camisa")}>
              &lt;
            </button>
            <p>Camisa</p>
            <button onClick={() => trocarAnterior("camisa")}>
              &gt;
            </button>
          </div>

          <div className="flex justify-between w-32 p-1 rounded-3xl gap-5 bg-zinc-200">
            <button onClick={() => trocarProximo("short")}>
              &lt;
            </button>
            <p>Short</p>
            <button onClick={() => trocarAnterior("short")}>
              &gt;
            </button>
          </div>

          <div className="flex justify-between w-32 p-1 rounded-3xl gap-5 bg-zinc-200">
            <button onClick={() => trocarProximo("tenis")}>
              &lt;
            </button>
            <p>Tenis</p>
            <button onClick={() => trocarAnterior("tenis")}>
              &gt;
            </button>
          </div>

          <button onClick={salvarAvatar} className="flex justify-center gap-5 bg-lime-400 hover:bg-lime-500 rounded-[40px] mt-10 py-4 px-4 w-[55%] text-xl">SALVAR</button>
        </div>
      </div>
    </div>
  );
}

export default Personagem;

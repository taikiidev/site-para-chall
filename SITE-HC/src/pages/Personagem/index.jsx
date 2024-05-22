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
        <div className="h-3/4 w-3/4 bg-slate-400 flex flex-col items-center justify-center relative">
          <img
            className="w-[40%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            src={avatarImg}
            alt=""
          />
          <img
            className="z-20 w-[34%] absolute top-[58%] left-[49%] translate-x-[-50%] translate-y-[-50%]"
            id="avatar-camisa"
            data-attribute="camisa"
            data-index="0"
            src={avatarInfo.camisa[avatar.camisa]}
            alt=""
          />
          <img
            className="z-10 w-[22%] absolute top-[80%] left-[49%] translate-x-[-50%] translate-y-[-50%]"
            id="avatar-short"
            data-attribute="short"
            data-index="0"
            src={avatarInfo.short[avatar.short]}
            alt=""
          />
          <img
            className="z-10 w-[40%] absolute top-[92%] left-[49%] translate-x-[-50%] translate-y-[-50%]"
            id="avatar-tenis"
            data-attribute="tenis"
            data-index="0"
            src={avatarInfo.tenis[avatar.tenis]}
            alt=""
          />
        </div>
      </div>

      <div className="w-1/2 bg-blue-500 flex justify-center items-center font-abezee font-semibold text-lg">
        <div className="flex flex-col items-center justify-center py-5 w-1/2 h-[50%] rounded-3xl gap-5 bg-blue-300">
          <div className="flex justify-center gap-5 bg-yellow-100 hover:bg-yellow-200 rounded-[40px] py-4 px-4 w-[55%]">
            <button onClick={() => trocarProximo("camisa")}>
              &lt;
            </button>
            <p>camisa</p>
            <button onClick={() => trocarAnterior("camisa")}>
              &gt;
            </button>
          </div>

          <div className="flex justify-center gap-5 bg-yellow-100 hover:bg-yellow-200 rounded-[40px] py-4 px-4 w-[55%]">
            <button onClick={() => trocarProximo("short")}>
              &lt;
            </button>
            <p>short</p>
            <button onClick={() => trocarAnterior("short")}>
              &gt;
            </button>
          </div>

          <div className="flex justify-center gap-5 bg-yellow-100 hover:bg-yellow-200 rounded-[40px] py-4 px-4 w-[55%]">
            <button className="" onClick={() => trocarProximo("tenis")}>
              &lt;
            </button>
            <p>tenis</p>
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

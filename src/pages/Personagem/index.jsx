import avatarImg from "../../assets/avatar/avatar.png";
import { useContext, useEffect } from "react";
import { AvatarContext } from "../../context/AvatarProvider";

function Personagem() {
  const { avatar, avatarInfo, setAvatar } = useContext(AvatarContext);

  useEffect(() => {
    const avatarSaved = JSON.parse(localStorage.getItem("avatar"));
    if (avatarSaved) {
      setAvatar(avatarSaved);
    }
  }, [setAvatar]);

  const salvarAvatar = () => {
    localStorage.setItem("avatar", JSON.stringify(avatar));
  };

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
    <div className="flex h-screen flex-col items-center justify-center gap-[2rem] bg-blue-500 pt-16 md:flex-row md:gap-[15%]">
      <div className="relative flex h-[32rem] w-[10rem] flex-col items-center justify-center md:w-[15rem]">
        <img
          className="absolute left-[50%] top-[50%] w-[100%] translate-x-[-50%] translate-y-[-50%]"
          src={avatarImg}
          alt=""
        />
        <img
          className="absolute left-[47%] top-[58%] z-20 w-[85%] translate-x-[-50%] translate-y-[-50%]"
          id="avatar-camisa"
          src={avatarInfo.camisa[avatar.camisa]}
          alt=""
        />
        <img
          className="absolute left-[49%] top-[80%] z-10 w-[58%] translate-x-[-50%] translate-y-[-50%]"
          id="avatar-short"
          src={avatarInfo.short[avatar.short]}
          alt=""
        />
        <img
          className="absolute left-[49%] top-[96%] z-10 w-[95%] translate-x-[-50%] translate-y-[-50%]"
          id="avatar-tenis"
          src={avatarInfo.tenis[avatar.tenis]}
          alt=""
        />
      </div>

      <div className="mb-3 flex h-[18rem] w-[20rem] flex-col items-center justify-center gap-10 rounded-2xl bg-white py-5">
        <div className="flex flex-col gap-5">
          <div className="flex w-32 justify-between gap-5 rounded-3xl bg-zinc-200 p-1">
            <button onClick={() => trocarProximo("camisa")}>&lt;</button>
            <p>Camisa</p>
            <button onClick={() => trocarAnterior("camisa")}>&gt;</button>
          </div>

          <div className="flex w-32 justify-between gap-5 rounded-3xl bg-zinc-200 p-1">
            <button onClick={() => trocarProximo("short")}>&lt;</button>
            <p>Short</p>
            <button onClick={() => trocarAnterior("short")}>&gt;</button>
          </div>

          <div className="flex w-32 justify-between gap-5 rounded-3xl bg-zinc-200 p-1">
            <button onClick={() => trocarProximo("tenis")}>&lt;</button>
            <p>Tenis</p>
            <button onClick={() => trocarAnterior("tenis")}>&gt;</button>
          </div>
        </div>

        <button
          onClick={salvarAvatar}
          className="flex w-[55%] justify-center rounded-[40px] bg-lime-400 px-4 py-4 text-xl hover:bg-lime-500 active:bg-lime-400"
        >
          SALVAR
        </button>
      </div>
    </div>
  );
}

export default Personagem;

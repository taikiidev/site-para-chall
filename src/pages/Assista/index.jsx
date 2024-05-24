import { useContext, useEffect } from "react";
import avatarImg from "../../assets/avatar/avatar.png";
import { AvatarContext } from "../../provider/AvatarProvider";


function Assista() {
  const {avatar, avatarInfo, setAvatar} = useContext(AvatarContext)
  useEffect(() => {
    const avatarSaved = JSON.parse(localStorage.getItem("avatar"))
    if(avatarSaved){
      setAvatar(avatarSaved)
    }
  }, [setAvatar])

  return (
    <>
      <div className="pt-16 w-screen h-screen flex flex-col lg:flex-row">
        <div className="w-full h-full flex flex-col items-center justify-center relative bg-hospital2-bg bg-no-repeat bg-cover bg-bottom lg:w-[80%]">
          <div className="absolute left-[10%]">
            <div className="h-[15rem] w-[7rem] flex flex-col items-center justify-center relative lg:h-[32rem] lg:w-[15rem] sm:h-[22rem] sm:w-[10rem]">
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
                className="z-10 w-[95%] absolute top-[93%] left-[49%] translate-x-[-50%] translate-y-[-50%]"
                id="avatar-tenis"
                data-attribute="tenis"
                data-index="0"
                src={avatarInfo.tenis[avatar.tenis]}
                alt=""
                />
            </div>
          </div>

          <div>
            <img className="absolute w-[10rem] right-[10%] top-[50%] translate-y-[-50%] lg:w-[25rem] sm:w-[15rem]" src="src/assets/medica.png" alt="" />
          </div>
        </div>

        <aside className="flex flex-row h-[20%] items-center gap-14 px-3 font-abezee grow border-l-2 border-gray-300 bg-gray-600 lg:flex-col lg:h-full lg:pt-24">
          <h1 className="text-3xl font-semibold">Videos dos exames</h1>

          <ul className="w-full h-[40rem] flex flex-nowrap overflow-scroll flex-row gap-4 items-center text-xl lg:flex-col">
            <li className="border rounded-[40px] py-2 px-4 min-h-20 flex items-center w-[90%] bg-slate-300">exame 1</li>
            <li className="border rounded-[40px] py-2 px-4 min-h-20 flex items-center w-[90%] bg-slate-300">exame 2</li>
            <li className="border rounded-[40px] py-2 px-4 min-h-20 flex items-center w-[90%] bg-slate-300">exame 3</li>
            <li className="border rounded-[40px] py-2 px-4 min-h-20 flex items-center w-[90%] bg-slate-300">exame 4</li>
            <li className="border rounded-[40px] py-2 px-4 min-h-20 flex items-center w-[90%] bg-slate-300">exame 5</li>
            <li className="border rounded-[40px] py-2 px-4 min-h-20 flex items-center w-[90%] bg-slate-300">exame 6</li>
          </ul>
        </aside>
      </div>
    </>
  );
}

export default Assista;

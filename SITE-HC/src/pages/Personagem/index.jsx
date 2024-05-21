import { avatar } from "./avatar"

function Personagem() {
  const changeAvatarStyle = (attribute, side) => {
    const element = document.getElementById(`avatar-${attribute}`);

    let index = parseInt(element.getAttribute('data-index'));
    const lista = avatar[attribute];

    if(side == "foward"){
      index = (index + 1) % lista.length;
    }
    else{
      index = (index - 1 + lista.length) % lista.length;
    }

    element.setAttribute('data-index', index);
    element.innerText = lista[index];
  }

  return (
    <div className="pt-16 h-screen flex bg-blue-500">
      <div className="w-1/2 flex items-center justify-center">
        <div className="h-3/4 w-3/4 bg-slate-400 flex flex-col items-center justify-center">
          <p id="avatar-cabeca" data-attribute="cabeca" data-index="3">{avatar.cabeca[3]}</p>
          <p id="avatar-camisa" data-attribute="camisa" data-index="0">{avatar.camisa[0]}</p>
          <p id="avatar-short" data-attribute="short" data-index="0">{avatar.short[0]}</p>
          <p id="avatar-tenis" data-attribute="tenis" data-index="0">{avatar.tenis[0]}</p>
        </div>
      </div>

      <div className="w-1/2 bg-orange-500 flex justify-center items-center">
        <div className="flex flex-col items-center py-5 w-1/2 gap-5 bg-blue-300">
          <div className="flex gap-5 bg-yellow-100">
            <button onClick={() => changeAvatarStyle("cabeca", "back")}>&lt;</button>
            <p>cabeça</p>
            <button onClick={() => changeAvatarStyle("cabeca", "foward")}>&gt;</button>
          </div>

          <div className="flex gap-5 bg-yellow-100">
            <button onClick={() => changeAvatarStyle("camisa", "back")}>&lt;</button>
            <p>camisa</p>
            <button onClick={() => changeAvatarStyle("camisa", "foward")}>&gt;</button>
          </div>

          <div className="flex gap-5 bg-yellow-100">
            <button onClick={() => changeAvatarStyle("short", "back")}>&lt;</button>
            <p>short</p>
            <button onClick={() => changeAvatarStyle("short", "foward")}>&gt;</button>
          </div>

          <div className="flex gap-5 bg-yellow-100">
            <button onClick={() => changeAvatarStyle("tenis", "back")}>&lt;</button>
            <p>tenis</p>
            <button onClick={() => changeAvatarStyle("tenis", "foward")}>&gt;</button>
          </div>

          <button className="bg-yellow-100">ATUALIZAR</button>
        </div>
      </div>
      
    </div>
  );
}

export default Personagem;

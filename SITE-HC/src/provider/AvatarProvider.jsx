import { createContext, useState } from "react";

export const AvatarContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AvatarProvider = ({ children }) => {
  const avatarInfo = {
    camisa: [
      "src/assets/avatar/camisa-vermelha.png",
      "src/assets/avatar/camisa-dino.png",
      "src/assets/avatar/camisa-branca.png",
      "src/assets/avatar/camisa-amarela.png",
    ],
    short: [
      "src/assets/avatar/short-preto.png",
      "src/assets/avatar/short-amarelo.png",
      "src/assets/avatar/short-cinza.png",
      "src/assets/avatar/short-azul.png",
    ],
    tenis: [
      "src/assets/avatar/tenis-colorido.png",
      "src/assets/avatar/tenis-rosa.png",
      "src/assets/avatar/tenis-verde.png",
      "src/assets/avatar/tenis-vermelho.png",
    ],
  };

  const [avatar, setAvatar] = useState({
    camisa: 0,
    short: 0,
    tenis: 0,
  });

  return (
    <AvatarContext.Provider
      value={{ avatar, avatarInfo, setAvatar }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

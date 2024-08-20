import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { AvatarProvider } from "./context/AvatarProvider";

function App() {
  return (
    <>
      <AvatarProvider>
        <Header />
        <Outlet />
      </AvatarProvider>
    </>
  );
}

export default App;

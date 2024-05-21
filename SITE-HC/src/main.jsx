import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrigindo a importação de createRoot
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Equipe from './pages/equipe';
import Funcionamento from './pages/funcionamento';
import Home from './pages/home'; // Importar a página Home
import Jogos from './pages/jogos';
import Assista from './pages/assista';
import Personagem from './pages/Personagem';
import Contato from './pages/contato';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: 'contato', element: <Contato/> },
      { path: 'equipe', element: <Equipe/> },
      { path: 'funcionamento', element: <Funcionamento/> },
      { index: true, element: <Home/> },
      { path: 'jogos', element: <Jogos/>},
      { path: 'assista', element: <Assista/>},
      { path: 'personagem', element: <Personagem/>} // Definir a rota para a página inicial sem especificar um caminho
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

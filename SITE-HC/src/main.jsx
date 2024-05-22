import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrigindo a importação de createRoot
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Equipe from './pages/Equipe';
import Funcionamento from './pages/Funcionamento';
import Home from './pages/Home'; // Importar a página Home
import Jogos from './pages/Jogos';
import Assista from './pages/Assista';
import Personagem from './pages/Personagem';
import Contato from './pages/Contato';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <Home/> },
      { path: 'contato', element: <Contato/> },
      { path: 'equipe', element: <Equipe/> },
      { path: 'funcionamento', element: <Funcionamento/> },
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

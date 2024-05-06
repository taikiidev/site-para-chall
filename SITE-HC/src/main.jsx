import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrigindo a importação de createRoot
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Equipe from './pages/equipe';
import Contato from './pages/contato';
import Funcionamento from './pages/funcionamento';
import Home from './pages/home'; // Importar a página Home

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: 'contato', element: <Contato/> },
      { path: 'equipe', element: <Equipe/> },
      { path: 'funcionamento', element: <Funcionamento/> },
      { index: true, element: <Home/> } // Definir a rota para a página inicial sem especificar um caminho
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

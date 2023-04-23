import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, { action as nuevoClienteAction }from './pages/NuevoCliente'
import Index, { loader as loaderClientes } from './pages/Index';
import ErrorPage from './components/ErrorPage';
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction } from './pages/EditarCliente';
import Cliente, { action as eliminarClienteAction } from './components/Cliente';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <Index/>,
        loader: loaderClientes,
        errorElement: <ErrorPage/>
      },
      {
        path:'/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path:'/cliente/:id/editar',
        element: <EditarCliente/>,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path:'/clientes/:id/eliminar',
        action: eliminarClienteAction,
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

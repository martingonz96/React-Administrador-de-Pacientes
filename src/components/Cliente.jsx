import React from 'react'
import { useNavigate, redirect, Form } from 'react-router-dom'
import { eliminarCliente } from '../../api/Clientes'

export async function action({params}){
  await eliminarCliente(params.id)
  return redirect('/')
}

const Clientes = ({ cliente }) => {

const navigate = useNavigate()

const { nombre, empresa, email, telefono, id } = cliente

  return (
    <tr className='border-b text-center'>
      <td className="p-6 space-y-2">
        <p className='text-2xl text-gray-800'>{nombre}</p>
        <p className=' mt-2 '>{empresa}</p>
      </td>
      <td>
        <p >Email: <span className=' text-gray-800 uppercase font-bold '>{email}</span></p>
        <p >Telefono: <span className=' text-gray-800 uppercase font-bold ' >{telefono}</span></p>
      </td>
      <td className=' p-6 flex gap-3 justify-center align-middle'>
        <button 
        type="button" 
        className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
        onClick={() => navigate (`/cliente/${id}/editar`)}
        >
          Editar
        </button>
        <Form
        method= "POST"
        action={`/clientes/${id}/eliminar`}
        onSubmit={(e)=>{
          if(!confirm('Deseas eliminar este registro?')) {
            e.preventDefault()

          }
        }}
        >
        <button 
        type="submit" 
        className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
        >
          Eliminar
        </button>
        </Form>
        
      </td>
    </tr>
  )
}

export default Clientes
import React from 'react'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'

import {useDispatch} from 'react-redux'

import {borrarProductoAction, obtenerProductorEditar} from '../actions/productoActions'

const Producto = ({producto}) => {

    const { nombre, precio, id} = producto

    const dispatch = useDispatch()
    const history = useHistory()

    //confirmar eliminar producto

 

    const confirmarEliminarProducto = id => {
        //preguntar al usuario 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.value) {
                //pasarlo al action
                dispatch(borrarProductoAction(id))

            }
          })
       
    }

    //funcion que redirige

    const redireccionarEdicion = producto => {
        dispatch(obtenerProductorEditar(producto))
        history.push(`/productos/editar/${producto.id}`)
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="actions">
                <button
                    type="button"
                    onClick={() => redireccionarEdicion(producto)}
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={()=> confirmarEliminarProducto(id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Producto
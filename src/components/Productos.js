import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {obtenerProductosActions} from '../actions/productoActions'

import Producto from './Producto'

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        //consulto a la api
        const cargaProductos = () => dispatch(obtenerProductosActions())
        cargaProductos()


    }, [])

    //obtener el state
    const productos = useSelector(state => state.productos.productos)
    const error = useSelector(state => state.productos.error)
    const loanding = useSelector(state => state.productos.loading)

  return (
  <Fragment>
      <h2 className="text-center my-5">
          Listado de Productos
      </h2>
      { error && 
        <p className="font-weight-bold alert alert-danger text-center mt-40">Hubo un error</p>
        }

        {loanding && <p className="text-center">Cargando...</p>}

      <table className="table table-striped">
          <thread className="bg-primary table-dark">
              <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acciones</th>
              </tr>
          </thread>
          <tbody>
              {productos.lenght === 0 ? "no hay productos" : 
                productos.map(producto => 
                    <Producto 
                        key={producto.id}
                        producto={producto}
                    />
                )
              }
          </tbody>
      </table>
  </Fragment>
  );
}

export default Productos;
import React from 'react';
import ProductoItem from '../ProductoItem/ProductoItem';
import s from './ListProductos_style.module.css'
import { PRODUCTOS } from './constant';

const ListProductos = (props) => {

  return (
    <>
      <h2 className={s.subtitulo}>Lista de Productos</h2>
      <div className={s.cards}>
      {
        PRODUCTOS.map((producto)=>(
          <ProductoItem
            key={producto}
            nombre={producto[0]}
            imagen={producto[1]}
            precio={producto[2]}
            guardarr={props.guardar_productos}
            productos_comprado={props.productos_comprado}
            valor_total={props.valor_total}
            actualiza_total={props.actualiza_total}
          />
        ))
      }
      </div>
      
    </>
  )
}

export default ListProductos
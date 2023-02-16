import React from 'react'
import s from './ProductoItem_style.module.css'

const ProductoItem = (props) => {

  const onItemClick=()=>{
    props.guardarr(props.productos_comprado,(props.productos_comprado.length+1).toString(),props.nombre,props.precio);
    props.actualiza_total(props.valor_total,parseFloat(props.precio))
  }

  return (
    <div className={s.Card}>
      <h4>{props.nombre}</h4>
      <img src={props.imagen} alt="" />
      <p><b>Precio:</b> {props.precio} soles</p>
      <div className={s.flex}>
        <button
          onClick={onItemClick}
        >Comprar</button>
      </div>
      
    </div>
  )
}

export default ProductoItem
import React from 'react';
import s from './Carrito_compras_style.module.css'

const Carrito_compras = (props) => {

  return (

    <>
    
      <h2 className={s.subtitulo}>Carrito de Compras</h2>
      <br /><br />
      <h3 className={s.subsubtitulo}>" Valor Total: {props.valor_total} soles "</h3>

      <table className={s.tablaa}>
      <thead>
      <tr className={s.bordes}>
        <th>N°</th>
        <th>Nombre</th>
        <th>Precio</th>
      </tr>
      </thead>
      <tbody>
      {
          props.productos.map((producto_comprado)=>(
            <tr key={producto_comprado[0]}>
              <td>{producto_comprado[0]}</td>
              <td>{producto_comprado[1]}</td>
              <td>{producto_comprado[2]}</td>
            </tr>
          ))
        }
      </tbody>
      </table>
    </>
  )
}

export default Carrito_compras
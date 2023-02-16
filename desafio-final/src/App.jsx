import { useState } from 'react';
import s from './app_style.module.css'
import Carrito_compras from './components/Carrito_compras/Carrito_compras';
import ListProductos from './components/ListProductos/ListProductos';

function App() {

  const [productos,setproductos]=useState([]);

  const [valor_total,setvalor_total]=useState(0);

  const actualiza_total=(val_actual,val_producto)=>{
    console.log(val_actual)
    console.log(val_producto)
    val_actual+=val_producto
    setvalor_total(val_actual)
  }

  const guardar_productos=(proddd,n,nombre,precio)=>{
    proddd.push([n,nombre,precio]);
    setproductos(proddd);
  }
  
  return (
    <>
    <div className={s.fondo}>
        <h1 className={s.titulo}>Tienda Pepito</h1>
        <div className={s.flexx}>
          <div style={{width:'50%'}} className={s.dividir}>
            <ListProductos
              guardar_productos={guardar_productos}
              productos_comprado={productos}
              valor_total={valor_total}
              actualiza_total={actualiza_total}
            />
          </div>
          <div style={{width:'50%'}}>
            <Carrito_compras
              productos={productos}
              valor_total={valor_total}
            />
          </div>
        </div>
    </div>
    </>
  )
}

export default App

import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
import '../styles/CartPage.css'

export const CartPage = () => {
  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

  const calculateTotal = () => {
    let total = 0
    shoppingList.forEach((product) => {
      total += product.price * product.quantity
    })
    return total.toFixed(2)
  }

  const handlerPurchase = () => {
    const productsPurchased = shoppingList.map(product => `${product.title} X ${product.quantity}`).join('\n')
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada con éxito',
      html: `<p>Productos comprados:</p><pre>${productsPurchased}</pre><p>Total: $${calculateTotal()}</p>`,
      confirmButtonText: 'Aceptar'
    })
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio Unitario</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio Total</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((product) => (
            <tr key={product.id}>
              <td scope='row'>{product.title}</td>
              <td>${product.price.toFixed(2)}</td>
              <td className='buttons-add-rmv-cart'>
                <button className="btn btn-outline-primary" onClick={() => decrementQuantity(product.id)}>-</button>
                <button className="btn btn-primary">{product.quantity}</button>
                <button className="btn btn-outline-primary" onClick={() => incrementQuantity(product.id)}>+</button>
              </td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
              <td><button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Eliminar</button></td>
            </tr>
          ))}
        
        <tr>
          <th><b>TOTAL:</b></th>
          <td></td>
          <td></td>
          <td>${calculateTotal()}</td>
        </tr>
      </tbody>
    </table >

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button" onClick={handlerPurchase}>Comprar</button>
      </div>
    </>
  )
}

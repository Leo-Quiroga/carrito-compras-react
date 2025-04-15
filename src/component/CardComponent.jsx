import React, { useContext, useEffect, useState } from 'react'
import '../styles/CardComponent.css'
import { CartContext } from "../context/CartContext"

export const CardComponent = ({id, image, title, description, price, handlerAdd, handlerRemove}) => {

  const { shoppingList } = useContext(CartContext)
  const [added, setAdded] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const addProduct = () => {
    handlerAdd()
    setAdded(true)
  }

  const removeProduct = () => {
    handlerRemove()
    setAdded(false)
  }

  const checkAdded = () => {
    const boolean = shoppingList.some((product) => product.id === id) 
    setAdded(boolean)
  }

  const toggleModal = () => setShowModal(!showModal)

  useEffect (()=>{
    checkAdded()
  },[])

  return (
    <>
      <div className='card' onClick={toggleModal}>
        <img src={image} alt={title} className='card-img' />
        <div className='card-content'>
          <h3 className='card-title'>{title}</h3>
          <p className='card-price'>${price}</p>
          {added ? (
            <button className='remove-button' onClick={(e) => {
              e.stopPropagation()
              removeProduct()
            }}>Eliminar</button>
          ) : (
            <button className='add-button' onClick={(e) => {
              e.stopPropagation()
              addProduct()
            }}>Agregar</button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="product-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}>×</button>
            <img src={image} alt={title} className='modal-image' />
            <div className="modal-content">
              <h2>{title}</h2>
              <p className="modal-description">{description}</p>
              <p className="modal-price">Precio: ${price}</p>
              <div className="modal-actions">
                {added ? (
                  <button className='remove-button' onClick={removeProduct}>Eliminar del carrito</button>
                ) : (
                  <button className='add-button' onClick={addProduct}>Agregar al carrito</button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

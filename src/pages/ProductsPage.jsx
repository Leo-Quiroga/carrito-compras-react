import { useContext } from 'react'
import { CardComponent } from '../component/CardComponent'
import { ProductContext } from '../context/ProductContext'
import { CartContext } from '../context/CartContext'


export const ProductsPage = () => {

  const { products } = useContext(ProductContext)
  const { addProduct, removeProduct } = useContext(CartContext)

  return (

    <div className="container mt-5 pt-4">
      <h1 className="mb-4">Productos</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <CardComponent
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              handlerAdd={() => addProduct(product)}
              handlerRemove={() => removeProduct(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

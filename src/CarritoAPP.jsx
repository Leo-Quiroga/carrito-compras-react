import React from 'react'
import { NavBarComponent } from './component/NavBarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'
import { CartPage } from './pages/CartPage'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'

export const CarritoAPP = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBarComponent />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<ProductsPage />}></Route>
                        <Route path='/carrito' element={<CartPage />}></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}

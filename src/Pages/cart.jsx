import React, { useMemo } from 'react'
import Header from '../Components/Header'
import { CartItems, CartProperties } from './Data/cart-data'
import './styles/cart.css'

const Cart = () => {
    const subtotal = useMemo(() => {
    return CartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, []);

    return (
        <div className='cart-master'>
            <div className='cart-container'>

                <h1 className='cart-heading'>My Cart</h1>

                <section className='cart-product-list-sec'>
                {CartItems.map((item) => (
                            <div>
                                <img src={item.img} alt={item.product_name} />
                                <h3 className='cart-items-title'>{item.product_name}</h3>
                                <label className='cart-price-label'>Each</label>
                                <span className='cart-price'>{item.price}</span>
                                <label className='cart-quantity-label'>Quantity</label>
                                <span className='cart-quntity'>{item.quantity}</span>
                                <label className='cart-subtotal-label'>Subtotal</label>
                                <span className='cart-subtotal'>{item.price * item.quantity}</span>
                            </div>
                ))}
                </section>

                <div className='cart-summary-sec'>
                    <h2 className='cart-summary-heading' >Order Summary</h2>
                    <div className='cart-summary-line-one'>
                        <label>Subtotal</label>
                        <span>{subtotal}</span>
                    </div>
                    <div className='cart-summary-line-two'>
                        <label>Delivery_cost</label>
                        <span>{CartProperties.delivery_cost}</span>
                    </div>
                    <div className='cart-summary-line-three'>
                        <label>Discount</label>
                        <span>{CartProperties.discount}</span>
                    </div>
                    <div className='cart-summary-line-four'>
                        <label>Estimeted Total</label>
                        <span>{subtotal + CartProperties.delivery_cost - CartProperties.discount}</span>
                    </div>

                    <button className='cart-checkout-btn'>Checkout</button>
                </div>
            </div>
            <Header></Header>
        </div>
    )
}

export default Cart
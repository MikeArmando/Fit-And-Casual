import './cart.css'
import luv from '../../assets/img/icon-fav.png'
import { useState } from 'react'

export const Cart = () => {
    // changes the number of items
    const [countCart, setCountCart] = useState(1);
    const [countCartS, setCountCartS] = useState(1);

    const handleCountCartPlus = () => {
        setCountCart(countCart + 1)
    };

    const handleCountCartPlusSec = () => {
        setCountCartS(countCartS + 1)
    };

    const handleCountCartMinus = () => {
        setCountCart(countCart - 1)

        // makes it so count can only go down to 0
        if (countCart === 0) {
            setCountCart(countCart)

        } else {
            setCountCart(countCart - 1)
        }
    };

    const handleCountCartMinusSec = () => {
        setCountCartS(countCartS - 1)

        // makes it so count can only go down to 0
        if (countCartS === 0) {
            setCountCartS(countCartS)

        } else {
            setCountCartS(countCartS - 1)
        }
    };

    return (
        <>
            <section className='cart-page-box'>
                <div className='cart-items-box'>
                    <div className='cart-item-box'>
                        <img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8f%2F74%2F8f748f06a1cf49cf9cf1c83ff42f09b95be73898.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]'></img>
                        <div className='cart-item-info'>
                            <div className='cart-name-box'>
                                <p>Grey Sweatshirt</p>
                                <p>$29.00</p>
                            </div>
                            <div className='cart-pro-info'>
                                <p>ID Product: 105541</p>
                                <p>Color: Grey</p>
                                <p>Size: M</p>
                            </div>
                            <div className='fav-count-box'>
                                <div className='cart-fav-box'>
                                    <a href='#!'>
                                        <img src={luv}>
                                        </img>
                                    </a>
                                </div>
                                <div>
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="4">5</option>
                                        <option value="4">6</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cart-item-box'>
                        <img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8f%2F74%2F8f748f06a1cf49cf9cf1c83ff42f09b95be73898.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]'></img>
                        <div className='cart-item-info'>
                            <div className='cart-name-box'>
                                <p>Grey Sweatshirt</p>
                                <p>$29.00</p>
                            </div>
                            <div className='cart-pro-info'>
                                <p>ID Product: 105541</p>
                                <p>Color: Grey</p>
                                <p>Size: M</p>
                            </div>
                            <div className='fav-count-box'>
                                <div className='cart-fav-box'>
                                    <a href='#!'>
                                        <img src={luv}>
                                        </img>
                                    </a>
                                </div>
                                <div>
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="4">5</option>
                                        <option value="4">6</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cart-info'>
                    <h2>Order Summary</h2>
                    <div>
                        <p className='cart-order-items'>Subtotal: <p>$49.00</p></p>
                        <p className='cart-order-items'>Shipping: <p>$10.00</p></p>
                        <p className='cart-order-items'>Estimated tax: <p>$6.00</p></p>
                        <p className='cart-line'></p>
                        <p className='cart-total'>Total: <p>$59.00</p></p>
                    </div>
                    <div className='cart-checkout'>
                        <a href='#!'>CheckOut</a>
                    </div>
                </div>

            </section>
        </>
    )
}

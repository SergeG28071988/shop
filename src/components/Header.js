import React, { useState } from 'react'
import logo from '../images/logo_1.jpg';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
    if (!props.orders || !Array.isArray(props.orders)) {
      return null;
    }
  
    const totalQuantity = props.orders.reduce((sum, el) => sum + (el.count || 1), 0);
    const totalPrice = props.orders.reduce((sum, el) => sum + el.price * (el.count || 1), 0);
  
    return (
      <div className="orders-container">
        {props.orders.map(el => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <div className="total">
          <b>Итого: {totalQuantity} товар(а), {totalPrice} руб.</b>
        </div>
      </div>
    );
  }; 


const showNothong = () => {
    return (
        <div className='empty'>
            <h2>❌ Товаров нет</h2>
        </div>
   )
}

export default function Header(props) {
 
 let [cartOpen, setCartOpen] = useState(false)
  return (
    <main className="main">
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt='Логотип' />
                </div>
                <nav className='menu'>
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="#products">НАШ каталог</a></li>
                        <li><a href="#about-us">Про нас</a></li>
                        <li><a href="#contacts">Контакты</a></li>
                        <li>Кабинет</li>   
                        {/* <li><a href="tel:+971523898989" className="phone">+971 52 389 89 89</a></li> */}
                        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />                            
                    </ul>   
                    {cartOpen && (
                        <div className='shop-cart'>
                            {props.orders.length > 0 ? showOrders(props) : showNothong() }
                            <button onClick={props.toggleOrderForm} className="main-button">Оформить</button>
                        </div>
                    )}                                                          
                </nav>                                                 
            </div>
            <div className="presentation">
                <div className="headline">
                    Магазин оптики<br />
                    Очки, Линзы, Аксессуары
                </div>
            </div>
            
        </header>
    </main>    
  )
}


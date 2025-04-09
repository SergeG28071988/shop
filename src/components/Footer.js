import React from 'react'
import logo from '../images/logo_1.jpg';

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='logo'>    
                <img src={logo} alt='Логотип' />    
            </div>
            <div className='right'>
                 &copy; 2025 Магазин оптики. Все права защищены 
            </div>
        </div>      
    </footer>
  )
}


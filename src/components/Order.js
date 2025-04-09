import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
  render() {
    const { name, price, img, count } = this.props.item
    const total = price * count
    return (
      <div className='product-item'>
         <img src={"./img/" + img} alt='product' />
         <h4>{name}</h4>  
         <span>Кол-во: {count}</span>
         <b>Сумма: {total} руб.</b>   
         <FaTrash className='delete-product' 
         onClick={() => this.props.onDelete(this.props.item.id)} />         
      </div>
      
    )
  }
}

export default Order

import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
        <article className="product">
            <img src={"./img/" + this.props.item.img} alt='product' onClick={() => this.props.onShowItem(this.props.item)} />
            <div className="product-details">
                <h4>{this.props.item.name}</h4>
                <p>{this.props.item.desc}</p>
                <div className="product-action">
                    <ul> 
                        <li>
                            <div className="product-price">{this.props.item.price} руб. </div>
                            <div className="product-category">{this.props.item.category}</div>
                        </li>
                    </ul>
                    <div className="add-to-cart" 
                        onClick={() => this.props.onAdd(this.props.item)}>Заказать
                    </div>                        
                </div>                
            </div> 
        </article>
    )
  }
}

export default Item

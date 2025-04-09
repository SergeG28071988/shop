import React, { Component } from 'react'

export class ShowFullItem extends Component {
  handleOrder = () => {
    this.props.onAdd(this.props.item)         // Добавляем товар
    this.props.onShowItem(null)               // Закрываем модалку
  }

  render() {
    return (
      <div className='modal-overlay' onClick={() => this.props.onShowItem(null)}>
        <div className='full-item' onClick={e => e.stopPropagation()}>
          <img 
            src={"./img/" + this.props.item.img} 
            alt='product' 
            onClick={() => this.props.onShowItem(null)} 
          />
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
              <div className="add-to-cart" onClick={this.handleOrder}>
                Заказать
              </div>                        
            </div>   
          </div>       
        </div>
      </div>
    )
  }
}

export default ShowFullItem

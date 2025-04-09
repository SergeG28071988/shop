import React, { Component } from 'react';
import Item from './Item';

export class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Все товары',
    };
  }

  setCategory = (category) => {
    this.setState({ category });
  };

  render() {
    const { category } = this.state;

    // Фильтрация товаров
    const filteredItems = this.props.items.filter((item) =>
      category === 'Все товары' ? true : item.category === category
    );

    const categories = ['Все товары', 'Очки', 'Линзы', 'Аксессуары', 'Оправы'];

    return (
      <section className='products' id='products'>
        <div className='container'>
          <h2>Выберите товар</h2>
          <div className='products-content' id='products-content'>
            <aside className='products-filter'>
              <ul>
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className={category === cat ? 'active' : ''}
                    onClick={() => this.setCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </aside>

            <div className='products-items'>
              {filteredItems.map((el) => (
                <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
              ))}
            </div>
          </div>          
        </div>   
        
      </section>
      
    );
  }
}

export default Items;


import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import OrderForm from './components/OrderForm';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          name: "Очки Ray-Ban Wayfarer",
          img: "glasses_rayban_wayfarer.jpeg",
          desc: "Классическая модель с высококачественными линзами и стильной оправой.",
          price: 8500,
          category: "Очки",
        },
        {
          id: 2,
          name: "Контактные линзы Acuvue Oasys",
          img: "lenses_acuvue_oasys.jpeg",
          desc: "Увлажняющие линзы для комфортного ношения в течение дня.",
          price: 2900,
          category: "Линзы",
        },
        {
          id: 3,
          name: "Футляр для очков кожаный",
          img: "case.jpeg",
          desc: "Надёжный и стильный чехол из натуральной кожи.",
          price: 1200,
          category: "Аксессуары",
        },
        {
          id: 4,
          name: "Очки для чтения OpticPro",
          img: "glasses_opticpro.jpeg",
          desc: "Лёгкие и удобные очки для чтения с качественными линзами.",
          price: 2300,
          category: "Очки",
        },
        {
          id: 5,
          name: "Контейнер для линз с зеркалом",
          img: "container.jpeg",
          desc: "Удобный контейнер с зеркальцем — идеально для поездок.",
          price: 600,
          category: "Аксессуары",
        },
        {
          id: 6,
          name: "Линзы дневные Biofinity",
          img: "lenses_biofinity.jpeg",
          desc: "Дышащие дневные линзы с высокой пропускной способностью кислорода.",
          price: 3100,
          category: "Линзы",
        },
        {
          id: 7,
          name: "Очки солнцезащитные Polarized",
          img: "glasses_polarized.jpeg",
          desc: "Поляризованные линзы для защиты от яркого солнца и бликов.",
          price: 6700,
          category: "Очки",
        },
        {
          id: 8,
          name: "Спрей для очистки линз",
          img: "spray.jpeg",
          desc: "Эффективное средство для бережной очистки очков и линз.",
          price: 450,
          category: "Аксессуары",
        },
        {
          id: 9,
          name: "Линзы AirOptix многоразовые",
          img: "lenses_airoptix.jpeg",
          desc: "Надёжные и удобные линзы с длительным сроком ношения.",
          price: 3400,
          category: "Линзы",
        },
        {
          id: 10,
          name: "Очки в металлической оправе",
          img: "glasses.jpeg",
          desc: "Стильные и прочные очки с лёгкой металлической оправой.",
          price: 7900,
          category: "Очки",
        },
        {
          id: 11,
          name: "Оправа для очков Polarized ",
          img: "frame_polarized_1.jpeg",
          desc: "Вы всегда сможете заменить оправу в случае необходимости.",
          price: 7900,
          category: "Оправы",
        },
      ],
      showFullItem: false,
      fullItem: {},
      isOrderFormOpen: false,
    
    }   
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.toggleOrderForm = this.toggleOrderForm.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
         <Header orders={this.state.orders} onDelete={this.deleteOrder} toggleOrderForm={this.toggleOrderForm} />         
         <Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder}/>

         {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem}  item={this.state.fullItem} />}

         {this.state.isOrderFormOpen && <OrderForm onClose={this.toggleOrderForm} />}

         <AboutUs />

         <Contact />
         
         <Footer />
      </div>
    )
  } 

  toggleOrderForm() {
    this.setState(prevState => ({
      isOrderFormOpen: !prevState.isOrderFormOpen,
    }));
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem}) 
  }

  deleteOrder(id) {
    const item = this.state.orders.find(el => el.id === id)
  
    if (item.count && item.count > 1) {
      this.setState({
        orders: this.state.orders.map(el => 
          el.id === id ? { ...el, count: el.count - 1 } : el
        )
      })
    } else {
      this.setState({
        orders: this.state.orders.filter(el => el.id !== id)
      })
    }
  } 

  addToOrder(item) {
    const existingOrder = this.state.orders.find(el => el.id === item.id)
  
    if (existingOrder) {
      this.setState({
        orders: this.state.orders.map(el => 
          el.id === item.id ? { ...el, count: (el.count || 1) + 1 } : el
        )
      })
    } else {
      this.setState({
        orders: [...this.state.orders, { ...item, count: 1 }]
      })
    }
  }
  
}
export default App;

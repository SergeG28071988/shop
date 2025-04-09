import React, { Component } from 'react'
import opticsImage from '../images/optics-shop.jpg';
import doctor1 from '../images/doctor1.jpg';
import doctor2 from '../images/doctor2.jpg';
import doctor3 from '../images/doctor3.jpg';

export class AboutUs extends Component {
  render() {
    return (
      <section className="about-us" id='about-us'>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
             <h1>
                  Магазин оптики <br />
                  <span className="subtitle">с заботой о вас</span>
             </h1>
              <p>
                С 2020 года мы предлагаем широкий ассортимент очков, линз и аксессуаров, сочетая качество, стиль и доступность.
              </p>
              <p>
                Наша команда заботится о вашем зрении и комфорте. Мы стремимся предоставить индивидуальный подход и высокое качество обслуживания.
              </p>
              <p>
                Современное оборудование, квалифицированные специалисты и любовь к делу — всё для того, чтобы вы видели лучше.
              </p>
            </div>
            <div className="about-image">
               <img src={opticsImage} alt="Магазин оптики" />
            </div>
          </div>

          <div className="our-team">
            <h2>Наши специалисты</h2>
            <div className="team-members">
              <div className="team-member">
                <img src={doctor1} alt="Леонид Иларионов" />
                <h3>Елена Иванова</h3>
                <p>Врач-офтальмолог</p>
                <p>Опыт более 10 лет. Проводит диагностику зрения и помогает подобрать наилучшее решение для каждого клиента.</p>
              </div>
              <div className="team-member">
                <img src={doctor2} alt="Сергей Петров" />
                <h3>Сергей Петров</h3>
                <p>Оптик-консультант</p>
                <p>Профессионально подбирает очки и линзы с учётом моды и анатомии лица клиента.</p>
              </div>
              <div className="team-member">
                <img src={doctor3} alt="Анна Смирнова" />
                <h3>Анна Смирнова</h3>
                <p>Специалист по контактным линзам</p>
                <p>Помогает подобрать комфортные линзы, обучает их правильному использованию и уходу.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default AboutUs


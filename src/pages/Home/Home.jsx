import { useEffect } from 'react';
import './Home.scss';
import { YMaps, Map } from '@pbe/react-yandex-maps';

import { Header } from '../../components/Header/Header';
import { Form } from '../../components/Form/Form';
import lawyer from '../../assets/images/lawyer/Mask-group.svg';

function Home() {
    useEffect(() => {
        document.title = 'Агентство недвижимости АЛМА-ВИД';
    }, []);

    return (
        <>
            <div className="wrapper">
                <Header />
            </div>
            <section className="info">
                <div className="info__desc">
                    <h3 className="info__title font-inter-extrabold">ПОЧЕМУ НАМ МОЖНО ДОВЕРЯТЬ</h3>
                    <ul className="font-inter-regular">
                        <li>Помогаем продать и купить жилую и коммерческую недвижимость;</li>
                        <li>Консультации по покупке или продаже недвижимости;</li>
                        <li>Работаем в соответствии с Законодательством РФ;</li>
                        <li>Юридическая проверка всех сделок и соблюдение закона о защите персональных данных делают
                        сделки безопасными для своих клиентов;</li>
                        <li>Эффективность.</li>
                        <li>Широкая база объектов недвижимости, профессиональная продажа 
                        и подбор, собственные рекламные алгоритмы, и огромный опыт 
                        в проведении сделок любой сложности;</li>
                        <li>Выгодная процентная ставка по ипотеке;</li>
                        <li>Партнерские отношения с банками;</li>
                        <li>Индивидуальный подход к каждому клиенту;</li>
                        <li>Участие в аукционах государственных закупок жилья.</li>
                    </ul>
                </div>
                <div className="info__separator"></div>
                <div className="info__lead font-inter-bold">
                    <p>Высокое качество <span>обслуживания</span></p>
                    <p>Сэкономим <span>ваше время</span></p>
                    <p>Оплата после <span>сделки</span></p>
                </div>
            </section>
            <section className="lawyer-info font-inter-bold">
                <div className="lawyer-info__container">
                    <img className="lawyer-info__image" src={lawyer} alt="Наталья Ткаченко" />
                    <div className="lawyer-info__desc">
                        <h3 className="lawyer-info__title">Наталья Ткаченко</h3>
                        <p className="lawyer-info__text font-inter-regular">Руководитель агентства недвижимости,
                    опыт юридической практики 20 лет, более 4 000 лично проведённых сделок 
                    с недвижимостью по РФ</p>
                    </div>
                </div>
                <p className="lawyer-info__para">Оказываем квалифицированную помощь в любых вопросах, связанных 
                с недвижимостью! Бесплатные консультации по недвижимости.</p>
                <p className="lawyer-info__paraMobile">Оказываем квалифицированную помощь в любых вопросах, связанных 
                с недвижимостью!</p>
                <p className="lawyer-info__paraMobile">Бесплатные консультации по недвижимости</p>
            </section>
            <div className="map-container">
                <YMaps>
                    <Map className="map" defaultState={{ center: [55.16, 61.4], zoom: 12 }} />
                </YMaps>
            </div>
            <Form scrolledThreshold={2750}/>
        </>
    );
}

export { Home };

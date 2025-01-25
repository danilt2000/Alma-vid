import { useEffect } from 'react';
import './Office.scss';
import { YMaps, Map } from '@pbe/react-yandex-maps';

import { Header } from '../../components/Header/Header';

function Office() {
    useEffect(() => {
        document.title = 'Контакты Агентства недвижимости АЛМА-ВИД';
    }, []);
    
    return (
        <>
            <div className="wrapper-office">
                <Header />
                <section className="office">
                    <div className="office__title font-inter-semibold">АЛМА–ВИД<span>агентство недвижимости</span></div>
                    <div className="office__separator"></div>
                    <div className="office-inner">
                        <div className="office-container">
                            <div className="office__item">
                                <div className="office__pic office__pic_purchase"></div>
                                <div className="office__text">
                                    <p className="office__desc font-inter-bold">Покупка, продажа,
                                        <span>обмен квартир и комнат</span></p>
                                </div>
                            </div>
                            <div className="office__item">
                                <div className="office__pic office__pic_rent"></div>
                                <div className="office__text">
                                    <p className="office__desc font-inter-bold">Аренда квартир
                                        <span>и комнат</span></p>
                                </div>
                            </div>
                            <div className="office__item">
                                <div className="office__pic office__pic_buildings"></div>
                                <div className="office__text">
                                    <p className="office__desc font-inter-bold">Новостройки</p>
                                </div>
                            </div>
                            <div className="office__item">
                                <div className="office__pic office__pic_country"></div>
                                <div className="office__text">
                                    <p className="office__desc font-inter-bold">Загородная
                                        <span>недвижимость</span></p>
                                </div>
                            </div>
                            <div className="office__item">
                                <div className="office__pic office__pic_commercial"></div>
                                <div className="office__text">
                                    <p className="office__desc font-inter-bold">Коммерческая 
                                        <span>недвижимость</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="office-location font-inter-bold">
                <h2 className="office-location__title">Приходите в наш офис</h2>
                <div className="office-info">
                    <p className="office-info__para_address"><span>Адрес:</span>Ленина, д. 60 В, оф. 701
                        <span className="office-info__desc">Вход в офис со двора</span></p>
                    <p className="office-info__para"><span>Телефон:</span>+7 (351) 217-00-74→ Заказать звонок</p>
                    <p className="office-info__para"><span>E-mail:</span>sdelka.74@yandex.ru</p>
                    <p className="office-info__para"><span>Соц.сети:</span><a href="#">ВКонтакте</a></p>
                </div>
                <YMaps>
                    <Map className="map-office" defaultState={{ center: [55.16, 61.4], zoom: 12 }} />
                </YMaps>
            </section>
        </>
    );
}

export { Office };

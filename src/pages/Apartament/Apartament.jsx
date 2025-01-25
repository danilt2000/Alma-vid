import { useEffect } from 'react';
import './Apartament.scss';
import { YMaps, Map, } from '@pbe/react-yandex-maps';

import { Header } from '../../components/Header/Header';
import { Form } from '../../components/Form/Form';
import { Gallery } from '../../components/Gallery/Gallery';

function Apartament() {
    useEffect(() => {
        document.title = 'Апартаменты';
    }, []);

    return (
        <>
            <Header />
            <section className="apartament">
                <h2 className="apartament__title font-inter-bold">1-комн. кв. 34 м</h2>
                <p className="apartament__para font-inter-regular">Ул. Луначарского, Ленинский район</p>
                <div className="apartament__container">
                    <div className="apartament__info">
                        <Gallery/>
                        <div className="apartament__icons icons">
                            <div className="icons__item">
                                <div className="icons__pic icons__pic_area"></div>
                                <div className="icons__info">
                                    <p className="icons__desc font-inter-regular ">Общая площадь</p>
                                    <p className="icons__num font-inter-semibold">72М</p>
                                </div>
                            </div>
                            <div className="icons__item">
                                <div className="icons__pic icons__pic_living"></div>
                                <div className="icons__info">
                                    <p className="icons__desc font-inter-regular ">Жилая площадь</p>
                                    <p className="icons__num font-inter-semibold">68М</p>
                                </div>
                            </div>
                            <div className="icons__item">
                                <div className="icons__pic icons__pic_kitchen"></div>
                                <div className="icons__info">
                                    <p className="icons__desc font-inter-regular ">Площадь кухни</p>
                                    <p className="icons__num font-inter-semibold">11М</p>
                                </div>
                            </div>
                            <div className="icons__item">
                                <div className="icons__pic icons__pic_year"></div>
                                <div className="icons__info">
                                    <p className="icons__desc font-inter-regular ">Год постройки</p>
                                    <p className="icons__num font-inter-semibold">2003</p>
                                </div>
                            </div>
                            <div className="icons__item">
                                <div className="icons__pic icons__pic__floor"></div>
                                <div className="icons__info">
                                    <p className="icons__desc font-inter-regular ">Этаж</p>
                                    <p className="icons__num font-inter-semibold">7/12</p>
                                </div>
                            </div>
                        </div>
                        <div className="apartament__text font-inter-regular">
                            <p>Описани хаты рандомный текст Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.</p>
                        </div>
                        <div className="apartament__desc font-inter-regular">
                            <div className="apartament__flat flat">
                                <p className="flat__title font-inter-bold">О квартире</p>
                                <ul>
                                    <li><span className="title-color">Тип жилья:</span> вторичный</li>
                                    <li><span className="title-color">Общая площадь:</span> 31.9 м²</li>
                                    <li><span className="title-color">Площадь кухни:</span> 4 м²</li>
                                    <li><span className="title-color">Жилая площадь:</span> 21 м²</li>
                                    <li><span className="title-color">Этаж:</span> 4 из 5</li>
                                    <li><span className="title-color">Балкон или лоджия:</span> лоджия</li>
                                    <li><span className="title-color">Высота потолков:</span> 2.5 м</li>
                                    <li><span className="title-color">Санузел:</span> совмещенный</li>
                                    <li><span className="title-color">Вид из окон:</span> во двор</li>
                                    <li><span className="title-color">Ремонт:</span> косметический</li>
                                </ul>
                            </div>
                            <div className="apartament__home home">
                                <p className="home__title font-inter-bold">О доме</p>
                                <ul>
                                    <li><span className="title-color">Год постройки:</span> 2003</li>
                                    <li><span className="title-color">Тип дома:</span> панельный</li>
                                    <li><span className="title-color">Тип перекрытий:</span> железобетонный</li>
                                    <li><span className="title-color">Подъезды:</span> 5</li>
                                    <li><span className="title-color">Отопление:</span> центральное</li>
                                    <li><span className="title-color">Аварийность:</span> нет</li>
                                    <li><span className="title-color">Газоснобжение:</span> центральное</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="apartament__price price font-inter-regular">
                        <div className="price__container">
                            <p className="price__total font-inter-bold">1 234 567 ₽</p>
                            <div className="price__logo"></div>
                        </div>
                        <p className="price__desc">В ипотеку от 6546823 ₽/мес</p>
                        <p className="price__meter">Цена за метр............................................................45656 ₽/м</p>
                        <p className="price__conditions">Условия сделки......................................свободная продажа</p>
                        <p className="price__mortgage">Ипотека......................................................................возможна</p>
                        <button className="apartament__btn_number font-inter-bold" type="button">Показать телефон</button>
                        <button className="apartament__btn_write font-inter-bold" type="button">Написать</button>
                    </div>
                </div>
                <YMaps>
                    <Map className="map-apartament" defaultState={{ center: [55.16, 61.4], zoom: 15 }} />
                </YMaps>
            </section>
            <Form scrolledThreshold={2350}/>
        </>
    );
}

export { Apartament };

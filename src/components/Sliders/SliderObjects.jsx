import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderObjects.scss';
import { Object } from '../Object/Object';
import { API_CONFIG } from '../../config/contacts';

import objectPicOne from '../../assets/images/apartaments/image-44.jpg';
import objectPicTwo from '../../assets/images/apartaments/image-45.jpg';
import objectPicThree from '../../assets/images/apartaments/image-46.jpg';

const NextArrow = ({ onClick }) => {
    return (
        <div className="slider-objects__arrow slider-objects__arrow_next" onClick={onClick}></div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="slider-objects__arrow slider-objects__arrow_prev" onClick={onClick}></div>
    );
};

const SliderComponent = () => {
    const [objects, setObjects] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const isMobileResolution = useMediaQuery({ maxWidth: 768 });
    
    // Загрузка данных с API
    useEffect(() => {
        const fetchObjects = async () => {
            try {
                const response = await fetch(API_CONFIG.getFullURL(API_CONFIG.endpoints.rental), {
                    method: 'GET',
                    headers: {
                        'accept': '*/*'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setObjects(data);
                }
            } catch (error) {
                console.error('Ошибка при загрузке объектов:', error);
                // В случае ошибки оставляем пустой массив, компонент не сломается
            } finally {
                setLoading(false);
            }
        };

        fetchObjects();
    }, []);
    
    const settings = {
        dots: objects.length > (isMobileResolution ? 1 : 3), // Показываем точки если объектов больше чем влезает
        infinite: objects.length > (isMobileResolution ? 1 : 3), // Бесконечная прокрутка только если объектов достаточно
        speed: 500,
        slidesToShow: isMobileResolution ? 1 : 3,
        slidesToScroll: isMobileResolution ? 1 : 3,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Если загружаем данные, показываем статические объекты как fallback
    if (loading || objects.length === 0) {
        return (
            <div className="slider-objects">
                <Slider {...{...settings, dots: false, infinite: true}}>
                    <Link className="objects-link" to="/apartament">
                        <Object
                            image={objectPicOne}
                            price="1 234 567 ₽"
                            desc="1-комн. кв. 34 м"
                            address="Ул. Луначарского, Ленинский район"
                        />
                    </Link>
                    <Object
                        image={objectPicTwo}
                        price="1 234 567 ₽"
                        desc="1-комн. кв. 34 м"
                        address="Ул. Зари, Вагонка"
                    />
                    <Object
                        image={objectPicThree}
                        price="1 234 567 ₽"
                        desc="1-комн. кв. 34 м"
                        address="Ул. Солнечная, Заречный район"
                    />
                </Slider>
            </div>
        );
    }

    return (
        <div className="slider-objects">
            <Slider {...settings}>
                {objects.map((object) => (
                    <Link key={object.id} className="objects-link" to={`/apartament/${object.id}`}>
                        <Object
                            image={object.photoUrl}
                            price={object.price}
                            desc={object.title}
                            address={object.address}
                        />
                    </Link>
                ))}
            </Slider>
        </div>
    );
};

export { SliderComponent };

import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderObjects.scss';
import { Object } from '../Object/Object';

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
    const isMobileResolution = useMediaQuery({ maxWidth: 768 });
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobileResolution ? 1 : 3,
        slidesToScroll: isMobileResolution ? 1 : 3,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="slider-objects">
            <Slider {...settings}>
                <Link className="objects-link" to="/apartament">
                    <Object
                        image={objectPicOne}
                        price="1 234 567 ₽"
                        desc="1-комн. кв. 34 м"
                        address="Ул. Луначарского, Ленинский район"
                    /></Link>
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
                <Object
                    image={objectPicOne}
                    price="1 234 567 ₽"
                    desc="1-комн. кв. 34 м"
                    address="Ул. Луначарского, Ленинский район"
                />
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
};

export { SliderComponent };

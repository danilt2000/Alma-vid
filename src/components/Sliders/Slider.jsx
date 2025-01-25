import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import certificateSber from '../../assets/images/lawyer/sberbank-1.jpg';
import certificateSootsvet from '../../assets/images/lawyer/Sertifikat_Sootsvetstvia.jpg';
import svidetelstvo from '../../assets/images/lawyer/Svidetelstvo.jpg';
import diplom from '../../assets/images/lawyer/Diplom.jpg';

const NextArrow = ({ onClick }) => {
    return (
        <div className="slider__arrow slider__arrow_next" onClick={onClick}></div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="slider__arrow slider__arrow_prev" onClick={onClick}></div>
    );
};

const SliderComponent = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="slider">
            <Slider {...settings}>
                <div>
                    <img className="slider__certificate" src={certificateSber} alt="сертификат" />
                </div>
                <div>
                    <img className="slider__certificate_soot" src={certificateSootsvet} alt="сертификат соответствия" />
                </div>
                <div>
                    <img className="slider__svidetelstvo" src={svidetelstvo} alt="свидетельство" />
                </div>
                <div>
                    <img className="slider__diplom" src={diplom} alt="диплом" />
                </div>
            </Slider>
        </div>
    );
};

export { SliderComponent };

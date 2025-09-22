import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderObjects.scss";
import { Object } from "../Object/Object";
import { API_CONFIG } from "../../config/contacts";

import objectPicOne from "../../assets/images/apartaments/image-44.jpg";
import objectPicTwo from "../../assets/images/apartaments/image-45.jpg";
import objectPicThree from "../../assets/images/apartaments/image-46.jpg";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="slider-objects__arrow slider-objects__arrow_next"
      onClick={onClick}
    ></div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="slider-objects__arrow slider-objects__arrow_prev"
      onClick={onClick}
    ></div>
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
        const response = await fetch(
          API_CONFIG.getFullURL(API_CONFIG.endpoints.rental),
          {
            method: "GET",
            headers: {
              accept: "*/*",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setObjects(data);
        }
      } catch (error) {
        console.error("Ошибка при загрузке объектов:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchObjects();
  }, []);

  const settings = {
    dots: objects.length > (isMobileResolution ? 1 : 3), 
    infinite: objects.length > (isMobileResolution ? 1 : 3), 
    speed: 500,
    slidesToShow: isMobileResolution ? 1 : 3,
    slidesToScroll: isMobileResolution ? 1 : 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  
  if (loading || objects.length === 0) {
    return (
      <div className="slider-objects">
        <Slider {...{ ...settings, dots: false, infinite: true }}>
          <Object
            image={objectPicOne}
            price="2 500 000 ₽"
            desc="2-комн. кв., 47 м², 1/2 этаж"
            address="Челябинская область, Челябинск, Лазурная улица, 14А, район Металлургический, микрорайон Северо-Западный"
            cianUrl="https://cian.ru/sale/flat/310187199/"
          />
          <Object
            image={objectPicTwo}
            price="4 200 000 ₽"
            desc="3-комн. кв., 77 м², 4/4 этаж"
            address="Челябинская область, Челябинск, улица Ярослава Гашека, 20, район Ленинский, микрорайон Центральный"
            cianUrl="https://cian.ru/"
          />
          <Object
            image={objectPicThree}
            price="4 900 000 ₽"
            desc="Квартира-студия, 27,6 м², 19/25 этаж"
            address="Свердловская область, Екатеринбург, улица Студенческая, 80, район Верх-Исетский, микрорайон Уралмаш"
            cianUrl="https://cian.ru/"
          />
        </Slider>
      </div>
    );
  }

  return (
    <div className="slider-objects">
      <Slider {...settings}>
        {objects.map((object) => (
          <Object
            key={object.id}
            image={object.photoUrl}
            price={object.price}
            desc={object.title}
            address={object.address}
            cianUrl={object.cianUrl}
          />
        ))}
      </Slider>
    </div>
  );
};

export { SliderComponent };

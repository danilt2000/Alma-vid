import { useEffect, useState } from "react";
import "./Home.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import lawyer from "../../assets/images/lawyer/Mask-group.svg";
import { CONTACTS } from "../../config/contacts";

function Home() {
  const [isMapActive, setIsMapActive] = useState(false);

  useEffect(() => {
    document.title = CONTACTS.companyName;
  }, []);

  const handleActivateMap = () => {
    setIsMapActive(true);
    if (window.homeMap) {
      window.homeMap.behaviors.enable("scrollZoom");
      window.homeMap.behaviors.enable("drag");
    }
  };

  const handleDeactivateMap = () => {
    setIsMapActive(false);
    if (window.homeMap) {
      window.homeMap.behaviors.disable("scrollZoom");
      window.homeMap.behaviors.disable("drag");
    }
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="hero-tagline">
          <p>4 000 лично успешных проведенных сделок + 20 лет опыта</p>
        </div>
      </div>
      <section className="info">
        <div className="info__desc">
          <h3 className="info__title font-inter-extrabold">
            ПОЧЕМУ НАМ МОЖНО ДОВЕРЯТЬ
          </h3>
          <ul className="font-inter-regular">
            <li>
              Помогаем продать и купить жилую и коммерческую недвижимость;
            </li>
            <li>Консультации по покупке или продаже недвижимости;</li>
            <li>Работаем в соответствии с Законодательством РФ;</li>
            <li>
              Юридическая проверка всех сделок и соблюдение закона о защите
              персональных данных делают сделки безопасными для своих клиентов;
            </li>
            <li>Эффективность.</li>
            <li>
              Широкая база объектов недвижимости, профессиональная продажа и
              подбор, собственные рекламные алгоритмы, и огромный опыт в
              проведении сделок любой сложности;
            </li>
            <li>Выгодная процентная ставка по ипотеке;</li>
            <li>Партнерские отношения с банками;</li>
            <li>Индивидуальный подход к каждому клиенту;</li>
            <li>Участие в аукционах государственных закупок жилья.</li>
          </ul>
        </div>
        <div className="info__separator"></div>
        <div className="info__lead font-inter-bold">
          <p>
            Высокое качество <span>обслуживания</span>
          </p>
          <p>
            Сэкономим <span>ваше время</span>
          </p>
          <p>
            Оплата после <span>сделки</span>
          </p>
        </div>
      </section>
      <section className="lawyer-info font-inter-bold">
        <div className="lawyer-info__container">
          <img
            className="lawyer-info__image"
            src={lawyer}
            alt="Наталья Ткаченко"
          />
          <div className="lawyer-info__desc">
            <h3 className="lawyer-info__title">Наталья Ткаченко</h3>
            <p className="lawyer-info__text font-inter-regular">
              Руководитель агентства недвижимости, опыт юридической практики 20
              лет, более 4 000 лично проведённых сделок с недвижимостью по РФ
            </p>
          </div>
        </div>
        <p className="lawyer-info__para">
          Оказываем квалифицированную помощь в любых вопросах, связанных с
          недвижимостью! Бесплатные консультации по недвижимости.
        </p>
        <p className="lawyer-info__paraMobile">
          Оказываем квалифицированную помощь в любых вопросах, связанных с
          недвижимостью!
        </p>
        <p className="lawyer-info__paraMobile">
          Бесплатные консультации по недвижимости
        </p>
      </section>
      <div className="map-container">
        <YMaps>
          <Map
            className="map"
            defaultState={{
              center: CONTACTS.coordinates,
              zoom: 12,
            }}
            options={{
              scrollZoom: false,
              drag: false,
              suppressMapOpenBlock: true,
            }}
            instanceRef={(ref) => {
              window.homeMap = ref;
            }}
          >
            <Placemark
              geometry={CONTACTS.coordinates}
              properties={{
                balloonContent: CONTACTS.getBalloonContent(),
                hintContent: `Офис ${CONTACTS.companyNameShort}`,
              }}
              options={{
                preset: "islands#redDotIcon",
              }}
            />
          </Map>

          {/* Блокирующий оверлей когда карта неактивна */}
          {!isMapActive && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                zIndex: 999,
                cursor: "pointer",
              }}
              onClick={handleActivateMap}
            />
          )}

          {/* Кнопка управления картой в центре */}
          <div
            style={{
              position: "absolute",
              top: "85%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
            }}
          >
            {!isMapActive ? (
              <button
                onClick={handleActivateMap}
                style={{
                  background: "rgba(0, 123, 255, 0.9)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "15px 25px",
                  fontSize: "16px",
                  fontFamily: "Inter, Arial, sans-serif",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  color: "white",
                  fontWeight: "bold",
                  minWidth: "140px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(0, 123, 255, 1)";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(0, 123, 255, 0.9)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                📍 Посмотреть карту
              </button>
            ) : (
              <button
                onClick={handleDeactivateMap}
                style={{
                  background: "rgba(220, 53, 69, 0.9)",
                  border: "none",
                  borderRadius: "6px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontFamily: "Inter, Arial, sans-serif",
                  cursor: "pointer",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                  color: "white",
                  fontWeight: "bold",
                  minWidth: "120px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(220, 53, 69, 1)";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(220, 53, 69, 0.9)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                ✕ Закрыть карту
              </button>
            )}
          </div>
        </YMaps>
      </div>
      <Form scrolledThreshold={2750} />
    </>
  );
}

export { Home };

import { useEffect, useState } from "react";
import "./Office.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import { Header } from "../../components/Header/Header";
import { CONTACTS } from "../../config/contacts";

function Office() {
  const [isMapActive, setIsMapActive] = useState(false);

  useEffect(() => {
    document.title = `Контакты ${CONTACTS.companyName}`;
  }, []);

  const handleActivateMap = () => {
    setIsMapActive(true);
    if (window.officeMap) {
      window.officeMap.behaviors.enable("scrollZoom");
      window.officeMap.behaviors.enable("drag");
    }
  };

  const handleDeactivateMap = () => {
    setIsMapActive(false);
    if (window.officeMap) {
      window.officeMap.behaviors.disable("scrollZoom");
      window.officeMap.behaviors.disable("drag");
    }
  };

  return (
    <>
      <div className="wrapper-office">
        <Header />
        <section className="office">
          <div className="office__title font-inter-semibold">
            {CONTACTS.companyNameShort}–ВИД<span>агентство недвижимости</span>
          </div>
          <div className="office__separator"></div>
          <div className="office-inner">
            <div className="office-container">
              <div className="office__item">
                <div className="office__pic office__pic_purchase"></div>
                <div className="office__text">
                  <p className="office__desc font-inter-bold">
                    Покупка, продажа,
                    <span>обмен квартир и комнат</span>
                  </p>
                </div>
              </div>
              <div className="office__item">
                <div className="office__pic office__pic_rent"></div>
                <div className="office__text">
                  <p className="office__desc font-inter-bold">
                    Аренда квартир
                    <span>и комнат</span>
                  </p>
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
                  <p className="office__desc font-inter-bold">
                    Загородная
                    <span>недвижимость</span>
                  </p>
                </div>
              </div>
              <div className="office__item">
                <div className="office__pic office__pic_commercial"></div>
                <div className="office__text">
                  <p className="office__desc font-inter-bold">
                    Коммерческая
                    <span>недвижимость</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="office-location font-inter-bold">
        <h2 className="office-location__title">Приходите в наш офис</h2>
        <div className="office-info">
          <p className="office-info__para_address">
            <span>Адрес:</span>
            {CONTACTS.address.main.full}
            <span className="office-info__desc">Вход в офис со двора</span>
          </p>
          <p className="office-info__para">
            <span>Телефон:</span>
            <a href={CONTACTS.phone.link}>{CONTACTS.phone.display}</a> →
            Заказать звонок
          </p>
          <p className="office-info__para">
            <span>E-mail:</span>
            <a href={CONTACTS.email.link}>{CONTACTS.email.display}</a>
          </p>
          <p className="office-info__para">
            <span>Соц.сети:</span>
            <a href={CONTACTS.social.vk.url}>{CONTACTS.social.vk.name}</a>
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <YMaps>
            <Map
              className="map-office"
              defaultState={{
                center: CONTACTS.coordinates,
                zoom: 16,
              }}
              options={{
                scrollZoom: false,
                drag: false,
                suppressMapOpenBlock: true,
              }}
              instanceRef={(ref) => {
                window.officeMap = ref;
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

            {/* Блокирующий оверлей, когда карта неактивна */}
            {!isMapActive && (
              <div
                onClick={handleActivateMap}
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
      </section>
    </>
  );
}

export { Office };

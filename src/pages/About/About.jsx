import { useEffect } from "react";

import "./About.scss";
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { SliderComponent } from "../../components/Sliders/Slider";
import { CONTACTS } from "../../config/contacts";
function About() {
  useEffect(() => {
    document.title = `Об ${CONTACTS.companyName}`;
  }, []);

  return (
    <>
      <div className="wrapper-about">
        <Header />
        <section className="about">
          <div className="about-inner">
            <div className="about__info font-inter-bold">
              <p>
                Каждый из нас хоть раз сталкивается с квартирным вопросом -
                покупка, продажа, обмен квартиры или дома - эти процессы требуют
                серьезного профессионального подхода и юридической грамотности.
              </p>
              <p>
                Агентство недвижимости АЛМА-ВИД существует с 2000 года — за этот
                период мы обрели доверие и уважение наших многочисленных
                клиентов.
              </p>
              <p>
                Мы находимся в постоянном развитии и оттачиваем профессионализм
                наших сотрудников, обладая серьезной материальной базой и
                налаженными коммуникациями с крупными банками. Благодаря этому
                мы имеем возможность предоставлять услуги в сфере недвижимости
                высокого качества.
              </p>
            </div>
          </div>
          <div className="about__title font-inter-semibold">
            Об {CONTACTS.companyName}
          </div>
        </section>
      </div>
      <section className="certificates">
        <SliderComponent />
      </section>
      <Form scrolledThreshold={1650} />
    </>
  );
}

export { About };

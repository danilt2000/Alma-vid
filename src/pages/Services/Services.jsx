import { useEffect } from 'react';
import './Services.scss';

import { Header } from '../../components/Header/Header';
import { Form } from '../../components/Form/Form';

function Services() {
    useEffect(() => {
        document.title = 'Услуги Агентства недвижимости АЛМА-ВИД';
    }, []);

    return (
        <>
            <div className="wrapper-services">
                <Header />
                <div className="services__text">
                    <p className="services__title font-inter-bold">Мы работаем с 2000 года и помогаем
                продать и купить жилую и коммерческую недвижимость.</p>
                    <p className="services__subtitle font-inter-bold">Получите бесплатную консультацию 
                по покупке или продаже вашей 
                недвижимости: <a className="services__link" href="#">Вконтакте</a></p>
                </div>
            </div>
            <section className="services-info font-inter-bold">
                <h2 className="services-info__title">Почему более 3 000 семей доверили нам свою недвижимость:</h2>
                <div className="services-info__container">
                    <div className="services-info__desc">
                        <div className="services-info__item">
                            <p className="services-info__subtitle">1. Высокое качество работы</p>
                            <p className="services-info__text font-inter-regular">Наша деятельность проверена и признана
                            соответствующей национальному 
                            стандарту добровольной сертификации услуг на рынке недвижимости 
                            Российской Федерации.</p>
                        </div>
                        <div className="services-info__item">
                            <p className="services-info__subtitle">2. Работаем в соответствии 
                            с Законодательством РФ</p>
                            <p className="services-info__text font-inter-regular">Юридическая проверка всех сделок 
                            и соблюдение закона о защите 
                            персональных данных делают сделки безопасными для наших клиентов.</p>
                        </div>
                        <div className="services-info__item">
                            <p className="services-info__subtitle">3. Эффективность</p>
                            <p className="services-info__text font-inter-regular">Широкая база объектов недвижимости,
                            профессиональная продажа и подбор, собственные рекламные алгоритмы, и огромный опыт 
                            в проведении сделок любой сложности позволяют нам гарантировать,
                            что вы получите максимальную выгоду от работы с нами.</p>
                        </div>
                        <div className="services-info__item">
                            <p className="services-info__subtitle">4. Выгодная процентная ставка по ипотеке</p>
                            <p className="services-info__text font-inter-regular">Мы постоянно развиваем
                            партнерские отношения с банками, за счет чего 
                            имеем хорошую скидку для клиентов 
                            и высокую степень одобрения заявок.</p>
                        </div>
                    </div>
                    <div className="services-info__desc">
                        <div className="services-info__item">
                            <p className="services-info__subtitle">5. Квалифицированные сотрудники</p>
                            <p className="services-info__text font-inter-regular">Специалисты по недвижимости
                            нашей компании проходят обучение и регулярную аттестацию, а также постоянно повышают свой
                            профессиональный уровень. Это — обязательное условие для каждого из нас.
                            А значит, вы можете решить любой жилищный вопрос, воспользовавшись помощью
                            профессиональных риэлторов, юристов и специалистов по ипотечному кредитованию.</p>
                        </div>
                        <div className="services-info__item">
                            <p className="services-info__subtitle">6. Индивидуальный подход</p>
                            <p className="services-info__text font-inter-regular">Мы слышим и понимаем вас, делаем все,
                            чтобы в результате совместной работы задача, поставленная клиентом,
                            была решена, и он рекомендовал нас в дальнейшем.</p>
                        </div>
                        <div className="services-info__item">
                            <p className="services-info__subtitle">7. Гарантии</p>
                            <p className="services-info__text font-inter-regular">Мы даем своим клиентам гарантии 
                            в юридической проверке сделок. </p>
                        </div>
                        <div className="services-info__item">
                            <p className="services-info__text">
                                <span className="services-info__accent">Хотите купить,
                            продать недвижимость или задать вопрос юристу, оставьте заявку наши специалисты
                            проконсультируют вас.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services font-inter-bold">
                <h3 className="services-list__title">Наши услуги</h3>
                <div className="services__container">
                    <div className="services__list">
                        <ul className="services__list_left">
                            <li>продажа недвижимости</li>
                            <li>покупка недвижимости</li>
                            <li>ипотека</li>
                            <li>подбор объектов <span>недвижимости</span></li>
                            <li>помощь в оформлении <span>наследства</span></li>
                            <li>консультации по вопросам недвижимости</li>
                            <li>оформление приватизации</li>
                        </ul>
                    </div>
                    <div className="services__separator"></div>
                    <div className="services__list">
                        <ul className="services__list_right">
                            <li>юридическое сопровождение сделок</li>
                            <li>узаконивание перепланировок</li>
                            <li>оформление права собственности на дома и земельные участки</li>
                            <li>работа с жилищными сертификатами и субсидиями, в том числе материнским капиталом</li>
                            <li>составление (подготовка) юридической экспертизы на продаваемый/покупаемый
                            объект недвижимости</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Form scrolledThreshold={2700}/>
        </>
    );
}

export { Services };

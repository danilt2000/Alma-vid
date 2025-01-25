import React, { useState, useEffect } from 'react';

import './Form.scss';
import PencilIcon from '../../assets/images/icons/pencil.svg';

function Form({ scrolledThreshold }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isVisible, setVisible] = useState(false);

    const checkVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > scrolledThreshold){  // вы можете настроить это значение
            if(!isVisible) setVisible(true);
        } else{
            if(isVisible) setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisible);
        return () => window.removeEventListener('scroll', checkVisible);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // в этой функции можно добавить логику для отправки формы на сервер
        console.log(`${name}, ваш номер телефона: ${phone}`);
        setName('');
        setPhone('');
    };

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <section className="consultation-form font-inter-regular">
            <div className="consultation-form__info form-info">
                <h2 className="form-info__title font-inter-bold">
                    Решили купить или продать квартиру?
                    <span>Закажите бесплатную консультацию</span>
                </h2>
                <form onSubmit={handleSubmit}>
                    <p className="form__title">Заполните форму ниже</p>
                    <p>Мы позвоним вам в ближайшее время</p>
                    <div>
                        <input
                            className="font-inter-regular"
                            type="text"
                            value={name}
                            placeholder="Ваше имя"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="font-inter-regular"
                            type="tel"
                            value={phone}
                            placeholder="+7(800)555-35-35"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button
                            className="form-btn font-inter-regular"
                            type="submit"
                        >
                            Записаться на консультацию
                        </button>
                    </div>
                    <p>
                        Заполняя форму, вы соглашаетесь с политикой
                        конфиденциальности
                    </p>
                </form>
                <div className="que-form">
                    <div className={`arrow ${isVisible ? 'arrow__visible' : ''}`} onClick={scrollToTop}></div>
                    <p className="font-inter-bold">
                        У вас остались вопросы? <span>Напишите нам, мы онлайн!</span>
                    </p>
                    <img className="que__img" src={PencilIcon} alt="pencil" />
                </div>
            </div>
        </section>
    );
}

export { Form };

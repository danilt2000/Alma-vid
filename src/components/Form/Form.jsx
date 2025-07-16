import React, { useState, useEffect } from "react";

import "./Form.scss";
import PencilIcon from "../../assets/images/icons/pencil.svg";
import { API_CONFIG } from "../../config/contacts";

function Form({ scrolledThreshold }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const checkVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > scrolledThreshold) {
      // вы можете настроить это значение
      if (!isVisible) setVisible(true);
    } else {
      if (isVisible) setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisible);
    return () => window.removeEventListener("scroll", checkVisible);
  });

  // Автоматически скрываем сообщение об успехе через 5 секунд
  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Функция для форматирования номера телефона
  const formatPhoneNumber = (value) => {
    // Убираем все нецифровые символы
    const phoneNumber = value.replace(/\D/g, "");

    // Ограничиваем длину номера
    if (phoneNumber.length > 11) {
      return phone; // возвращаем предыдущее значение, если превышена длина
    }

    // Форматируем номер
    if (phoneNumber.length === 0) return "";
    if (phoneNumber.length <= 1) return `+7`;
    if (phoneNumber.length <= 4) return `+7(${phoneNumber.slice(1)}`;
    if (phoneNumber.length <= 7)
      return `+7(${phoneNumber.slice(1, 4)})${phoneNumber.slice(4)}`;
    if (phoneNumber.length <= 9)
      return `+7(${phoneNumber.slice(1, 4)})${phoneNumber.slice(
        4,
        7
      )}-${phoneNumber.slice(7)}`;
    return `+7(${phoneNumber.slice(1, 4)})${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверяем, что поля заполнены
    if (!name.trim() || !phone.trim()) {
      setSubmitStatus("error");
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        API_CONFIG.getFullURL(API_CONFIG.endpoints.feedback),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify({
            firstName: name.trim(),
            phoneNumber: phone.trim().replace(/\D/g, ""), // убираем все нецифровые символы
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setName("");
        setPhone("");
        console.log("Заявка успешно отправлена");
      } else {
        throw new Error("Ошибка при отправке заявки");
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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

          {submitStatus === "success" && (
            <div
              style={{
                color: "green",
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#d4edda",
                border: "1px solid #c3e6cb",
                borderRadius: "4px",
              }}
            >
              ✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее
              время.
            </div>
          )}

          {submitStatus === "error" && (
            <div
              style={{
                color: "red",
                marginBottom: "15px",
                padding: "10px",
                backgroundColor: "#f8d7da",
                border: "1px solid #f5c6cb",
                borderRadius: "4px",
              }}
            >
              ❌ Ошибка при отправке. Пожалуйста, проверьте данные и попробуйте
              снова.
            </div>
          )}

          <div>
            <input
              className="font-inter-regular"
              type="text"
              value={name}
              placeholder="Ваше имя"
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
            />
            <input
              className="font-inter-regular"
              type="tel"
              value={phone}
              placeholder="+7(800)555-35-35"
              onChange={handlePhoneChange}
              required
              disabled={isLoading}
            />
            <button
              className="form-btn font-inter-regular"
              type="submit"
              disabled={isLoading || !name.trim() || !phone.trim()}
              style={{
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
            >
              {isLoading ? "Отправляем..." : "Записаться на консультацию"}
            </button>
          </div>
          <p>Заполняя форму, вы соглашаетесь с политикой конфиденциальности</p>
        </form>
        <div className="que-form">
          <div
            className={`arrow ${isVisible ? "arrow__visible" : ""}`}
            onClick={scrollToTop}
          ></div>
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

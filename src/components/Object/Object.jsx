import "./Object.scss";
import { useState, useEffect, useRef } from "react";

function Object(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const contentRef = useRef(null);

  const checkIfContentOverflows = () => {
    if (contentRef.current) {
      // Временно убираем класс collapsed для измерения полной высоты
      const element = contentRef.current;
      const hadCollapsedClass = element.classList.contains(
        "item__content--collapsed"
      );

      if (hadCollapsedClass) {
        element.classList.remove("item__content--collapsed");
      }

      // Измеряем полную высоту
      const fullHeight = element.scrollHeight;

      // Возвращаем класс обратно
      if (hadCollapsedClass) {
        element.classList.add("item__content--collapsed");
      }

      // Измеряем высоту в свернутом состоянии
      const collapsedHeight = element.clientHeight;

      // Проверяем, есть ли разница больше чем 20px (чтобы избежать ложных срабатываний)
      const heightDifference = fullHeight - collapsedHeight;
      setNeedsExpansion(heightDifference > 20);
    }
  };

  useEffect(() => {
    // Задержка для правильного расчета после рендера
    const timeoutId = setTimeout(() => {
      checkIfContentOverflows();
    }, 200);

    // Проверяем при изменении размера окна
    const handleResize = () => {
      setTimeout(checkIfContentOverflows, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [props.desc, props.address]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`item ${isExpanded ? "item--expanded" : ""}`}>
      <img className="item__image" src={props.image} alt="квартира" />
      <div className="item__info font-inter-bold">
        <div
          className={`item__content ${
            !isExpanded ? "item__content--collapsed" : ""
          }`}
          ref={contentRef}
        >
          <p className="item__price">{props.price}</p>
          <p className="item__desc" title={props.desc}>
            {props.desc}
          </p>
          <p className="item__address font-inter-regular" title={props.address}>
            {props.address}
          </p>
        </div>

        {needsExpansion && (
          <div className="item__expand-wrapper">
            <button
              className="item__expand-btn"
              onClick={toggleExpansion}
              type="button"
            >
              {isExpanded ? "Скрыть" : "Показать больше"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export { Object };

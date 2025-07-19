import "./Object.scss";
import { useState } from "react";

function Object(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const addressLimit = 30;
  const isAddressTooLong = props.address && props.address.length > addressLimit;
  const needsExpansion = isAddressTooLong;

  const truncateAddress = (text) => {
    if (!text) return "";
    if (isExpanded) return text;
    if (text.length <= addressLimit) return text;

    const truncated = text.substring(0, addressLimit);
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    if (lastSpaceIndex > 0) {
      return truncated.substring(0, lastSpaceIndex) + "...";
    }
    return truncated + "...";
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`item ${isExpanded ? "item--expanded" : ""}`}>
      <img className="item__image" src={props.image} alt="квартира" />
      <div className="item__info font-inter-bold">
        <div className="item__content">
          <p className="item__price">{props.price}</p>
          <p className="item__desc" title={props.desc}>
            {props.desc}
          </p>
          <p className="item__address font-inter-regular" title={props.address}>
            {truncateAddress(props.address)}
          </p>
        </div>
        {needsExpansion && (
          <button
            className="item__expand-btn"
            onClick={toggleExpansion}
            type="button"
          >
            {isExpanded ? "Скрыть" : "Показать больше"}
          </button>
        )}
      </div>
    </div>
  );
}

export { Object };

import "./Object.scss";
import { useState, useEffect, useRef } from "react";

function Object(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const contentRef = useRef(null);

  const handleCardClick = (e) => {
    // Don't redirect if user clicked on the expand button
    if (e.target.closest('.item__expand-btn')) {
      return;
    }
    
    if (props.cianUrl) {
      window.open(props.cianUrl, '_blank');
    }
  };

  useEffect(() => {
    const checkExpansion = () => {
      if (!props.desc || !props.address || !contentRef.current) {
        setNeedsExpansion(false);
        return;
      }

      const contentElement = contentRef.current;
      const contentHeight = contentElement.scrollHeight;
      const containerHeight = contentElement.clientHeight;
      
      const needsExp = contentHeight > containerHeight;
      setNeedsExpansion(needsExp);
    };

    setTimeout(checkExpansion, 100);
    
    const handleResize = () => {
      setTimeout(checkExpansion, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [props.desc, props.address]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`item ${isExpanded ? "item--expanded" : ""} ${props.cianUrl ? "item--clickable" : ""}`}
      onClick={handleCardClick}
      style={{ cursor: props.cianUrl ? 'pointer' : 'default' }}
    >
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
          <div className="item__expand-wrapper" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
            <button
              className="item__expand-btn"
              onClick={toggleExpansion}
              type="button"
              style={{ 
                display: 'block', 
                visibility: 'visible', 
                opacity: 1,
                color: '#007bff',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 0',
                margin: '2px 0',
                fontSize: '11px',
                fontWeight: '500',
                textAlign: 'left',
                width: '100%'
              }}
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

import { CONTACTS } from "../../config/contacts";
import "./ContactInfo.scss";

function ContactInfo({ variant = "default" }) {
  if (variant === "inline") {
    return (
      <div className="contact-info-inline">
        <span className="contact-info__phone">
          <a href={CONTACTS.phone.link}>{CONTACTS.phone.display}</a>
        </span>
        <span className="contact-info__email">
          <a href={CONTACTS.email.link}>{CONTACTS.email.display}</a>
        </span>
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className="contact-info-full">
        <div className="contact-info__item">
          <span className="contact-info__label">Телефон:</span>
          <a href={CONTACTS.phone.link} className="contact-info__value">
            {CONTACTS.phone.display}
          </a>
        </div>
        <div className="contact-info__item">
          <span className="contact-info__label">E-mail:</span>
          <a href={CONTACTS.email.link} className="contact-info__value">
            {CONTACTS.email.display}
          </a>
        </div>
        <div className="contact-info__item">
          <span className="contact-info__label">Адрес:</span>
          <span className="contact-info__value">
            {CONTACTS.address.main.full}
          </span>
        </div>
        <div className="contact-info__item">
          <span className="contact-info__label">Соц.сети:</span>
          <div className="contact-info__social">
            <a
              href={CONTACTS.social.vk.url}
              className="contact-info__social-link"
            >
              {CONTACTS.social.vk.name}
            </a>
            <a
              href={CONTACTS.social.telegram.url}
              className="contact-info__social-link"
            >
              {CONTACTS.social.telegram.name}
            </a>
            <a
              href={CONTACTS.social.instagram.url}
              className="contact-info__social-link"
            >
              {CONTACTS.social.instagram.name}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-info">
      <a href={CONTACTS.phone.link} className="contact-info__phone">
        {CONTACTS.phone.display}
      </a>
      <a href={CONTACTS.email.link} className="contact-info__email">
        {CONTACTS.email.display}
      </a>
    </div>
  );
}

export { ContactInfo };

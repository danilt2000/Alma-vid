import "./Header.scss";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONTACTS } from "../../config/contacts";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const isGradientBackground = location.pathname === "/apartament";
  const isHomePage = location.pathname === "/";
  return (
    <header
      className={`header font-inter-bold ${
        isGradientBackground ? "header_gradient" : ""
      }`}
    >
      <Link className="header__logo" to="/"></Link>
      {isHomePage && <div className="header__text"></div>}
      <div className="burgerMenu">
        <a href={CONTACTS.phone.link} className="header-info__call">
          {CONTACTS.phone.display}
        </a>
        <div className="burger-item">
          <input
            id="toggle"
            type="checkbox"
            checked={isOpen}
            onChange={handleToggle}
          ></input>
          <label for="toggle" className={`hamburger ${isOpen ? "open" : ""}`}>
            <div class="top-bun"></div>
            <div class="meat"></div>
            <div class="bottom-bun"></div>
          </label>
          <div class="nav">
            <div class="nav-wrapper">
              <nav className="nav-container">
                <Link to="/objects" className="header__link">
                  Объекты
                </Link>
                <Link to="/services" className="header__link">
                  Услуги
                </Link>
                <Link to="/about" className="header__link">
                  О компании
                </Link>
                <Link to="/office" className="header__link" href="#">
                  Наш офис
                </Link>
                <p>{CONTACTS.address.main.city}</p>
                <div className="header-socials__links">
                  <a
                    className="header-socials__tg"
                    href={CONTACTS.social.telegram.url}
                  ></a>
                  <a
                    className="header-socials__inst"
                    href={CONTACTS.social.instagram.url}
                  ></a>
                  <a
                    className="header-socials__vk"
                    href={CONTACTS.social.vk.url}
                  ></a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <nav className="header__nav">
        <Link to="/objects" className="header__link">
          Объекты
        </Link>
        <Link to="/services" className="header__link">
          Услуги
        </Link>
        <Link to="/about" className="header__link">
          О компании
        </Link>
        <Link to="/office" className="header__link" href="#">
          Наш офис
        </Link>
      </nav>
      <div className="header-info">
        <a href={CONTACTS.phone.link} className="header-info__call">
          {CONTACTS.phone.display}
        </a>
        <button className="header-info__btn" type="button">
          Обратный звонок
        </button>
      </div>
      <div className="header-socials">
        <span className="header-socials__location">
          {CONTACTS.address.main.city}
        </span>
        <div className="header-socials__links">
          <a
            className="header-socials__tg"
            href={CONTACTS.social.telegram.url}
          ></a>
          <a
            className="header-socials__inst"
            href={CONTACTS.social.instagram.url}
          ></a>
          <a className="header-socials__vk" href={CONTACTS.social.vk.url}></a>
        </div>
      </div>
    </header>
  );
}

export { Header };

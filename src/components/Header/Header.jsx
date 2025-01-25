import './Header.scss';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();
    const isGradientBackground = location.pathname === '/apartament';
    const isHomePage = location.pathname === '/';
    return (
        <header className={`header font-inter-bold ${isGradientBackground ? 'header_gradient' : ''}`}>
            <Link className="header__logo" to="/"></Link>
            {isHomePage && <div className="header__text"></div>}
            <div className="burgerMenu">
                <a href="tel:+73512170074" className="header-info__call">8(351)217-00-74</a>
                <div className="burger-item">
                    <input id="toggle" type="checkbox" checked={isOpen} onChange={handleToggle}></input>
                    <label for="toggle" className={`hamburger ${isOpen ? 'open' : ''}`}>
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
                                <p>Челябинск</p>
                                <div className="header-socials__links">
                                    <a className="header-socials__tg" href="#"></a>
                                    <a className="header-socials__inst" href="#"></a>
                                    <a className="header-socials__vk" href="#"></a>
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
                <a href="tel:+73512170074" className="header-info__call">8(351)217-00-74</a>
                <button className="header-info__btn" type="button">
                    Обратный звонок
                </button>
            </div>
            <div className="header-socials">
                <span className="header-socials__location">Челябинск</span>
                <div className="header-socials__links">
                    <a className="header-socials__tg" href="#"></a>
                    <a className="header-socials__inst" href="#"></a>
                    <a className="header-socials__vk" href="#"></a>
                </div>
            </div>
        </header>
    );
}

export { Header };

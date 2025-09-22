import "./Footer.scss";
import { Link, useNavigate } from "react-router-dom";
import { CONTACTS } from "../../config/contacts";

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePageChange = (path) => {
    handleClick();
    navigate(path);
  };

  return (
    <footer className="footer">
      <Link
        to="/"
        className="footer__logo font-inter-regular"
        onClick={() => handlePageChange("/")}
      >
        Ткаченко НН
      </Link>
      <div className="footer-info font-inter-bold">
        <Link to="/objects" onClick={() => handlePageChange("/objects")}>
          Объекты
        </Link>
        <Link to="/services" onClick={() => handlePageChange("/services")}>
          Услуги
        </Link>
        <Link to="/about" onClick={() => handlePageChange("/about")}>
          О компании
        </Link>
        <Link to="/office" onClick={() => handlePageChange("/office")}>
          Контакты
        </Link>
      </div>
      <div className="footer-socials">
        <a
          className="footer-socials__tg"
          href={CONTACTS.social.telegram.url}
        ></a>
        <a
          className="footer-socials__inst"
          href={CONTACTS.social.instagram.url}
        ></a>
        <a className="footer-socials__vk" href={CONTACTS.social.vk.url}></a>
      </div>
    </footer>
  );
}

export { Footer };

import "./Nav.scss";
import Logo from "../../../assets/deus.png";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate;

  return (
    <section className="c-nav">
      <div className="c-nav__logo">
        <img src={Logo} alt="logo deus" className="c-nav__logo__img" />
      </div>
      <div className="c-nav__content">
        <Link to="create-beer" className="c-nav__link">
          <p className="c-nav__item">Create your beer</p>
        </Link>
        <p className="c-nav__item">About</p>
      </div>
    </section>
  );
};

export default Nav;

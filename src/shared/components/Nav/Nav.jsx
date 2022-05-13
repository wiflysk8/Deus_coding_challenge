import "./Nav.scss";
import Logo from "../../../assets/deus.png";

const Nav = () => {
  return (
    <section className="c-nav">
      <div className="c-nav__logo">
        <img src={Logo} alt="logo deus" className="c-nav__logo__img" />
      </div>
      <div className="c-nav__content">
        <p className="c-nav__item">Create your beer</p>
        <p className="c-nav__item">About</p>
      </div>
    </section>
  );
};

export default Nav;

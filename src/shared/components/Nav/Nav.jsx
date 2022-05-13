import "./Nav.scss";
import Logo from "../../../assets/deus.png";

const Nav = () => {
  return (
    <section className="c-nav">
      <div className="c-nav__logo">
        <img src={Logo} alt="logo deus" className="c-nav__logo__img" />
      </div>
      <p className="c-nav__item">About</p>
    </section>
  );
};

export default Nav;

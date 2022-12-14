import React from "react";
import mealsImg from "../../assets/meals.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClickCartInHeader={props.onClickCart}>
          Cart
        </HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;

import React from "react";
import { AppRoute } from "../../../const";
import { StyledButton } from "./styled";
import Button from "/src/components/ui/button/button";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button minWidth={260} key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      {/* <Button minWidth={260} link="/buy">
        Купить билет
      </Button> */}
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;

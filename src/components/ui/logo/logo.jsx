import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";

import { Text, StyledLogo } from "./styles";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";
import { StyledLogoMainPage } from "../../styled/StyledLogoMainPage/StyledLogoMainPage";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;

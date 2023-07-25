import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledSection } from "./styles";

// шапка сайта
function Header({
  pageUrl // урл страницы
}) {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledSection>
  );
}

export default Header;

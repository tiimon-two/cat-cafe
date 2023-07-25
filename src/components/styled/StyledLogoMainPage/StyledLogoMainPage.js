import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const logoStyle = css`
  display: flex;
  height: 44px;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

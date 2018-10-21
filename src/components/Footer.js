import React from "react";
import styled from "styled-components";
import { mainPadding, media, flexColumnCentered } from "./../styles/mixins";
import { LozengeLink } from "./../styles/components";
import { heights, colors, spacing } from "./../styles/theme.json";
import Policies from "./Policies";

export default () => (
  <FooterWrapper>
    <LozengeLink href="mailto:hi@jadeeightyeight.com">
      <span>Contact Us</span>
    </LozengeLink>
    <Policies />
  </FooterWrapper>
);

// STYLES
const FooterWrapper = styled.footer`
  ${flexColumnCentered};
  ${mainPadding};
  padding-bottom: ${spacing.big_pad};
  position: relative;
  text-align: center;
  background-color: ${colors.green};
  ${media.desktopNav`
    height: ${heights.footer};
    justify-content: center;
  `};
  a {
    margin-bottom: ${spacing.double_pad};
  }
`;

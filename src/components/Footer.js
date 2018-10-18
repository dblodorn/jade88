import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  flexRow,
  mainPadding,
  media,
  flexRowCenteredVert
} from "./../styles/mixins";
import { heights, colors, spacing } from "./../styles/theme.json";

export default () => (
  <FooterWrapper>
    <p>hi@jadeeightyeight.com</p>
  </FooterWrapper>
);

// STYLES
const FooterWrapper = styled.footer`
  ${flexRow};
  ${mainPadding};
  padding-bottom: ${spacing.big_pad};
  position: relative;
  text-align: center;
  ${media.desktopNav`
    ${flexRowCenteredVert};
    height: ${heights.footer};
    background-color: ${colors.footer_bg_color};
  `};
`;

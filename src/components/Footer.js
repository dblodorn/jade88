import React from "react";
import styled from "styled-components";
import {
  flexRow,
  mainPadding,
  media,
  flexRowCenteredAll,
  defaultLink
} from "./../styles/mixins";
import { heights, colors, spacing } from "./../styles/theme.json";

export default () => (
  <FooterWrapper>
    <MailTo href="mailto:hi@jadeeightyeight.com">hi@jadeeightyeight.com</MailTo>
  </FooterWrapper>
);

// STYLES
const FooterWrapper = styled.footer`
  ${flexRow};
  ${mainPadding};
  padding-bottom: ${spacing.big_pad};
  position: relative;
  text-align: center;
  justify-content: center;
  ${media.desktopNav`
    ${flexRowCenteredAll};
    height: ${heights.footer};
    background-color: ${colors.green};
  `};
`;

const MailTo = styled.a`
  ${defaultLink};
`;
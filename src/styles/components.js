import styled from "styled-components";
import { heights, spacing, shared, colors, widths, fonts } from "./theme.json";
import * as _ from "./mixins";

// DOM NODES
const Section = styled.section`
  width: 100%;
  ${_.flexColumn};
`;

const Article = styled.article`
  ${_.wrapperWidths};
  padding-left: ${spacing.double_pad};
  padding-right: ${spacing.double_pad};
`;

const PadWrapper = styled.div`
  ${_.mainPadding};
  &.add-top-border {
    border-top: ${shared.border_thin};
  }
`;

const GridWrapper = styled.ul`
  ${_.wrapperWidths};
  ${_.flexRowWrap};
  ${_.grid};
`;

const ProportionWrapper = styled.div`
  height: 0;
  overflow-y: visible;
  position: relative;
  width: 100%;
  padding-bottom: ${props => `${props.Mobile}%` || `100%`};
  ${_.media.medium`
    padding-bottom: ${props => `${props.Desktop}%` || `50%`};
  `} ${_.media.big`
    padding-bottom: ${props => `${props.Max}%` || `45%`};
  `};
`;

// TYPE
const H1 = styled.h1`
  ${_.bigType};
  padding-bottom: ${spacing.single_pad};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${fonts.display_font_a};
  text-transform: ${props => props.theme.display_case};
`;

const H2 = styled.h2`
  ${_.mediumType};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${fonts.display_font_a};
`;

const H3 = styled.h3`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${fonts.display_font_a};
`;

const H4 = styled.h4`
  ${_.mediumType};
  padding-bottom: ${spacing.small_pad};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${fonts.display_font_a};
`;

const H5 = styled.h5`
  ${_.mediumType};
  padding-bottom: ${spacing.small_pad};
  font-family: ${fonts.display_font_a};
`;

const H6 = styled.h6`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  font-family: ${fonts.display_font_a};
`;

const P = styled.p`
  ${_.bodyType};
  font-family: ${props => props.theme.body_copy_font};
`;

const SmallP = styled.p`
  ${_.smallType};
  font-family: ${props => props.theme.body_copy_font};
`;

const StyledButton = styled.button`
  ${_.buttonStyle};
`;

const StyledMarkup = styled.div`
  margin-bottom: ${spacing.single_pad};
  &.pad-top {
    padding-top: ${spacing.double_pad};
  }
  h1 {
    ${_.bigType};
    color: ${props => props.theme.display_font_color};
    font-family: ${fonts.display_font_a};
  }
  h2 {
    ${_.mediumType};
    color: ${props => props.theme.display_font_color};
    font-family: ${fonts.display_font_a};
    padding-bottom: 1.5rem;
  }
  h3 {
    ${_.mediumType};
    color: ${props => props.theme.body_copy_color};
    font-family: ${fonts.display_font_a};
  }
  h4 {
    ${_.mediumType};
    color: ${props => props.theme.body_copy_color};
    font-family: ${props => props.theme.body_copy_font};
  }
  h5 {
    ${_.mediumType};
    color: ${props => props.theme.body_copy_color};
    font-family: ${props => props.theme.body_copy_font};
  }
  h6 {
    ${_.bodyType};
    color: ${props => props.theme.body_copy_color};
    font-family: ${props => props.theme.body_copy_font};
  }
  p {
    ${_.bodyType};
    color: ${colors.black};
    font-family: ${fonts.body_copy_font_a};
    margin-bottom: ${spacing.single_pad};
    max-width: ${widths.max_medium};
    &:last-child {
      margin-bottom: 0;
    }
  }
  b {
    font-family: ${fonts.display_font_a}!important;
    font-size: 1.65rem;
  }
  a {
    ${_.defaultLink};
    color: ${props => props.theme.display_font_color};
    font-family: ${props => props.theme.body_copy_font};
  }
`;

// UI
const NavItem = styled.li`
  padding-bottom: ${spacing.double_pad};
  &:last-child {
    padding-bottom: 0;
  }
  ${_.media.medium`
    padding-right: ${spacing.double_pad};
    padding-bottom: 0;
    &:last-child {
      padding-right: 0;
    }
  `} &.active {
    pointer-events: none !important;
    text-decoration: underline;
    * {
      color: ${colors.active_color};
    }
  }
  &.sidebar {
    ${_.media.desktopNav`
      padding-bottom: ${spacing.double_pad};
      padding-right: 0;
      &.footer {
        padding-bottom: 0;
        padding-right: ${spacing.double_pad};
        &:last-child {
          padding-right: 0;
        }
      }
    `};
  }
  &.top-horizontal {
  }
`;

const SocialLink = styled.a`
  display: block;
  width: 3rem;
  height: 3rem;
  svg {
    width: 100%;
    height: auto;
  }
`;

// WRAPPERS
const LogoWrapperFixedTopRight = styled.div`
  position: fixed;
  top: ${props => props.position_sm};
  right: ${props => props.position_sm};
  z-index: 9000;
  ${_.media.medium`
    top: ${props => props.position_med};
    right: ${props => props.position_med};
  `};
`;

const FullPageBgWrapper = styled.aside`
  ${_.fixedTopLeft};
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

const ModalWrapper = styled.div`
  ${_.flexCenteredAll};
  position: fixed;
  z-index: 12000;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.popup_bg_color || colors.black};
  padding: calc(${heights.header} / 2) 0;
  ${_.media.desktopNav`
    padding: calc(${heights.header} / 2);
  `};
`;

const ModalContentWrapper = styled.div`
  ${_.flexCenteredAll};
  max-height: ${props => props.maxHeight};
  width: 100%;
  height: 100%;
  max-width: 100rem;
  position: relative;
`;

const CloseButton = styled.button`
  ${_.buttonInit};
  width: ${props => props.size};
  height: ${props => props.size};
  padding: 0;
  z-index: 11000;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const LozengeButton = styled.button`
  ${_.buttonStyle};
`;

const LozengeLink = styled.a`
  ${_.buttonStyle};
`;

const BuyButton = styled.button`
  ${_.buttonInit};
  ${_.shadow};
  ${_.flexCenteredAll};
  width: ${props => props.sizeMobie || `7.5rem`};
  height: ${props => props.sizeMobie || `7.5rem`};
  background-color: ${props => props.bgColor || colors.blue};
  font-family: ${fonts.sans};
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 0.7;
  color: ${colors.white};
  transition: transform 250ms ease-in-out;
  will-change: transition;
  border-radius: 50%;
  text-align: center;
  padding: 0;
  transform: rotate(${props => props.startAngle || `25deg`});
  &:hover {
    transform: rotate(${props => props.endAngle || `-25deg`});
  }
  ${_.media.desktopNav`
    font-size: 2.75rem;
    width: ${props => props.size || `10rem`};
    height: ${props => props.size || `10rem`};
  `} svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export {
  Section,
  Article,
  PadWrapper,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  SmallP,
  StyledMarkup,
  SocialLink,
  LogoWrapperFixedTopRight,
  FullPageBgWrapper,
  NavItem,
  StyledButton,
  GridWrapper,
  ProportionWrapper,
  ModalWrapper,
  ModalContentWrapper,
  CloseButton,
  BuyButton,
  LozengeButton,
  LozengeLink
};

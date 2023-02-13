import React from "react";
import styled from "styled-components";

const Text = styled.p`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${(props) => (props.fontWeigth ? props.fontWeight : "400px")};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : "inherit")};
  leter-spacing: ${(props) =>
    props.leterSpacing ? props.leterSpacing : "1px"};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : "none"};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "inherit")};
`;
export default Text;

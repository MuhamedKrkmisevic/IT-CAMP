import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  border: 2px solid pink ${(props) => props.borderColor};
  color: ${(props) => (props.primary ? "pink" : "white")};
  background-color: ${(props) => (props.primary ? "white" : "pink")};
  padding: 20px;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`;

export default PrimaryButton;

import React from "react";
import "./App.css";
import GridCmp from "./components/Grid/Grid";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import StyledButton from "./components/StyledButton/StyledButton";
import StyledDiv from "./components/StyledDiv/StyledDiv";

const App = () => {
  return (
    <>
      <PrimaryButton opacity={145}>Primary Button</PrimaryButton>
      <StyledButton innerText="mule" />
      <StyledDiv>divv</StyledDiv>
    </>
  );
};
export default App;

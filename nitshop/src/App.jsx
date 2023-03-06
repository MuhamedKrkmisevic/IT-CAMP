import React from "react";
import "./App.css";
import GridCmp from "./components/Grid/Grid";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import StyledButton from "./components/StyledButton/StyledButton";
import StyledDiv from "./components/StyledDiv/StyledDiv";
import Navigation from "./Templates/Navigation/Navigation";
import Slider from "./components/Slider/Slider";
import ProductsHomePage from "./Templates/ProductsHomePage/ProductsHomePage";

const App = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <ProductsHomePage />
    </>
  );
};
export default App;

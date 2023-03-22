import React from "react";
import "./App.css";
import GridCmp from "./components/Grid/Grid";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import StyledButton from "./components/StyledButton/StyledButton";
import StyledDiv from "./components/StyledDiv/StyledDiv";
import Navigation from "./Templates/Navigation/Navigation";
import Slider from "./components/Slider/Slider";
import ProductsHomePage from "./Templates/ProductsHomePage/ProductsHomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/fonts/Lato-Black.ttf";
import "./assets/fonts/Lato-BlackItalic.ttf";
import "./assets/fonts/Lato-Bold.ttf";
import "./assets/fonts/Lato-BoldItalic.ttf";
import "./assets/fonts/Lato-Italic.ttf";
import "./assets/fonts/Lato-Light.ttf";
import "./assets/fonts/Lato-LightItalic.ttf";
import "./assets/fonts/Lato-Regular.ttf";
import "./assets/fonts/Lato-Thin.ttf";
import "./assets/fonts/Lato-ThinItalic.ttf";
import "./assets/fonts/Montserrat-Black.ttf";
import "./assets/fonts/Montserrat-BlackItalic.ttf";
import "./assets/fonts/Montserrat-Bold.ttf";
import "./assets/fonts/Montserrat-BoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraBold.ttf";
import "./assets/fonts/Montserrat-ExtraLight.ttf";
import HomePageScreen from "./Screens/HomePageScreen.jsx/HomePageScreen";
import ShopScreen from "./Screens/ShopScreen/ShopScreen";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <HomePageScreen />,
    },
    {
      path: "/shop",
      element: <ShopScreen />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />

      {/*  */}
    </>
  );
};
export default App;

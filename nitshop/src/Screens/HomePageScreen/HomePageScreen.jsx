import React from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import Slider from "../../components/Slider/Slider";
import ProductsHomePage from "../../Templates/ProductsHomePage/ProductsHomePage";
import Footer from "../../Templates/Footer/Footer";

const HomePageScreen = () => (
  <>
    <Navigation />
    <Slider />
    <ProductsHomePage />
    <Footer />
  </>
);

export default HomePageScreen;

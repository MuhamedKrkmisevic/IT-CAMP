import React from "react";
import BlogTab from "../../Templates/BlogTab/BlogTab";
import Navigation from "../../Templates/Navigation/Navigation";
import Footer from "../../Templates/Footer/Footer";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import CategoryTab from "../../Templates/CategoryTab/CategoryTab";
import ProductsHomePage from "../../Templates/ProductsHomePage/ProductsHomePage";
import { useContext } from "react";

const BlogScreen = () => {
  const { items } = useContext(CartContext);
  const { user } = useContext(UserContext);

  console.log(items);
  return (
    <>
      <Navigation></Navigation>
      <BlogTab />
      <Footer></Footer>
    </>
  );
};

export default BlogScreen;

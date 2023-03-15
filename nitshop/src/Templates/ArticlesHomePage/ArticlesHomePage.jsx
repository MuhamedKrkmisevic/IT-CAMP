import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const articles = [
  {
    title: "Article 1",
    description: lorem,
    image: article1,
    price: "13$",
  },
  {
    title: "Article 2",
    description: lorem,
    image: article2,
    price: "50$",
  },
  {
    title: "Article 3",
    description: lorem,
    image: article3,
    price: "63$",
  },
  {
    title: "Article 4",
    description: lorem,
    image: article2,
    price: "50$",
  },
  {
    title: "Article 5",
    description: lorem,
    image: article1,
    price: "40$",
  },
  {
    title: "Article 6",
    description: lorem,
    image: article3,
    price: "55$",
  },
];

const ArticlesHomePage = () => {
  // Postaviti funkcije koje ce izlistavati artikle
  return (
    <SimplifiedDiv style={{}}>
      <Grid container direction="row" spacing={3}>
        {articles.map((article) => {
          return (
            <Grid item md={4} lg={4}>
              <ArticleCard
                title={article.title}
                description={article.description}
                image={article.image}
                price={article.price}
              ></ArticleCard>
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;

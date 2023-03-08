import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors } from "../../util/theme";
import AddIcon from "@mui/icons-material/Add";
import Text from "../../components/Text/Text";

const categories = [
  {
    name: "SportsWaer",
    active: false,
  },
  {
    name: "MENS",
    active: false,
  },
  {
    name: "WOMENS",
    active: false,
  },
  {
    name: "KIDS",
    active: false,
  },
  {
    name: "FASHION",
    active: false,
  },
  {
    name: "HOUSEHOLDS",
    active: false,
  },
  {
    name: "INTERIORS",
    active: false,
  },
  {
    name: "SportsWaer",
    active: false,
  },
];

const subCategory = [
  {
    categoryName: "MENS",
    name: "Nike",
    active: false,
  },
  {
    categoryName: "MENS",
    name: "Adidas",
    active: false,
  },
  {
    categoryName: "WOMENS",
    name: "Nike",
    active: false,
  },
  {
    categoryName: "WOMENS",
    name: "Adidas",
    active: false,
  },
];
const CategoryTab = () => {
  const styles = {
    container: {
      width: "100%",
      border: `0.5px solid ${colors.lightGray} `,

      borderRadius: "2px",
      textAlign: "left",
      padding: "15px 20px",
    },
    categories: {
      padding: "5px 0px",
    },
  };

  return (
    <SimplifiedDiv style={styles.container}>
      {categories.map((cat) => {
        return <Text>{cat.name}</Text>;
      })}
    </SimplifiedDiv>
  );
};

export default CategoryTab;

import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";

import { colors, fontSize } from "../../util/theme";

const ProductsHomePage = () => {
  return (
    <CustomDiv bgColor="white" padding="0px 10%">
      <Grid container direction="row">
        <Grid item sm={4} xs={4} md={4} lg={4} border="solid gray 1px">
          Nesto
        </Grid>

        <Grid item sm={8} xs={8} md={8} lg={8} border="solid gray 1px"></Grid>
      </Grid>
    </CustomDiv>
  );
};

export default ProductsHomePage;

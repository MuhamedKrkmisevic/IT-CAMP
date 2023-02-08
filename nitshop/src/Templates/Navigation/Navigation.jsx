import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";

const Navigation = () => {
  return (
    <Grid container direction="row">
      <CustomDiv padding="0px 20px" border="0px" width="100%">
        <Grid container direction="row"></Grid>
      </CustomDiv>
    </Grid>
  );
};

export default Navigation;
{
  /* <Grid item xs={7} sm={5} md={5} lg={4}>
        <CustomDiv border="2px solid black" width="100%"></CustomDiv>
      </Grid>
      <Grid item xs={0} sm={5} md={5} lg={4}>
        <CustomDiv border="2px solid black" width="100%"></CustomDiv>
      </Grid>
      <Grid item xs={3} sm={2} md={2} lg={4}>
        <CustomDiv border="2px solid black" width="100%"></CustomDiv>
      </Grid> */
}

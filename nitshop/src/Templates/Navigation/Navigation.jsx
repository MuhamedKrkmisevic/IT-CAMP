import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import TopRow from "./TopRow";
import MainBar from "./MainBar";
import LinkBar from "./LinkBar";
import Slider from "../../components/Slider/Slider";

const Navigation = () => {
  return (
    <Grid container direction="row">
      <TopRow />
      <MainBar />
      <LinkBar />
    </Grid>
  );
};

export default Navigation;

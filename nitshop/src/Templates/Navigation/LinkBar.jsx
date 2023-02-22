import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Text from "../../components/Text/Text";

const LinkBar = () => {
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="30px"
      padding="20px 10%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item md={6} lg={6}>
          <CustomDiv
            display="flex"
            gap="20px"
            alignItems="center"
            textAlign="center"
          >
            <text onclick="window.location.href='https://w3docs.com';">
              Home
            </text>

            <text onclick="window.location.href='https://w3docs.com';">
              Shop
            </text>

            <text onclick="window.location.href='https://w3docs.com';">
              Blog
            </text>

            <text onclick="window.location.href='https://w3docs.com';">
              O nama
            </text>

            <text onclick="window.location.href='https://w3docs.com';">
              Kontakt
            </text>
          </CustomDiv>
        </Grid>
        <Grid item md={6} lg={6}>
          <CustomDiv
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            height="100%"
          ></CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default LinkBar;

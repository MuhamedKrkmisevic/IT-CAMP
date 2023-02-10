import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material";

const TopRow = () => {
  return (
    <CustomDiv
      bgColor={colors.secondColor}
      width="50%"
      height="auto"
      padding="0px 5%"
      border="0px"
      display="flex"
      alignItems="center"
    >
      <Grid
        container
        direction="row"
        alignItems="center
      "
      >
        <CustomDiv width="50%" border="0px" bgColor="inherit">
          <PhoneIcon />
          <p>+381637412151</p>
        </CustomDiv>
        <CustomDiv width="50%" border="0px" bgColor="inherit"></CustomDiv>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;

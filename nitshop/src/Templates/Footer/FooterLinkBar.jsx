import React from "react";
import Text from "../../components/Text/Text";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import { colors } from "../../util/theme";

const FooterLinkBar = () => {
  const styles = {
    mainHolder: {
      backgroundColor: colors.secondColor,
    },
  };
  return (
    <SimplifiedDiv>
      <Grid container direction="row">
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text>Service</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text>Quick Shop</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text>Policies</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text>About Shoper</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv>
            <Text></Text>
          </SimplifiedDiv>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default FooterLinkBar;

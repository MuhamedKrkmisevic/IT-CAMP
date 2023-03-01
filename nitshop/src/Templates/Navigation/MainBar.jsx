import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";
import Logo from "../../assets/images/logo.png";
import Text from "../../components/Text/Text";

import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCart";
import LockICon from "@mui/icons-material/Lock";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";

const iconStyle = {
  fontSize: fontSize.medium,
  color: colors.gray,
};

const MainBar = () => {
  const screenWidth = getScreenWidth();

  const rightMenuMargin = screenWidth === "SM" ? "20px 5px" : " 0px";
  const rightMenuJustify = screenWidth === "SM" ? "flex-start" : " flex-end";
  const rightMenuItemsMargin = screenWidth === "SM" ? "0px 5px" : " 0px 10px";
  const RightMenu = () => (
    <CustomDiv
      display="flex"
      alignItems="center"
      justifyContent={rightMenuJustify}
      height="100%"
      width="100%"
      margin={rightMenuMargin}
    >
      <CustomDiv display="flex" margin={rightMenuItemsMargin}>
        <PersonIcon style={iconStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Account
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightMenuItemsMargin}>
        <StarIcon style={iconStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Wishlist
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightMenuItemsMargin}>
        <LocationSearchingIcon style={iconStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Checkout
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightMenuItemsMargin}>
        <ShoppingCartOutlined style={iconStyle} color={colors.gray} />

        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Cart
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin={rightMenuItemsMargin}>
        <LockICon style={iconStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Log In
        </Text>
      </CustomDiv>
    </CustomDiv>
  );
  const alignLogo = screenWidth === "SM" ? "center" : "left";
  const mainDivPadding = screenWidth === "SM" ? "25px 0px" : "20px 10% 10px";
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      padding={mainDivPadding}
      height="auto"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SimplifiedDiv
            style={{
              textAlign: alignLogo,
            }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{
                width: 140,
                height: "auto",
              }}
            />
          </SimplifiedDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <RightMenu />
        </Grid>
        <CustomDiv
          width="100%"
          height="10px"
          borderBottom="0.2px solid #b3b1b1"
        />
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;

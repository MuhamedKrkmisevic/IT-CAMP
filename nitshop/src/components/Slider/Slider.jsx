import Carousel from "../../components/Carousel/Carousel";
import girl1 from "../../assets/images/home/girl1.jpg";
import girl2 from "../../assets/images/home/girl2.jpg";
import girl3 from "../../assets/images/home/girl3.jpg";
import SimplifiedDiv from "../SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import { getScreenWidth } from "../../util/helpers";

const sliders = [
  {
    imgSrc: girl1,
    imgText: "Image Text 1",
  },
  {
    imgSrc: girl2,
    imgText: "Image text 2",
  },
  {
    imgSrc: girl3,
    imgText: "Image text 3",
  },
];
const Slider = () => {
  const deviceWidth = getScreenWidth();

  const setSliderMargin =
    deviceWidth === "SM"
      ? "0px"
      : deviceWidth === "MD"
      ? "0px 10px"
      : "0px 10%";

  const setPaddingTop =
    deviceWidth === "SM"
      ? "0px"
      : deviceWidth === "MD"
      ? "0px 10px"
      : "0px 10%";

  const styles = {
    sliderContainer: {
      width: "100%",
      height: "200px",
      margin: "0px,10%",
      paddingTop: setPaddingTop,
      margin: setSliderMargin,
    },
  };
  return (
    <Grid container direction="row">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <SimplifiedDiv>
          <Carousel data={sliders} />
        </SimplifiedDiv>
      </Grid>
    </Grid>
  );
};

export default Slider;

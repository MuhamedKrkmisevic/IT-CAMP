import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";
import { colors, fontSize } from "../../util/theme";
import Text from "../Text/Text";
import SimplifiedDiv from "../SimplifiedDiv/SimplifiedDiv";

const Carousel = ({ data }) => {
  const styles = {
    carouselText: {
      position: "absolute",
      bottom: 30,
      left: 10,
      right: 10,
    },
  };
  return (
    <SliderCarousel
      width="100%"
      axis="horizontal"
      showIndicators
      showThumbs={false}
      interval={1000}
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      swipeable
    >
      {data.map((d) => (
        <div key={d} style={{ height: "400px" }}>
          <img
            src={d.imgSrc}
            style={{ height: "100%", objectFit: "contain" }}
          />
          <SimplifiedDiv>
            <Text fontSize={fontSize.xLarge} color={colors.gray}>
              {d.imgText}
            </Text>
          </SimplifiedDiv>
        </div>
      ))}
    </SliderCarousel>
  );
};

export default Carousel;

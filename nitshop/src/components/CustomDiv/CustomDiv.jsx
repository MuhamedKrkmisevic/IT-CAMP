// import React, { useState } from "react";

// const CustomDiv = ({ children }) => {
//   return <div>{children}</div>;
// };

// export default CustomDiv;
import { display } from "@mui/system";
import React from "react";

const CustomDiv = ({
  children,
  width,
  height,
  borderRadius,
  border,
  padding,
  margin,
  bgColor,
  justifyContent,
  display,
  justifyItems,
  alignItems,
  alignContent,
  verticalAlign,
  textAlign,
  letterSpacing,
}) => {
  const divWidth = width ? width : 100;
  const divHeight = height ? height : 100;
  const divBR = borderRadius ? borderRadius : 0;
  const divBorder = border ? border : "0px ";
  const divMargin = margin ? margin : 0;
  const divPadding = padding ? padding : 0;
  const backgroundColor = bgColor ? bgColor : "inherit";
  const disp = display ? display : "block";
  const jc = justifyContent ? justifyContent : "flex-start";
  const ji = justifyItems ? justifyItems : "center";
  const ai = alignItems ? alignItems : "center";
  const ac = alignContent ? alignContent : "center";
  const va = verticalAlign ? verticalAlign : "middle";
  const ta = textAlign ? textAlign : "left";
  const ls = letterSpacing ? letterSpacing : "1px";

  return (
    <div
      style={{
        width: divWidth,
        height: divHeight,
        borderRadius: divBR,
        border: divBorder,
        margin: divMargin,
        padding: divPadding,
        backgroundColor: backgroundColor,
        justifyContent: jc,
        justifyItems: ji,
        alignItems: ai,
        alignContent: ac,
        display: disp,
        verticalAlign: va,
        textAlign: ta,
        letterSpacing: ls,
      }}
    >
      {children}
    </div>
  );
};

export default CustomDiv;

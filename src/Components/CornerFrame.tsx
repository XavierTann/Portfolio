import React from "react";
import {
  CornerBottomLeft,
  CornerBottomRight,
  CornerTopLeft,
  CornerTopRight,
} from "../Styles/StyledComponents";

/** Four small corner brackets, positioned absolutely inside a `position: relative` parent. */
const CornerFrame: React.FC = () => (
  <>
    <CornerTopLeft />
    <CornerTopRight />
    <CornerBottomLeft />
    <CornerBottomRight />
  </>
);

export default CornerFrame;

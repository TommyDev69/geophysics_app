import React from "react";
import ReactLoading from "react-loading";

const LoadingComponent = ({ size = 20, color = "white" }) => {
  return (
    <ReactLoading type="spin" color={color} height={size} width={size} />
  );
};

export default LoadingComponent;

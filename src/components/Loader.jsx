import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <InfinitySpin
      visible={true}
      width="200"
      color="#FDDA00"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;

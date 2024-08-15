import React, { useContext } from "react";
import { GlobalInfo } from "./App";
import SuperChild from "./SuperChild";
function Child() {
  const { appColor } = useContext(GlobalInfo);
  console.warn(appColor);
  return (
    <div>
      Child{appColor}
      <SuperChild />
    </div>
  );
}

export default Child;

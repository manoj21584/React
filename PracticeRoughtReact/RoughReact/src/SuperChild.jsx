import React, { useContext } from "react";
import { GlobalInfo } from "./App";
function SuperChild() {
  const { appColor, getDay } = useContext(GlobalInfo);
  const day = "Thrusday";

  return (
    <div>
      SuperChild{appColor}
      <button className="btn btn-success" onClick={() => getDay(day)}>
        click me
      </button>
    </div>
  );
}

export default SuperChild;

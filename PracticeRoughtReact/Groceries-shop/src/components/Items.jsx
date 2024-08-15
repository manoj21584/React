import React from "react";

function Items({ shopItem, handleBuy }) {
  return (
    <div className="d-flex justify-content-between align-items-center w-100">
      <span>{shopItem}</span>
      <button className="btn btn-success btn-sm ml-2" onClick={handleBuy}>
        Buy
      </button>
    </div>
  );
}

export default Items;

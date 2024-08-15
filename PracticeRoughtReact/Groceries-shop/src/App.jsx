import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShopeName from "./components/ShopeName";
import Items from "./components/Items";
import InputShopItems from "./components/InputShopItems";

function App() {
  const [shopItems, setShopItems] = useState([
    "Salad",
    "Rice",
    "Roti",
    "Bhindi",
  ]);

  const handleInput = (value) => {
    setShopItems([...shopItems, value]);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 p-4 rounded shadow bg-light">
          <ShopeName />
          <InputShopItems handleInput={handleInput} />
          <ul className="list-group mt-3">
            {shopItems.map((item, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                <Items
                  shopItem={item}
                  handleBuy={() => console.log(`${item} is clicked`)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

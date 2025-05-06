import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

function MenuItems(props) {
  const item = props.item;
  return <li>{item}</li>;
}

function Navmenu(props) {
  const list = props.menuitems;
  const updatedList = list.map((listItems) => {
    return <MenuItems key={listItems.toString()} item={listItems} />;
  });

  return <ul>{updatedList}</ul>;
}

const menuItems = [1, 2, 3, 4, 5, 7];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  // <React.StrictMode>
  //   <Navmenu menuitems={menuItems} />
  // </React.StrictMode>
);

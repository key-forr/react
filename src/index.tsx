import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

export type UsersType = Array<[number, number]>;
const users: UsersType = [
  //1000000 users
  [20, 40],
  [1, 2],
  [10, 23],
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App users={users} />);

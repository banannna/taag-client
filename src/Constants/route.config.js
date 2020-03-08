import React from "react";
import Home from "../Views/home";
import Boards from "../Views/boards";
import Board from "../Views/board";

export default [
  {
    path: "/",
    component: () => <Home />,
    exact: true,
  },
  {
    path: "/board/:id",
    component: () => <Board />,
  },
  {
    path: "/boards",
    component: () => <Boards />,
  }
];

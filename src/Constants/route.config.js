import React from "react";
import Home from "../Views/home";
import Boards from "../Views/boards";
import Board from "../Views/board";
import { DEFAULT_NOT_AUTHED_URL } from "../config";

export default [
  {
    path: "/",
    component: <Home />,
    isGuarded: false,
    exact: true
  },
  {
    path: "/home",
    component: <Home />,
    isGuarded: false
  },
  {
    path: "/board/:id",
    component: <Board />,
    isGuarded: true,
    fallback: DEFAULT_NOT_AUTHED_URL
  },
  {
    path: "/boards",
    component: <Boards />,
    isGuarded: true,
    fallback: DEFAULT_NOT_AUTHED_URL
  }
];

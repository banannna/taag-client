import React from "react";
import Home from "../Views/home";
import Boards from "../Views/boards";

export default [
  {
    path: "/",
    component: () => <Home />,
    exact: true,
  },
//   {
//     path: "/board/:id",
//     component: () => <HomeView />,
//   },
  {
    path: "/boards",
    component: () => <Boards />,
  }
];

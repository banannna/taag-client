import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Card from "../Components/Boards/Card";
import { Grid } from "@primer/components";

export default function Boards() {
  return (
    <div>
      <Navbar path="boards" />
      <Grid gridTemplateColumns="repeat(4, auto)" gridGap="36px" padding="36px">
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

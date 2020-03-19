import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Card from "../Components/Boards/Card";
import { Grid } from "@primer/components";

const Boards = () => {
  return (
    <div>
      <Navbar path="boards" />
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p>Your Boards</p>
        <Grid gridTemplateColumns="repeat(4, auto)" gridGap="36px">
          <Card boardId="adfgffd" />
          <Card boardId="adfggfd" />
          <Card boardId="adfggfd" />
          <Card boardId="adfggfd" />
          <Card boardId="addfgfd" />
          <Card boardId="adefgfd" />
        </Grid>
      </div>
    </div>
  );
};

export default Boards;

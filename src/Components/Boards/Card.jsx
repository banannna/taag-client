import React from "react";
import { Heading, BorderBox } from "@primer/components";

export default function Navbar(props) {
  const { path } = props;
  return (
    <BorderBox height="200px">
      <Heading mb={2} fontSize={24} fontWeight="bold" color="white">
        {path}
      </Heading>
    </BorderBox>
  );
}

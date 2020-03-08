import React from "react";
import { Heading, Box } from "@primer/components";
import history from "../../Utils/history";

export default function Navbar(props) {
  const signout = () => {
    history.push(`/boards`);
  };

  const { path } = props;
  return (
    <Box bg="#24292e" padding="12px 36px">
      <Heading mb={2} fontSize={20} fontWeight="bold" color="white">
        {path}
      </Heading>
    </Box>
  );
}

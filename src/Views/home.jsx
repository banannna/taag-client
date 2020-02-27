import React from "react";
import history from "../Utils/history";
import {
  Heading,
  Box,
  BorderBox,
  Flex,
  Text,
  ButtonOutline
} from "@primer/components";

export default function Home() {
  const signin = () => {
    history.push(`/boards`);
  };

  return (
    <Box bg="black" height={722}>
      <Flex alignItems="center" justifyContent="center">
        <BorderBox bg="white" width={600} margin={64} padding={24}>
          <Heading mb={2} fontWeight="bold">
            taag
          </Heading>
          <Text mb={2} fontWeight="bold">
            sign in to taag to get a graph view of github issues!
          </Text>
          <br />
          <ButtonOutline onClick={signin}>signin with github</ButtonOutline>
        </BorderBox>
      </Flex>
    </Box>
  );
}

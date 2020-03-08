import React from "react";
import history from "../Utils/history";
import {
  Heading,
  Box,
  BorderBox,
  Flex,
  ButtonOutline
} from "@primer/components";

export default function Home() {
  const signin = () => {
    history.push(`/boards`);
  };

  return (
    <Box bg="black" height="100vh">
      <Flex alignItems="center" justifyContent="center">
        <BorderBox
          bg="white"
          width={500}
          margin={64}
          padding={48}
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Heading mb={2} fontWeight="bold">
              taag
            </Heading>
            <br />
            <Box height={400} width={400}></Box>
            <br />
            <ButtonOutline onClick={signin}>signin with github</ButtonOutline>
          </Flex>
        </BorderBox>
      </Flex>
    </Box>
  );
}

import React, { useEffect } from "react";
import history from "../Utils/history";
import { CLIENT_ID } from "../config";
import { userSignin } from "../services/userService";
import {
  Heading,
  Box,
  BorderBox,
  Flex,
  ButtonOutline
} from "@primer/components";
const qs = require("query-string");

export default function Home(props) {
  const signin = code => {
    userSignin(code);
  };

  useEffect(() => {
    const code = qs.parse(history.location.search, { ignoreQueryPrefix: true })
      .code;
    code && signin(code);
  }, [props]);

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
            <ButtonOutline
              as="a"
              href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`}
            >
              signin with github
            </ButtonOutline>
          </Flex>
        </BorderBox>
      </Flex>
    </Box>
  );
}

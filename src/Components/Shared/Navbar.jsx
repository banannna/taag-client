import React from "react";
import { Heading, Flex, Box, Dropdown } from "@primer/components";
import { signOut } from "../../services/authService";

const Navbar = props => {
  const { path } = props;
  return (
    <Box bg="#24292e" padding="12px 36px">
      <Flex justifyContent="space-between">
        <Heading mb={2} fontSize={20} fontWeight="bold" color="white">
          {path}
        </Heading>
        <Dropdown title="user">
          <Dropdown.Menu direction="sw">
            <Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Flex>
    </Box>
  );
};

export default Navbar;

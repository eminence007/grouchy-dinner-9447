import { Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Logo = (props) => {
  return <Image width={"240px"} alt={"nav logo"} src={"new-logo-footer.png"} />;
};

const AuthNav = () => {
  return (
    <Box>
      {" "}
      <Flex
        bg={useColorModeValue("gray.800", "gray.900")}
        color={useColorModeValue("white", "gray.200")}
        minH={"40px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        mb={10}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          maxW={"xl"}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          {/* This is for LOGO */}
          <Logo />
          {/* This is for LOGO */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default AuthNav;

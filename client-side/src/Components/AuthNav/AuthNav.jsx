import { Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthNav = () => {
  const navigate = useNavigate();
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
          <Image
            width={"240px"}
            alt={"nav logo"}
            src={"new-logo-footer.png"}
            onClick={() => navigate(`/`)}
            cursor="pointer"
          />
          {/* This is for LOGO */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default AuthNav;

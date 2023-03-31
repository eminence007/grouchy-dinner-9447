import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

export default function CallToAction() {
  return (
    <Container mb={10} bg={"#262a3b"} maxW={"full"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          color={"white"}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          One place{" "}
          <Text as={"span"} color={"red.400"}>
            Food Diary
          </Text>
        </Heading>
        <Text color={"white"} maxW={"3xl"}>
          Find out if you're getting the vitamins and minerals you need with our
          food diary app
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            borderRadius={10}
            size={"lg"}
            width={"270px"}
            height={"60px"}
            fontWeight={"normal"}
            fontSize={"xl"}
            colorScheme={"red"}
            bg={"red.400"}
            _hover={{ bg: "red.500" }}
          >
            Sign Up - It's Free!
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

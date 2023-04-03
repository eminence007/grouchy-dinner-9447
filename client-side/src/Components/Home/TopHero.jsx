import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  AspectRatio,
} from "@chakra-ui/react";

export default function TopHero() {
  return (
    <Container mt={10} borderBottom="1px" borderColor="gray.200" maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        pb={{ base: 15, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack justify={"space-between"} flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              justifyContent={"start"}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Eat Smarter,
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              Live Better!
            </Text>
          </Heading>
          <Text fontSize={"25px"}>
            Track your diet, exercise, and health data.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              as={"a"}
              href={"/signup"}
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
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <AspectRatio maxW="610px" ratio={2}>
              <iframe
                title="embed-video"
                src="https://www.youtube.com/embed/R49fLnhMhIE"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

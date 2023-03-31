import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function ReviewSection() {
  return (
    <Box
      borderBottom="1px"
      borderColor="gray.200"
      bg={useColorModeValue("#fafbff", "gray.700")}
    >
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Fit Fuel Reviews</Heading>
          {/* <Text>We have been working with clients around the world</Text> */}
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial maxW={"50%"}>
            <TestimonialContent>
              <TestimonialHeading>
                A great all-in-one health app!
              </TestimonialHeading>
              <TestimonialText>
                After leaving SparkPeople, I came here. I love that it is
                Indian, includes fasting, can import recipes, gives me macro
                details, and more. This is my daily tracking app.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://avatars.githubusercontent.com/u/110287987?v=4"}
              name={"Vibhor Sharma"}
              title={"CEO at Fit & Fine Gyms"}
            />
          </Testimonial>
          <Testimonial maxW={"50%"}>
            <TestimonialContent>
              <TestimonialHeading>
                Everyone should be using Fit Fuel.
              </TestimonialHeading>
              <TestimonialText>
                Awesome. Getting direct feedback when you track your food really
                opens your eyes to what you're putting in your body. The ability
                to track macros, micros, and calories is perfect.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://avatars.githubusercontent.com/u/99542364?v=4"}
              name={"Aakash"}
              title={"Director at Supernova Nutritions"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}

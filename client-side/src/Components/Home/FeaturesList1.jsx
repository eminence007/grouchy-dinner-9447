import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function FeaturesList1() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"xl"} textAlign={"center"}>
        <Heading
          fontSize={{ lg: "5xl", base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
        >
          Develop healthy habits
        </Heading>
        <Text maxW={"lg"} fontSize={{ lg: "xl", base: "sm", sm: "lg" }}>
          Count your calories, ensure you're meeting nutrient targets, and see
          your progress over time.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Track up to 84 nutrients and other compounds"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Log your meals and track all your macro and micronutrients."
            }
            href={"#"}
          />
          <Card
            heading={"Log meals, exercise and health metrics"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Plus, you can create custom foods, recipes, exercises and metrics."
            }
            href={"#"}
          />
          <Card
            heading={"Get valuable health reports and charts"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={"Learn how nutrients and metrics correlate over time."}
            href={"#"}
          />
          <Card
            heading={"Custom diet settings"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Set weight, macro and nutrient targets to meet your goals."
            }
            href={"#"}
          />
          <Card
            heading={"Fasting timer"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Track your intermittent fasts and see their effect over time."
            }
            href={"#"}
          />
          <Card
            heading={"Diet support"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Whether you’re Keto, Vegan, or on one recommended by your doctor."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}

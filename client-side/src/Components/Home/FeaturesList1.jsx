import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcManager,
  FcAlarmClock,
  FcAddDatabase,
  FcIpad,
  FcComboChart,
  FcEngineering,
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
      <Stack align={"center"} spacing={2}>
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
    <Box mt={"80px"} p={4}>
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

      <SimpleGrid
        margin={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"7xl"}
        mt={12}
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={6}
      >
        <GridItem
          // alignItems={"center"}
          // justifyContent={"center"}
          textAlign={"center"}
          // p={"5"}
        >
          <Card
            heading={"Track up to 84 nutrients and other compounds"}
            icon={<Icon as={FcAddDatabase} w={20} h={20} />}
            description={
              "Log your meals and track all your macro and micronutrients."
            }
            href={"#"}
          />{" "}
        </GridItem>
        <GridItem>
          {" "}
          <Card
            heading={"Log meals, exercise and health metrics"}
            icon={<Icon as={FcIpad} w={20} h={20} />}
            description={
              "Plus, you can create custom foods, recipes, exercises and metrics."
            }
            href={"#"}
          />
        </GridItem>
        <GridItem>
          {" "}
          <Card
            heading={"Get valuable health reports and charts"}
            icon={<Icon as={FcComboChart} w={20} h={20} />}
            description={"Learn how nutrients and metrics correlate over time."}
            href={"#"}
          />{" "}
        </GridItem>
        <GridItem>
          <Card
            heading={"Custom diet settings"}
            icon={<Icon as={FcEngineering} w={20} h={20} />}
            description={
              "Set weight, macro and nutrient targets to meet your goals."
            }
            href={"#"}
          />{" "}
        </GridItem>
        <GridItem>
          {" "}
          <Card
            heading={"Fasting timer"}
            icon={<Icon as={FcAlarmClock} w={20} h={20} />}
            description={
              "Track your intermittent fasts and see their effect over time."
            }
            href={"#"}
          />{" "}
        </GridItem>

        <GridItem>
          {" "}
          <Card
            heading={"Diet support"}
            icon={<Icon as={FcManager} w={20} h={20} />}
            description={
              "Whether you’re Keto, Vegan, or on one recommended by your doctor."
            }
            href={"#"}
          />{" "}
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

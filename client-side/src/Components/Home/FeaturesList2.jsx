import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { FcApproval } from "react-icons/fc";
import { ReactElement } from "react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontSize="2xl" fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
};

export default function FeaturesList2() {
  return (
    <Container mt={12} maxW={"7xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1.png"}
            objectFit={"cover"}
          />
        </Flex>
        <Flex pt={12} gap={2} direction="column" spacing={10}>
          <Stack mb={5}>
            <Heading>Discover your nutrition!</Heading>
            <Text color={"gray.600"} fontSize={"lg"}>
              Fit Fuel encourages you to not just count your calories but to
              focus on your nutrition as a whole.
            </Text>
          </Stack>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Box>
              {" "}
              <Feature
                icon={<Icon as={FcApproval} color={"green.100"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "yellow.900")}
                text={"Over 6 million users"}
              />
              <Text pl={10} color={"gray.500"} fontSize={"md"}>
                Join the community to get tips and inspiration from other users
                on our forums and Facebook group.
              </Text>
            </Box>

            <Box>
              <Feature
                icon={<Icon as={FcApproval} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Accurate nutrition data"}
              />
              <Text pl={10} color={"gray.500"} fontSize={"md"}>
                Be confident that the food you log has the correct nutrition
                data. We verify every food submission for accuracy.
              </Text>
            </Box>

            <Box>
              <Feature
                icon={<Icon as={FcApproval} color={"green.100"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "purple.900")}
                text={"Data privacy & security"}
              />
              <Text pl={10} color={"gray.500"} fontSize={"md"}>
                We don't sell your account data to third parties and take the
                security of our users' accounts seriously.
              </Text>
            </Box>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

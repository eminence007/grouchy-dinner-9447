import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";

import { ReactElement } from "react";

export default function ProCTA() {
  return (
    <Container maxW={"full"} py={20} px={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 5 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={500}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            lineHeight={"110%"}
          >
            FIT FUEL{" "}
            <Text as={"span"} color={"green.400"}>
              PRO
            </Text>
          </Heading>
          <Stack>
            <Text fontWeight={500} fontSize={"2xl"} maxW={"xl"}>
              For Health Professionals
            </Text>

            <Text color={"gray.700"} fontSize={"lg"} maxW={"lg"}>
              Client diet management for nutritionists, dietitians, research
              teams, schools, and hospitals.
            </Text>
          </Stack>

          <Stack spacing={6} direction={"row"}>
            <Button
              borderRadius={10}
              border="1px solid black"
              px={6}
              size={"lg"}
              width={"230px"}
              colorScheme={"black"}
              color={"black"}
              bg={"white"}
              _hover={{ bg: "black", color: "white" }}
            >
              Learn About Pro
            </Button>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"https://cdn1.cronometer.com/webflow/pro-hero-1-1.png"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

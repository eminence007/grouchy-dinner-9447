import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";

export default function Testimonials() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <Grid
        border={"1px solid red"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        mb={5}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Medium length title
            </chakra.h2>
            <Button colorScheme="green" size="md">
              Call To Action
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Provide your customers a story they would enjoy keeping in mind
              the objectives of your website. Pay special attention to the tone
              of voice.
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>

      <Grid
        border={"1px solid red"}
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        marginTop={5}
      >
        <GridItem>
          <Flex>
            <chakra.p>
              Provide your customers a story they would enjoy keeping in mind
              the objectives of your website. Pay special attention to the tone
              of voice.
            </chakra.p>
          </Flex>
        </GridItem>

        <GridItem colSpan={1}>
          <VStack alignItems="flex-end" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Medium length title
            </chakra.h2>
            <Button colorScheme="green" size="md">
              Call To Action
            </Button>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

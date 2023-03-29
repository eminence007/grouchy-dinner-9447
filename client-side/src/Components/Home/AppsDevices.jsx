import { Box, Heading, Stack, Container, Image } from "@chakra-ui/react";

export default function AppsDevices() {
  return (
    <Box>
      <Container maxW={"7xl"} py={5} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Sync with apps and devices</Heading>
        </Stack>
        <Stack spacing={0} align={"center"}>
          <Image
            alt={"Apps-Devices"}
            fit={"cover"}
            align={"center"}
            w={"75%"}
            h={"100%"}
            src={
              "https://cdn1.cronometer.com/webflow/cronometer-devices-3-p-1600.png"
            }
          />
        </Stack>
      </Container>
    </Box>
  );
}

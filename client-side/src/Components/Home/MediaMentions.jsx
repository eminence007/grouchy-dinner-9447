import { Box, Flex, Image, Text } from "@chakra-ui/react";

const MediaMentions = () => {
  return (
    <Box borderBottom="1px" borderColor="gray.200" bg="#fafbff" py={10}>
      <Box maxW="container.xl" mx="auto">
        <Box textAlign="center" mb={8}>
          <Text color={"gray.700"} fontSize={"lg"}>
            As seen in
          </Text>
        </Box>
        <Flex justifyContent="space-around">
          <Box>
            <Image
              src="https://cdn1.cronometer.com/webflow/media-mention-2.svg"
              w="206px"
              alt="Cronometer Media Mention"
              mb={4}
            />
          </Box>
          <Box>
            <Image
              src="https://cdn1.cronometer.com/webflow/media-mention-1.svg"
              w="182px"
              alt="Cronometer Media Mention"
              mb={4}
            />
          </Box>
          <Box>
            <Image
              src="https://cdn1.cronometer.com/webflow/media-mention-3.svg"
              w="194px"
              alt="Cronometer Media Mention"
              mb={4}
            />
          </Box>
        </Flex>

        <Flex justifyContent="center" mt={10}>
          <Box>
            <Box textAlign="center" mb={4}>
            <Text color={"gray.700"} fontSize={"lg"}>Available on Web, iOS and Android.</Text>
            </Box>
            <Flex direction={"row"} justifyContent="center">
              <Box mr={4}>
                {/* <a
                  href="https://apps.apple.com/ca/app/cronometer-nutrition-tracker/id1145935738"
                  target="_blank"
                > */}
                <Image
                  src="https://cdn1.cronometer.com/webflow/ios-icon.svg"
                  alt="Apple App Store Icon"
                  w="175px"
                />
                {/* </a> */}
              </Box>
              <Box>
                {/* <a
                  href="https://play.google.com/store/apps/details?id=com.cronometer.android.gold&amp;hl=en_CA"
                  target="_blank"
                > */}
                <Image
                  src="https://cdn1.cronometer.com/webflow/android-icon.svg"
                  alt="Google Play App Store Icon"
                  w="175px"
                />
                {/* </a> */}
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MediaMentions;

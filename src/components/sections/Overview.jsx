import { Text, Box, Image, useBreakpointValue } from "@chakra-ui/react";

const Overview = () => {
  const showImage = useBreakpointValue({ base: false, md: true, lg: true, xl: true, "2xl": true, 770: false });
  const flexDir = useBreakpointValue({ base: "column", md: "row" });
  const align = useBreakpointValue({ base: "center", md: "stretch" });

  return (
    <Box display="flex" flexDirection={flexDir} align={align} my='inherit' ms={7} alignItems="center" height='100%'>
      {showImage && (
        <Box mt={[4, null, 0]} ml={[0, null, 4]} mb={-4}>
          <Image
            src="webdev.svg"
            boxSize='650px'
            alt="overview photos"
          />
        </Box>
      )}

      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        justifyContent="center"
        my={2}
        ml={showImage ? 7 : 0}
      >
        <Text fontSize={["3xl", "4xl"]} fontWeight="bold" mb={4} textAlign="center">
          Who am I?
        </Text>
        <Text fontSize={["xl", "2xl"]} lineHeight="tall">
          I am a highly motivated Shopify Developer with a passion 
          for innovative software solutions. I have solid experience in 
          customizing themes , building Shopify apps and managing online stores for clients.
        </Text>
      </Box>
    </Box>
  );
};

export default Overview;
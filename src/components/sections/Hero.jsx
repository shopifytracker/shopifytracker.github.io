import { Box, Flex, Center, VStack, Spacer, Stack, Text, Image } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import GithubIcon from "../ui/GithubIcon";
import LinkedinIcon from "../ui/LinkedinIcon";

const Hero = () => {
  const textSize = ['2xl', '2xl', '3xl'];

  return (
    <Flex direction={['column', 'column', 'row']} align={['center', 'stretch', 'stretch']}>
      <Box p={5} ms={5}>
        <Center h="full">
          <VStack spacing={4} align={['center', 'center', 'stretch']}>
            <Box>
              <GithubIcon />
              {/* <LinkedinIcon /> */}
            </Box>
            <Box>
              <Text fontSize={textSize} textAlign={['center', 'center', 'left']}>
                Hello, I&apos;m <Text as="span" fontWeight="bold" >Serhii Buzurnyi</Text><br />
                <TypeAnimation
                  sequence={[
                    'Shopify Developer',
                    1000,
                    'Front-end Developer',
                    1000,
                    'UX/UI Designer',
                    1000,
                  ]}
                  speed={20}
                  wrapper="span"
                  repeat={Infinity}
                />
              </Text>
            </Box>
          </VStack>
        </Center>
      </Box>

      <Spacer />

      <Stack direction={['column', 'column', 'row']} spacing={8} align={['center', 'center', 'flex-start']} mt={[8, 8, 0]}>
        <Box>
          <Image src="/hero.png"  alt="landing image" style={{position: 'relative', zIndex: 1}} />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Hero;


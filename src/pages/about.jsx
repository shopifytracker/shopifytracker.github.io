import { Stack, Text, Image, Box, Button, HStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import BuyMeACoffeeButton from "@/components/ui/BuyMeACoffeeButton";
import Stacks from "../components/sections/Stacks"

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Stack direction={{ base: "column", md: "row" }} spacing={8} alignItems={{ md: "center" }} justifyContent={{ base: "center", md: "flex-start" }} me={3} className="h-full">
        <Image src="/hero.png" width="30%" height="30%" ms={4} me={5} alt="about image" borderRadius="lg" boxShadow="lg" />
        <Box ms={5} textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={5}>
            About Me
          </Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} mt={4} mb={{ base: 3, md: 0 }}>
            Welcome to my portfolio website! I&apos;m Serhii Buzurnyi, a Shopify Developer from Ukraine. 
            I graduated from National University of Ukraine. With expertise in PHP, JavaScript, Python, and Liquid, I continuously learn and stay updated in the field. 
            My goal is to create innovative Ecommerce website that offer exceptional user experiences. I love to builing beautiful and highly ordered webstore in the world.
          </Text>
          <HStack mt={8}>
            {/* <Button
              as="a"
              href="/Resume.pdf"
              download="CV_JasonAllen.pdf"
              colorScheme={colorMode === "light" ? "blue" : "teal"}
              size="lg"
            >
              Download Resume
            </Button> */}
            <BuyMeACoffeeButton />
          </HStack>
        </Box>
      </Stack>
      <Stacks />
    </>

  );
};

export default About;

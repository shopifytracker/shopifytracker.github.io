import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

const TECH_STACK = [
  {
    title: "Front End",
    items: [
      { src: "/html5.svg", alt: "HTML5 Logo" },
      { src: "/css3.svg", alt: "CSS3 Logo" },
      { src: "/javascript.svg", alt: "JavaScript Logo" },
      { src: "/react.svg", alt: "React Logo" },
      { src: "/bootstrap.svg", alt: "Bootstrap Logo" },
      { src: "/tailwind.svg", alt: "Tailwind CSS Logo" },
    ],
  },
  {
    title: "Back End",
    items: [
      { src: "/php.svg", alt: "PHP logo" },
      { src: "/laravel.svg", alt: "Laravel logo" },
      { src: "/nodejs.svg", alt: "Node.js logo" },
      { src: "/python.svg", alt: "Python logo" },
      { src: "/firebase.svg", alt: "Firebase logo" },
      { src: "/mysql.svg", alt: "MySQL logo" },
    ],
  },
  {
    title: "Main Stack",
    items: [
      { src: "/shopify.svg", alt: "Shopify logo" },
      { src: "/shopify-plus.svg", alt: "shopifyplus logo" },
      { src: "/figma.svg", alt: "Figma logo" },
      { src: "/photoshop.svg", alt: "Photoshop logo" },
      { src: "/postman.svg", alt: "Postman logo" },
      { src: "/git.svg", alt: "Git logo" },
    ],
  },
];

const Stacks = () => {
  return (
    <Box mx={3}>
      <Heading fontSize="4xl" textAlign="center" mt={5}>
        Tech Stack
      </Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
        my={8}
      >
        {TECH_STACK.map(({ title, items }) => (
          <Box key={title} textAlign="center" border="1px" p={6} borderRadius="md">
            <Text fontSize="2xl" p={5} mb={3}>
              {title}
            </Text>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap={6}>
              {items.map(({ src, alt }) => (
                <Image
                  key={src}
                  src={src}
                  boxSize={["50px", "70px", "100px"]}
                  alt={alt}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Stacks;

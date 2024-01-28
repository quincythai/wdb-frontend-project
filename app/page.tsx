import { Box, Image, Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box position="relative" width="100vw" height="100vh">
      <Image
        src="backgroundhd.jpeg"
        alt="Photo of Taylor Swift Eras Tour"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <Box
        display="flex"
        flexDirection="column"
        position="absolute"
        top="10%"
        left="6%"
        textAlign="left"
        color="white"
        padding="4"
      >
        <Box maxWidth="500px">
          <Heading
            as="h1"
            fontSize={90}
            fontWeight="bold"
            textShadow="5px 5px black"
          >
            Taylor Swift on Tour
          </Heading>
          <Button
            marginTop="4"
            width="50%"
            backgroundColor="black"
            color="white"
            fontSize={20}
            padding={6}
          >
            See Her Perform
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

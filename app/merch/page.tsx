import React from "react";
import { Heading, SimpleGrid, Box, Image } from "@chakra-ui/react";
import Socials from "../components/Socials";

export default function Merch() {
  return (
    <>
      <Box padding={10} position="relative" width="100vw" height="100vh">
        <Heading as="h1" size="3xl">
          Merch
        </Heading>
        <SimpleGrid columns={5} spacing={10} mt={8}>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/1.webp" alt="merch photo" />
          </Box>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/2.webp" alt="merch photo" />
          </Box>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/3.webp" alt="merch photo" />
          </Box>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/4.webp" alt="merch photo" />
          </Box>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/5.webp" alt="merch photo" />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={5} spacing={10} mt={8}>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/6.webp" alt="merch photo" />
          </Box>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/7.webp" alt="merch photo" />
          </Box>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/8.webp" alt="merch photo" />
          </Box>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/9.webp" alt="merch photo" />
          </Box>
          <Box border="gray solid" borderRadius={8}>
            <Image src="/10.webp" alt="merch photo" />
          </Box>
        </SimpleGrid>
        <Box position="absolute" bottom="10%" right="10%">
          <Socials />
        </Box>
      </Box>
    </>
  );
}

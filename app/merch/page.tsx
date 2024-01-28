import React from "react";
import { Heading, SimpleGrid, Box, Image } from "@chakra-ui/react";
import Socials from "../components/Socials";
import MerchItem from "../components/MerchItem";

export default function Merch() {
  return (
    <>
      <Box padding={10} position="relative" width="100vw" height="100vh">
        <Heading as="h1" fontSize={90}>
          Merch
        </Heading>
        <SimpleGrid columns={5} spacing={10} mt={8}>
          <MerchItem source="1.webp" />
          <MerchItem source="2.webp" />
          <MerchItem source="3.webp" />
          <MerchItem source="4.webp" />
          <MerchItem source="5.webp" />
        </SimpleGrid>
        <SimpleGrid columns={5} spacing={10} mt={8}>
          <MerchItem source="6.webp" />
          <MerchItem source="7.webp" />
          <MerchItem source="8.webp" />
          <MerchItem source="9.webp" />
          <MerchItem source="10.webp" />
        </SimpleGrid>
        <Box position="absolute" bottom="10%" right="10%">
          <Socials />
        </Box>
      </Box>
    </>
  );
}

"use client";

import { Box, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export default function MerchItem({ source }: { source: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      border="gray solid"
      borderRadius={8}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position="relative"
    >
      <Image src={source} alt="merch photo" />
      {isHovered && (
        <Box
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          textAlign="center"
          background="rgba(217, 155, 255, 0.8)"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          paddingY={4}
          transition="background 0.3s ease-in-out"
        >
          <Box>
            <Text fontWeight="bold" fontSize="3xl">
              Shirt
            </Text>
            <Text>Available in S, M, L, XL</Text>
            <Text>$40.99 USD</Text>
          </Box>
          <Button
            cursor="pointer"
            backgroundColor="black"
            fontWeight="bold"
            color="white"
            padding={4}
          >
            Buy
          </Button>
        </Box>
      )}
    </Box>
  );
}

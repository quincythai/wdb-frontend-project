"use client";

import React from "react";
import { Link } from "@chakra-ui/next-js";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bgColor="black"
      paddingY={1}
      paddingX={6}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex justifyContent="space-between" alignItems="center" gap={2}>
        <Link href="/">
          <Image
            src="/star-shine-svgrepo-com.svg"
            alt="Star icon"
            cursor="pointer"
            color="white"
            boxSize={12}
            filter="invert(100%)"
          ></Image>
        </Link>

        <Link
          href="/"
          color="white"
          fontWeight="bolder"
          fontSize={24}
          _hover={{ textDecoration: "none", opacity: 0.8 }}
          transition="opacity 0.3s ease-in-out"
        >
          Taylor Swift
        </Link>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" gap={4}>
        <Link
          href="/merch"
          color={"white"}
          _hover={{ textDecoration: "none", opacity: 0.8 }}
          transition="opacity 0.3s ease-in-out"
        >
          Merch
        </Link>
        <Link
          href="/events"
          color={"white"}
          _hover={{ textDecoration: "none", opacity: 0.8 }}
          transition="opacity 0.3s ease-in-out"
        >
          Events
        </Link>
      </Flex>
    </Flex>
  );
}

import React from "react";
import { Flex, Image } from "@chakra-ui/react";

export default function Socials() {
  return (
    <>
      <Flex gap={2}>
        <Image src="instagram-svgrepo-com.svg" alt="instagram logo" width={8} />
        <Image src="twitter-svgrepo-com.svg" alt="twitter" width={8} />
        <Image src="facebook-svgrepo-com.svg" alt="facebook" width={8} />
      </Flex>
    </>
  );
}

import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function MerchItem({ source }: { source: string }) {
  return (
    <Box border="gray solid" borderRadius={8}>
      <Image src={source} alt="merch photo" />
    </Box>
  );
}

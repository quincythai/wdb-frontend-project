import { Flex, Box } from "@chakra-ui/react";
import React from "react";

const EventItem: React.FC<{
  eventName: string;
  day: string;
  time: string;
}> = ({ eventName, day, time }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="lightgray"
      padding={8}
      marginBottom={4}
      border="solid gray"
      fontSize={24}
    >
      <Box fontWeight="bold">{eventName}</Box>
      <Box>
        {day} &bull; {time}
      </Box>
    </Flex>
  );
};

export default EventItem;

"use client";

import React from "react";
import { Heading, Box, Flex, filter } from "@chakra-ui/react";
import Socials from "../components/Socials";
import Searchbar from "../components/Searchbar";
import TimeDropdown from "../components/TimeDropdown";
import DayDropdown from "../components/DayDropdown";
import eventsData from "./EventData";
import EventItem from "../components/EventItem";
import { useState } from "react";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box padding={10} position="relative" width="100vw" height="100vh">
        <Heading as="h1" fontSize={90}>
          Events
        </Heading>
        <Flex
          gap={4}
          justifyContent="space-between"
          alignItems="center"
          marginTop={16}
          marginBottom={4}
        >
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <TimeDropdown />
          <DayDropdown />
        </Flex>
        <Box>
          {filteredEvents.map((event) => (
            <EventItem
              key={event.id}
              eventName={event.name}
              day={event.day}
              time={event.time}
            />
          ))}
        </Box>
        <Box position="absolute" bottom="10%" right="10%">
          <Socials />
        </Box>
      </Box>
    </>
  );
}

import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import Socials from "../components/Socials";
import Searchbar from "../components/Searchbar";
import TimeDropdown from "../components/TimeDropdown";
import DayDropdown from "../components/DayDropdown";
import eventsData from "./EventData";
import EventItem from "../components/EventItem";

export default function Page() {
  return (
    <>
      <Box padding={10} position="relative" width="100vw" height="100vh">
        <Heading as="h1" fontSize={90}>
          Events
        </Heading>
        <Searchbar />
        <TimeDropdown />
        <DayDropdown />
        <Box>
          {eventsData.map((event) => (
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

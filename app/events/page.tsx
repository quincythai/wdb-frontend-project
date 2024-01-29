"use client";

import React from "react";
import { Heading, Box, Flex } from "@chakra-ui/react";
import Socials from "../components/Socials";
import Searchbar from "../components/Searchbar";
import TimeDropdown from "../components/TimeDropdown";
import DayDropdown from "../components/DayDropdown";
import eventsData from "./EventData";
import EventItem from "../components/EventItem";
import { useState, useEffect } from "react";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [dayOptions, setDayOptions] = useState<string[]>([]);
  const [timeOptions, setTimeOptions] = useState<string[]>([]);

  useEffect(() => {
    const uniqueTimes = Array.from(
      new Set(eventsData.map((event) => event.time))
    );
    const uniqueDays = Array.from(
      new Set(eventsData.map((event) => event.day))
    );
    setTimeOptions(uniqueTimes);
    setDayOptions(uniqueDays);
  }, []);

  const filteredEvents = eventsData.filter((event) => {
    const isMatchingSearch = event.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isMatchingTime = !selectedTime || event.time === selectedTime;
    const isMatchingDay = !selectedDay || event.day === selectedDay;

    return isMatchingSearch && isMatchingTime && isMatchingDay;
  });

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
          <TimeDropdown
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            timeOptions={timeOptions}
          />
          <DayDropdown
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            dayOptions={dayOptions}
          />
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

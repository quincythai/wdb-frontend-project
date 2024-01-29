import React from "react";
import { Box, Select } from "@chakra-ui/react";

interface TimeDropdownProps {
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
  timeOptions: string[];
}

const TimeDropdown: React.FC<TimeDropdownProps> = ({
  selectedTime,
  setSelectedTime,
  timeOptions,
}) => {
  return (
    <Box>
      <Select
        id="time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        placeholder="Time"
        border="gray solid"
        borderRadius="0"
        color="gray.600"
        size="lg"
      >
        <option value="">All Times</option>
        {timeOptions.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default TimeDropdown;

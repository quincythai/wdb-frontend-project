import React from "react";
import { Select } from "@chakra-ui/react";

interface DayDropdownProps {
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
  dayOptions: string[];
}

const DayDropdown: React.FC<DayDropdownProps> = ({
  selectedDay,
  setSelectedDay,
  dayOptions,
}) => {
  return (
    <Select
      id="day"
      value={selectedDay}
      onChange={(e) => setSelectedDay(e.target.value)}
      placeholder="Day"
      border="gray solid"
      borderRadius="0"
      color="gray.600"
      size="lg"
    >
      <option value="">All days</option>
      {dayOptions.map((day) => (
        <option key={day} value={day}>
          {day}
        </option>
      ))}
    </Select>
  );
};

export default DayDropdown;

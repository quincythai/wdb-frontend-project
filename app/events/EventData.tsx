export interface EventData {
  id: number;
  name: string;
  day: string;
  time: string;
}

const eventsData: EventData[] = [
  {
    id: 1,
    name: "Kansas City Chiefs vs Buffalo Bills",
    day: "Sunday",
    time: "3:30PM",
  },
  {
    id: 2,
    name: "Miami Dolphins vs Kansas City Chiefs",
    day: "Saturday",
    time: "4:50PM",
  },
  {
    id: 3,
    name: "Kansas City Chiefs vs Los Angeles Chargers",
    day: "Monday",
    time: "4:00PM",
  },
];

export default eventsData;

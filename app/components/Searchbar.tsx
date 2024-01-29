import React from "react";
import { Box, Input } from "@chakra-ui/react";

interface SearchbarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: React.FC<SearchbarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box>
      <Input
        placeholder="Search... "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        border="gray solid"
        borderRadius="0"
        color="gray.600"
        size="lg"
      />
    </Box>
  );
};

export default Searchbar;

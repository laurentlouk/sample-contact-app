import React, { useState, useEffect } from "react";
import { StyledInput } from "./styles/Input.styled";
import { useDebounce } from "../hooks/useDebounce";

type SearchProps = {
  onSearch: (query: string) => void;
};

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounce(value.toLowerCase(), 300);

  useEffect(() => {
    onSearch(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- this is intentional
  }, [debouncedValue]);

  return (
    <StyledInput
      type="text"
      placeholder="Search for users..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

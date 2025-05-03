import { StyledInput } from "./styles/Input.styled";

import type { FC } from "react";

type SearchProps = {
  disabled?: boolean;
  value: string;
  setValue: (value: string) => void;
};

export const Search: FC<SearchProps> = ({ value = "", setValue, disabled }) => {
  return (
    <StyledInput
      type="text"
      placeholder="Search users... (username, name, phone, or email)"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={disabled}
    />
  );
};

import { Icon } from "./Icon";
import { StyledButton, StyledButtonProps } from "./styles/Button.styled";

import type { IconProps } from "./Icon";

type IconButtonProps = {
  name: IconProps["name"];
  size?: number;
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps;

export const IconButton = ({
  name,
  size = 24,
  color,
  ...props
}: IconButtonProps) => {
  return (
    <StyledButton {...props}>
      <Icon name={name} size={size} color={color} />
    </StyledButton>
  );
};

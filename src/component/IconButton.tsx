import { Icon } from "./Icon";
import { StyledButton, StyledButtonProps } from "./styles/Button.styled";

import type { IconProps } from "./Icon";

type IconButtonProps = {
  name: IconProps["name"];
  size?: number;
  color?: string;
  variant?: StyledButtonProps["$variant"];
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps;

export const IconButton = ({
  name,
  size = 24,
  color,
  variant = "primary",
  ...props
}: IconButtonProps) => {
  return (
    <StyledButton $variant={variant} {...props}>
      <Icon name={name} size={size} color={color} />
    </StyledButton>
  );
};

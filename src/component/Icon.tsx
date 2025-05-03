import { ComponentProps } from "react";

import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";
import * as Io from "react-icons/io5";
import * as Hi from "react-icons/hi";

type IconLibraries = typeof Fa & typeof Md & typeof Io & typeof Hi;
type IconName = keyof IconLibraries;

export interface IconProps extends Omit<ComponentProps<"svg">, "name" | "ref"> {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 24, ...rest }: IconProps) {
  const icons: IconLibraries = { ...Fa, ...Md, ...Io, ...Hi };

  const IconComponent = icons[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Have you imported its pack?`);
    return null;
  }

  return <IconComponent size={size} {...rest} />;
}

import { ComponentProps } from "react";

import type { FC } from "react";

import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";
import * as Io from "react-icons/io5";
import * as Hi from "react-icons/hi";

const icons = { ...Fa, ...Md, ...Io, ...Hi };

type IconLibraries = typeof icons;
type IconName = keyof IconLibraries;

export type IconProps = Omit<ComponentProps<"svg">, "name" | "ref"> & {
  name: IconName;
  size?: number;
};

export const Icon: FC<IconProps> = ({ name, size = 24, ...rest }) => {
  const IconComponent = icons[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Have you imported its pack?`);
    return null;
  }
  return <IconComponent size={size} {...rest} />;
};

import { type IconBaseProps } from "react-icons";
import { createElement } from "react";
import { cn } from "@/shared/lib/utils";
import { icons } from "@/shared/icon";

interface IconProps extends Omit<IconBaseProps, "name"> {
  name: keyof typeof icons;
}

export const Icon = ({ name, className, ...rest }: IconProps) => {
  const iconItem = icons[name];
  return createElement(iconItem.icon, {
    className: cn(iconItem.baseClassName, className),
    ...rest,
  });
};

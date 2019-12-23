import NextLink, { LinkProps } from "next/link";
import * as React from "react";
import { ThemedColor } from "../../entities/ColorTheme";
import TextThemeContext from "./TextThemeContext";

export interface Props extends LinkProps {
  children?: React.ReactNode;
}

export default function Link({
  href,
  as,
  passHref = true,
  children,
  ...props
}: Props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <NextLink href={href} as={as} passHref={passHref}>
      <a
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <TextThemeContext.Provider
          value={{
            color: isHovered
              ? ThemedColor.primaryForeground
              : ThemedColor.primaryForeground,
            underline: isHovered
          }}
        >
          {children}
        </TextThemeContext.Provider>
      </a>
    </NextLink>
  );
}

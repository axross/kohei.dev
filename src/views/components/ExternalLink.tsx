import * as React from "react";
import TextThemeContext from "./TextThemeContext";

export interface Props extends React.Attributes {
  href: string;
  children?: React.ReactNode;
}

export default function ExternalLink({ children, ...props }: Props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <TextThemeContext.Provider
        value={{
          isLink: true,
          isLinkHovered: isHovered
        }}
      >
        {children}
      </TextThemeContext.Provider>
    </a>
  );
}
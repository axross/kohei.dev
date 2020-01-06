import styled from "@emotion/styled";
import * as React from "react";
import { DARK_COLOR, LIGHT_COLOR } from "../../constant/color";
import { MOBILE, DARK_MODE } from "../../constant/mediaQuery";
import ThemedColor from "../../types/ThemedColor";
import MarkdownTextThemeContext from "./MarkdownTextThemeContext";

interface Props extends React.Attributes {
  value: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Blockquote({ children, ...props }: Props) {
  return (
    <Root {...props}>
      <MarkdownTextThemeContext.Provider value={{ isEmphasized: true }}>
        {children}
      </MarkdownTextThemeContext.Provider>
    </Root>
  );
}

const Root = styled.blockquote`
  box-sizing: border-box;
  width: calc(100% + 32px * 2);
  margin-block-start: 32px;
  margin-block-end: 32px;
  margin-inline-start: -32px;
  margin-inline-end: -32px;
  padding-block-start: 32px;
  padding-block-end: 32px;
  padding-inline-start: 32px;
  padding-inline-end: 32px;
  border-radius: 8px;
  background-color: ${LIGHT_COLOR[ThemedColor.accentBackground]};
  line-height: 1.333;
  overflow-x: scroll;

  ${MOBILE} {
    width: 100vw;
    margin-block-start: 24px;
    margin-block-end: 24px;
    margin-inline-start: calc(-1 * (100vw - 100%) / 2);
    margin-inline-end: calc(-1 * (100vw - 100%) / 2);
    padding-block-start: 20px;
    padding-block-end: 20px;
    padding-inline-start: calc((100vw - 100%) / 2);
    padding-inline-end: calc((100vw - 100%) / 2);
    border-radius: 0;
  }

  ${DARK_MODE} {
    background-color: ${DARK_COLOR[ThemedColor.accentBackground]};
  }

  &:first-child {
    margin-block-start: 0;
  }

  &:last-child {
    margin-block-end: 0;
  }
`;
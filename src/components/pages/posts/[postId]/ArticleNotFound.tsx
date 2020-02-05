import styled from "@emotion/styled";
import * as React from "react";
import RawText, { TextLineSize, TextSize, ThemedColor } from "../../../RawText";
import LocaleContext from "../../../../contexts/LocaleContext";
import { NOT_FOUND_DESCRIPTION, NOT_FOUND_TITLE } from "../../../../dictionary";

interface Props extends React.Attributes {
  className?: string;
}

export default function ArticleNotFound(props: Props) {
  const { currentLocale } = React.useContext(LocaleContext);

  return (
    <section {...props}>
      <Title color={ThemedColor.emphasizedForeground} size={TextSize.giantic} bold>
        {NOT_FOUND_TITLE[currentLocale]}
      </Title>

      <StatusCode color={ThemedColor.secondaryForeground}>
        404 Not Found
      </StatusCode>

      <Description lineSize={TextLineSize.large}>
        {NOT_FOUND_DESCRIPTION[currentLocale]}
      </Description>
    </section>
  );
}

const Title = styled(RawText)`
  display: block;
`

const Description = styled(RawText)`
  display: block;
  margin-block-start: 32px;
`;

const StatusCode = styled(RawText)`
  display: block;
  margin-block-start: 32px;
`;
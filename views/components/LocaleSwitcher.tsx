import styled from "@emotion/styled";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DEFAULT_LOCALE } from "../../constant/locale";
import { MEDIA_MOBILE } from "../constant/mediaquery";
import {
  MOBILE_MINOR_PADDING_SIZE,
  LAPTOP_MINOR_PADDING_SIZE
} from "../constant/size";
import useTranslation from "../hooks/useTranslation";
import LinkText from "./LinkText";
import Text, { TextColor, TextSize } from "./Text";
import useCurrentLocale from "../hooks/useCurrentLocale";
import useAvailableLocales from "../hooks/useAvailableLocales";
import useSelfUrl from "../hooks/useSelfUrl";

interface Props extends React.Attributes {
  className?: string;
}

function LocaleSwitcher(props: Props) {
  const router = useRouter();
  const url = useSelfUrl();
  const availableLocales = useAvailableLocales();
  const currentLocale = useCurrentLocale();
  const translation = useTranslation();

  return (
    <span {...props}>
      {availableLocales.map(locale => {
        const localeUrl = new URL(url.href);

        if (locale === DEFAULT_LOCALE) {
          localeUrl.searchParams.delete("hl");
        } else {
          localeUrl.searchParams.set("hl", locale);
        }

        return locale === currentLocale ? (
          <TextItem
            color={TextColor.secondary}
            size={TextSize.caption}
            key={locale}
          >
            {translation[`language.${locale}`]()}
          </TextItem>
        ) : (
          <Link
            href={router.pathname + localeUrl.search}
            as={localeUrl}
            replace
            passHref
            key={locale}
          >
            <LinkItem size={TextSize.caption}>
              {translation[`language.${locale}`]()}
            </LinkItem>
          </Link>
        );
      })}
    </span>
  );
}

const TextItem = styled(Text)`
  margin-inline-start: ${LAPTOP_MINOR_PADDING_SIZE}px;

  &:first-child {
    margin-inline-start: 0;
  }

  ${MEDIA_MOBILE} {
    margin-inline-start: ${MOBILE_MINOR_PADDING_SIZE}px;
  }
`;

const LinkItem = TextItem.withComponent(LinkText);

export default LocaleSwitcher;

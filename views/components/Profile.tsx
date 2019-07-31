import styled from "@emotion/styled";
import * as React from "react";
import { MEDIA_MOBILE } from "../constant/mediaquery";
import {
  MOBILE_MINOR_PADDING_SIZE,
  MOBILE_PADDING_SIZE,
  LAPTOP_MINOR_PADDING_SIZE,
  LAPTOP_PADDING_SIZE,
  LAPTOP_SECTION_MARGIN_SIZE
} from "../constant/size";
import useMyself from "../hooks/useMyself";
import KeepLocaleLink from "./KeepLocaleLink";
import LinkText from "./LinkText";
import Text, { TextColor, TextSize } from "./Text";
import { Facebook, GitHub, IconProps, Instagram, LinkedIn } from "./icons";

interface Props extends React.Attributes {
  className?: string;
}

function Profile(props: Props) {
  const myself = useMyself();

  return (
    <Root {...props}>
      <KeepLocaleLink href="/" as="/" prefetch passHref>
        <Myself>
          <Image src="/static/profile.jpg" alt={myself.name} />

          <Name>
            <Text size={TextSize.subtitle2} color={TextColor.highlight} bold>
              {myself.name}
            </Text>
          </Name>
        </Myself>
      </KeepLocaleLink>

      <LinkList>
        {myself.socialLinks.map(item => {
          const IconComponent = LinkIcon.withComponent(
            ICON_COMPONENTS[item.name]
          );

          return (
            <LinkListItem key={item.name}>
              <IconComponent fill={TextColor.secondary} />

              <LinkText href={item.url}>{item.username}</LinkText>
            </LinkListItem>
          );
        })}
      </LinkList>
    </Root>
  );
}

const ICON_COMPONENTS: Record<string, React.ComponentType<IconProps>> = {
  GitHub: GitHub,
  LinkedIn: LinkedIn,
  Facebook: Facebook,
  Instagram: Instagram
};

const Root = styled.div`
  display: grid;
  grid-template-areas: "myself" "links";
  justify-items: center;
`;

const Myself = styled.a`
  display: grid;
  grid-template-areas: "image" "name";
  row-gap: ${LAPTOP_MINOR_PADDING_SIZE}px;
  justify-items: center;
  margin-block-start: -${LAPTOP_MINOR_PADDING_SIZE}px;
  margin-block-end: -${LAPTOP_MINOR_PADDING_SIZE}px;
  margin-inline-start: -${LAPTOP_MINOR_PADDING_SIZE}px;
  margin-inline-end: -${LAPTOP_MINOR_PADDING_SIZE}px;
  padding-block-start: ${LAPTOP_MINOR_PADDING_SIZE}px;
  padding-block-end: ${LAPTOP_MINOR_PADDING_SIZE}px;
  padding-inline-start: ${LAPTOP_MINOR_PADDING_SIZE}px;
  padding-inline-end: ${LAPTOP_MINOR_PADDING_SIZE}px;

  ${MEDIA_MOBILE} {
    grid-template-columns: 64px 1fr;
    grid-template-areas: "image name";
    column-gap: ${MOBILE_MINOR_PADDING_SIZE}px;
    row-gap: 0;
    align-items: center;
    margin-block-start: -${MOBILE_PADDING_SIZE}px;
    margin-block-end: -${MOBILE_PADDING_SIZE}px;
    margin-inline-start: -${MOBILE_PADDING_SIZE}px;
    margin-inline-end: -${MOBILE_PADDING_SIZE}px;
    padding-block-start: ${MOBILE_PADDING_SIZE}px;
    padding-block-end: ${MOBILE_PADDING_SIZE}px;
    padding-inline-start: ${MOBILE_PADDING_SIZE}px;
    padding-inline-end: ${MOBILE_PADDING_SIZE}px;
  }
`;

const Image = styled.img`
  grid-area: image;
  border-radius: 50%;
  width: 128px;
  height: 128px;
  transition: width 150ms ease-in-out 0ms, height 150ms ease-in-out 0ms;

  ${MEDIA_MOBILE} {
    width: 48px;
    height: 48px;
  }
`;

const Name = styled.h1`
  grid-area: name;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-block-start: ${LAPTOP_SECTION_MARGIN_SIZE}px;

  ${MEDIA_MOBILE} {
    display: none;
  }
`;

const LinkListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  column-gap: ${LAPTOP_MINOR_PADDING_SIZE}px;
  margin-block-start: ${LAPTOP_PADDING_SIZE}px;

  &:first-of-type {
    margin-block-start: 0;
  }
`;

const LinkIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export default Profile;

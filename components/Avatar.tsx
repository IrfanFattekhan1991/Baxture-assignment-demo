"use client";
import { Anchor, Avatar, Tooltip, rem } from "@mantine/core";
import { FC } from "react";

interface ITextProps {
  name: string;
  size?: any;
  url?: string;
}
const AppAvatar: FC<ITextProps> = ({ url, name }) => {
  return (
    <Tooltip label={name}>
      <Anchor href={url}>
        <Avatar
          size={rem(120)}
          flex={1}
          src={`${process.env.THUMBMNAIL_URL}=${name}`}
        />
      </Anchor>
    </Tooltip>
  );
};
export default AppAvatar;

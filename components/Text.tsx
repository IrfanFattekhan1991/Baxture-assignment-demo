"use client";
import { FC } from "react";
import { Anchor } from "@mantine/core";
import colors from "../utils/colors";

interface ITextProps {
  label: string;
  Icon: any;
  url: string;
}
const AnchorText: FC<ITextProps> = ({ label, Icon, url }) => {
  return (
    <div style={{ lineHeight: 0 }}>
      {Icon}
      <Anchor
        pl={5}
        lh={0}
        href={url}
        target="_blank"
        style={{ color: colors.light }}
        underline="hover"
      >
        {label}
      </Anchor>
    </div>
  );
};
export default AnchorText;

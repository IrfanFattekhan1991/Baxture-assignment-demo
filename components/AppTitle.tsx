"use client";
import { Title } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";
import { FC } from "react";

interface ITextProps {
  title: string;
  size: any;
  isToggle:boolean
}
const AppTitle: FC<ITextProps> = ({ title, size,isToggle }) => {
  return (
    <Title fw={500} order={size}>
      {title}  { isToggle &&  <IconStar size={16} />}
    </Title>
  );
};
export default AppTitle;

"use client";
import { Button } from "@mantine/core";
import { FC } from "react";

interface IButtonProps {
  variant?: string;
  onClick: (user: any) => void;
  Icon: any;
  label: string;
}
const AppButton: FC<IButtonProps> = ({ variant, onClick, Icon, label }) => {
  const handleClick = (user: any) => {
    onClick(user);
  };
  return (
    <Button
      fullWidth
      variant={variant}
      style={{ margin: 2.4 }}
      leftSection={Icon}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

export default AppButton;

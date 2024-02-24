"use client";

import { Grid } from "@mantine/core";

import { FC, useState } from "react";
import ListItem from "./ListItem/ListItem";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

interface IButtonProps {
  data: User[];
}

const Users: FC<IButtonProps> = ({ data }) => {
  const [list, setList] = useState<User[]>(data);
  const [toggleList, setToggleList] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  const handleDeleteClick = (user: User) => {
    setList(list.filter((item: User) => item.id !== user.id));
  };

  const handleFollowClick = (index: number) => {
    toggleList[index] = !toggleList[index];
    setToggleList((oldArray: any) => [...oldArray]);
  };

  return (
    <Grid p={20}>
      {list.map((user: User, index: number) => (
        <Grid.Col
          key={user.id.toString()}
          span={{ base: 12, sm: 6, md: 6, lg: 3 }}
        >
          <ListItem
            user={user}
            index={index}
            isToggle={toggleList[index]}
            handleDeleteClick={() => handleDeleteClick(user)}
            handleFollowClick={() => handleFollowClick(index)}
          />

          
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default Users;

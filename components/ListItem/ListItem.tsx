"use client";
import { FC } from "react";
import {
  IconTrash,
  IconAt,
  IconUserPlus,
  IconUserMinus,
  IconPhoneCall,
  IconWorld,
} from "@tabler/icons-react";
import { Card, Grid, Group } from "@mantine/core";
import AppAvatar from "../Avatar";
import AppTitle from "../AppTitle";
import AnchorText from "../Text";
import AppButton from "../Button";
import colors from "../../utils/colors";
import { User } from "../Users";
import styles from './styles.module.css'


interface ITextProps {
 user:User,
 isToggle:boolean,
 handleDeleteClick:(user:User)=>void,
 handleFollowClick:(index:number)=>void,
 index:number
}
const ListItem: FC<ITextProps> = ({user,index,isToggle,handleFollowClick,handleDeleteClick }) => {
  return (
  
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      display={'flex'}
      className={styles.card}
    >
      <Card.Section style={{ margin: "auto" }}>
        <AppAvatar name={user.name} url={user.website} />
      </Card.Section>

      <Card.Section mt={17}  style={{ margin: "auto" }}>
        <AppTitle title={user.name} size={4} isToggle={isToggle} />
      </Card.Section>

      <Group
        className={styles.details}
        mt={11}
        mb="xs"
        
      >
        <AnchorText
          Icon={<IconAt color={colors.light} size={16} />}
          label={user.email}
          url={`mailto:${user.email}?body=My custom mail body`}
        />

        <AnchorText
          Icon={<IconPhoneCall  color={colors.light} size={16} />}
          label={user.phone}
          url={`tel:${user.phone}`}
        />

        <AnchorText
          Icon={<IconWorld  color={colors.light} size={16} />}
          label={user.website}
          url={user.website}
        />
      </Group>

      <div
        className={styles.btnContainer}
      >
        <AppButton
          label={isToggle ? "Unfollow" : "Follow"}
          Icon={
           isToggle ? (
              <IconUserMinus size={14} />
            ) : (
              <IconUserPlus size={14} />
            )
          }
          onClick={() => handleFollowClick(index)}
          variant={isToggle ? "default" : ""}
        />
        <AppButton
          label="Delete"
          Icon={<IconTrash size={14} />}
          onClick={() => handleDeleteClick(user)}
          variant="outline"
        />
      </div>
    </Card>
 

  );
};
export default ListItem;

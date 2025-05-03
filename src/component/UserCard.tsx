import { memo } from "react";
import {
  Avatar,
  Card,
  Username,
  UserName,
  SkeletonAvatar,
  SkeletonText,
} from "./styles/UserCard.styled";
import { Flex } from "./styles/Flex.styled";
import { UserInformation } from "./UserInformation";

import type { FC } from "react";
import { User } from "../hooks/useUsers";

type UserCardProps = {
  isLoading?: boolean;
  user?: User;
};

const UserCardComponent: FC<UserCardProps> = ({ isLoading, user }) => {
  if (isLoading || !user) {
    return (
      <Card>
        <Flex $direction="column" $gap="10px" $justify="center" $align="center">
          <SkeletonAvatar />
          <SkeletonText $width="60%" />
          <SkeletonText $width="40%" />
          <SkeletonText $width="80%" height="50px" />
        </Flex>
      </Card>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Card>
      <Flex $direction="column" $gap="20px" $justify="center" $align="center">
        <Avatar
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={user.name}
        />
        <UserName>{user.name}</UserName>
        <Username>@{user.username}</Username>
        <UserInformation {...user} />
      </Flex>
    </Card>
  );
};

export const UserCard = memo(UserCardComponent);

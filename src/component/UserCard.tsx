import { Flex } from "./styles/Flex.styled";
import {
  Avatar,
  Card,
  Username,
  UserName,
  SkeletonAvatar,
  SkeletonText,
} from "./styles/UserCard.styled";
import type { FC } from "react";

type UserCardProps = {
  isLoading?: boolean;
  user: {
    id: number;
    name: string;
    username: string;
  };
};

export const UserCard: FC<UserCardProps> = ({ isLoading, user }) => {
  if (isLoading) {
    return (
      <Card>
        <Flex $direction="column" $gap="10px" $justify="center" $align="center">
          <SkeletonAvatar />
          <SkeletonText style={{ width: "60%" }} />
          <SkeletonText style={{ width: "40%" }} />
        </Flex>
      </Card>
    );
  }

  return (
    <Card>
      <Flex $direction="column" $gap="10px" $justify="center" $align="center">
        <Avatar
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={user.name}
        />
        <UserName>{user.name}</UserName>
        <Username>@{user.username}</Username>
      </Flex>
    </Card>
  );
};

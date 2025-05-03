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
        <SkeletonAvatar />
        <SkeletonText style={{ width: "60%" }} />
        <SkeletonText style={{ width: "40%" }} />
      </Card>
    );
  }

  return (
    <Card>
      <Avatar src={`https://i.pravatar.cc/150?u=${user.id}`} alt={user.name} />
      <UserName>{user.name}</UserName>
      <Username>@{user.username}</Username>
    </Card>
  );
};

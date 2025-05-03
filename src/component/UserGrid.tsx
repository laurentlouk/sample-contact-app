import { useMemo } from "react";
import { User } from "../hooks/useUsers";
import { Grid } from "./styles/Grid.styled";
import { UserCard } from "./UserCard";

interface Props {
  users: User[];
  loading: boolean;
  error: string | null;
}

export default function UserGrid({ users, loading, error }: Props) {
  const loadingCards = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => (
        <UserCard
          key={i}
          isLoading
          user={{ id: i, name: "loading", username: "loading" }}
        />
      )),
    []
  );

  if (error) return <p>{error}</p>;

  return (
    <Grid>
      {loading
        ? loadingCards
        : users.map((user, index) => (
            <UserCard key={`user.id-${index}`} user={user} />
          ))}
    </Grid>
  );
}

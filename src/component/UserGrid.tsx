import { User } from "../hooks/useUsers";
import { Grid } from "./styles/Grid.styled";
import { UserCard } from "./UserCard";

type Props = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const LoadingCards = () => (
  <>
    {Array.from({ length: 10 }, (_, index) => (
      <UserCard key={`user.id-${index}`} isLoading />
    ))}
  </>
);

export default function UserGrid({ users, loading, error }: Props) {
  if (error) return <p>{error}</p>;

  return (
    <Grid>
      {loading ? (
        <LoadingCards />
      ) : (
        users.map((user, index) => (
          <UserCard key={`user.id-${index}`} user={user} />
        ))
      )}
    </Grid>
  );
}

import { useMemo, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { Search } from "./Search";
import UserGrid from "./UserGrid";

export const UserSearchGrid = () => {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState<string>("");

  const filteredUsers = useMemo(
    () =>
      search
        ? users.filter((user) => user.name.toLowerCase().includes(search))
        : users,
    [users, search]
  );

  return (
    <>
      <Search
        onSearch={(text: string) => {
          setSearch(text);
        }}
        disabled={loading}
      />
      <UserGrid users={filteredUsers} loading={loading} error={error} />
    </>
  );
};

import { useMemo, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import { Search } from "./Search";
import UserGrid from "./UserGrid";
import { useDebounce } from "../hooks/useDebounce";

export const UserSearchGrid = () => {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search);

  const filteredUsers = useMemo(
    () =>
      debouncedSearch
        ? users.filter((user) =>
            user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
          )
        : users,
    [users, debouncedSearch]
  );

  return (
    <>
      <Search value={search} setValue={setSearch} disabled={loading} />
      <UserGrid users={filteredUsers} loading={loading} error={error} />
    </>
  );
};

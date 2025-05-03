import { useMemo, useState } from "react";
import MiniSearch from "minisearch";
import { User, useUsers } from "../hooks/useUsers";
import { Search } from "./Search";
import UserGrid from "./UserGrid";
import { useDebounce } from "../hooks/useDebounce";

export const UserSearchGrid = () => {
  const { users, loading, error } = useUsers();
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search);

  const miniSearch = useMemo(() => {
    const minisearch = new MiniSearch<User>({
      fields: [
        "name",
        "username",
        "email",
        "phone",
        "address.street",
        "address.suite",
        "address.city",
        "address.zipcode",
      ],
      storeFields: ["id", "name", "username"],
      searchOptions: { prefix: true, fuzzy: 0.2 },
    });
    minisearch.addAll(users);
    return minisearch;
  }, [users]);

  const filteredUsers = useMemo<User[]>(() => {
    if (!debouncedSearch) return users;

    const results = miniSearch.search(debouncedSearch);
    // Instead of manually recreating objects, get the original reference
    return results
      .map((result) => users.find((user) => user.id === result.id))
      .filter((user): user is User => user !== undefined);
  }, [users, miniSearch, debouncedSearch]);

  return (
    <>
      <Search value={search} setValue={setSearch} disabled={loading} />
      <UserGrid users={filteredUsers} loading={loading} error={error} />
    </>
  );
};

import { useEffect, useState } from "react";

export type User = {
  id: number;
  name: string;
  username: string;
};

export type UsersResponse = {
  users: User[];
  loading: boolean;
  error: string | null;
};

export const useUsers = (): UsersResponse => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((r) => r.json())
        .then(setUsers)
        .catch(() => setError("Failed to load users"))
        .finally(() => setLoading(false));
    }, 2000); // delay of 2 seconds to show skeletons

    return () => clearTimeout(timeout);
  }, []);

  return { users, loading, error };
};

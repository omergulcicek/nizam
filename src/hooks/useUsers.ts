import { useQuery } from "@tanstack/react-query";

import { get } from "@/lib/api";

import { UserType } from "@/types";

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: ({ signal }) => get<UserType[]>("/users", { signal }),
    select: (data) => data.slice(0, 5)
  });
}

import { useQuery } from '@tanstack/react-query';
import type { User } from '../types/photo.types';
import { axiosInstance } from '../api';
import { API_ROUTES } from '../api.routes';

export function useMe() {
  return useQuery<User>({
    queryKey: [],
    queryFn: async () => {
      const { data: me } = await axiosInstance.get<User>(API_ROUTES.me);
      return me;
    },
  });
}

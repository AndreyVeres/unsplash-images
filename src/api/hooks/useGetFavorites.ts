import { useQuery } from '@tanstack/react-query';

import type { Photo } from '../types/photo.types';
import { API_ROUTES } from '../api.routes';
import { axiosInstance } from '../api';

export function useGetFavorites(username?: string) {
  return useQuery<Photo[]>({
    queryKey: [username],
    queryFn: async () => {
      const { data: favorites } = await axiosInstance.get<Photo[]>(API_ROUTES.favorites(username));
      return favorites;
    },
  });
}

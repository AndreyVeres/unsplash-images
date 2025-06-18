import { useQuery } from '@tanstack/react-query';
import type { Photo } from '../types/photo.types';
import { axiosInstance } from '../api';
import { API_ROUTES } from '../api.routes';

export type RestError = { status: number; data: unknown };

export function useGetRandomPhotos(searchQuery: string) {
  return useQuery<Photo[]>({
    queryKey: [searchQuery],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get<Photo[]>(API_ROUTES.random(8)(searchQuery));
        return data;
      } catch (axiosError) {
        console.log(axiosError);

        throw axiosError;
      }
    },
  });
}

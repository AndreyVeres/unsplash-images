import { useQuery } from '@tanstack/react-query';
import type { Photo } from '../types/photo.types';
import { axiosInstance } from '../api';
import { API_ROUTES } from '../api.routes';

export function useGetPhotoById(id: string) {
  return useQuery<Photo>({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Photo>(API_ROUTES.getById(id));
      return data;
    },
  });
}

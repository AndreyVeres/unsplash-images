import { useMutation, type MutationOptions } from '@tanstack/react-query';
import { axiosInstance } from '../api';
import { API_ROUTES } from '../api.routes';

export type MutationParams<T = unknown> = Omit<MutationOptions<T>, 'mutationFn' | 'onSuccess'> & {
  onSuccess: () => void;
};

export function useLikePhoto(id: string, { onSuccess }: MutationParams) {
  return useMutation({
    mutationFn: async () => {
      const result = await axiosInstance.post(API_ROUTES.like(id));
      return result;
    },
    onSuccess,
  });
}

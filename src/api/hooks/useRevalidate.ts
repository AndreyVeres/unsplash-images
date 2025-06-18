import { useQueryClient } from '@tanstack/react-query';

export const useRevalidate = () => {
  const queryClient = useQueryClient();
  const revalidate = async (keys: any[]) => {
    await queryClient.invalidateQueries({ queryKey: keys });
  };

  return revalidate;
};

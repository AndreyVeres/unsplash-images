export const API_ROUTES = {
  random: (count: number) => (searchQuery: string) => `photos/random?count=${count}&query=${searchQuery}`,
  getById: (id: string) => `/photos/${id}`,
  me: '/me',
  favorites: (username?: string) => `/users/${username}/likes`,
  like: (id: string) => `/photos/${id}/like`,
};

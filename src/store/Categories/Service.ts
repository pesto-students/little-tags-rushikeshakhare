export function categoriesService(): Promise<any> {
  const API_ENDPOINT = "https://little-tags-backend.herokuapp.com/categories";
  return fetch(API_ENDPOINT);
}

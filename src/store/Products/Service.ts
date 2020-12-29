import NetworkManager from "../../utilities/NetworkManager/NetworkManager";

export function productsService(): Promise<any> {
  const API_ENDPOINT = "products";
  return NetworkManager.get(API_ENDPOINT);
}

export function productDetailService({ id }: any): Promise<any> {
  const API_ENDPOINT = `products/${id}`;
  return NetworkManager.get(API_ENDPOINT);
}

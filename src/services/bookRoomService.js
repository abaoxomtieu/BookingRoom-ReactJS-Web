import { post } from "../ultils/request";

// export const getProductList = async () => {
//   const result = await get("products");
//   return result;
// };
export const bookRoom = async (options) => {
  const result = await post("book-room", options);
  return result;
};

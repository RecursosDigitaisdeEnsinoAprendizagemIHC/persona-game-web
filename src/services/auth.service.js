import baseApi from "./baseApi";
import Cookies from "universal-cookie";

export const authenticate = async () => {
  const cookies = new Cookies();
  let token = cookies.get("userToken");
  if (!token) {
    const { data } = await baseApi.post("/users");
    token = data;
    cookies.set("userToken", token);
  }
  return token;
};

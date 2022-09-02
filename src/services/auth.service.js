import baseApi from "./baseApi";
import Cookies from "universal-cookie";
import { toast } from 'react-toastify';

export const authenticate = async () => {
  const cookies = new Cookies();
  let token = cookies.get("userToken");
  if (!token) {
    try {
      const { data } = await baseApi.post("/users");
      token = data;
      cookies.set("userToken", token);
      toast.success('Usuário criado com sucesso.')
    } catch (error) {
      toast.error(error.message)
    }
  }
  return token;
};

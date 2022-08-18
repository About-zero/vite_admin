import httpProxy from "@/utils/request";
import { URL } from "@/config";
import { login } from "./models";

/**
 * @deception 登录
 * @param params
 */
export async function gotoLogin<T extends Record<string, any>>(params: {
  userName: string;
  password: string;
}) {
  return await httpProxy<login>({
    url: URL + "/auth/manager_login",
    method: "POST",
    params,
  });
}

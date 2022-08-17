import { defineStore } from "pinia";

interface Info {
  /** 用户姓名 */
  userName: string;
  /** 用户年龄 */
  age?: number;
  /** 用户性别：0：女，1：男 */
  sex?: number;
}
interface userInfo {
  /** 用户信息 */
  info: Info;
  /** 用户token */
  token: string;
  /** 权限 */
  permissions: string;
}
export const userStore = defineStore("user-store", {
  state: (): userInfo => ({
    info: {
      userName: "lxp",
    },
    token: "1111",
    permissions: "admin",
  }),
  getters: {
    /** 获取用户信息 */
    getUserInfo(state) {
      return state;
    },
  },
});

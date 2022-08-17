import { defineStore } from "pinia";

interface AppStore {
  /** 侧边栏折叠状态 */
  siderCollapse: boolean;
}
export const appStore = defineStore("app-store", {
  state: (): AppStore => ({
    siderCollapse: false,
  }),
  actions: {
    /**
     * 设置侧边栏折叠状态
     */
    setSiderCollapse(collapse: boolean) {
      this.siderCollapse = collapse;
    },
    /**
     * 折叠/展开侧边栏
     */
    toggleSiderCollapse() {
      this.siderCollapse = !this.siderCollapse;
    },
  },
});

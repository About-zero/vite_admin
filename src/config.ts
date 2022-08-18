// 环境变量
const ENV = import.meta.env;

// 基础域名
export const BASE_URL = ENV.VITE_BASE_API;

// 基础服务地址
// export const URL = BASE_URL + "/api/v1";
export const URL = 'http://localhost:1337' + "/api/v1";

// 超时时间
export const TIMEOUT = 6000;

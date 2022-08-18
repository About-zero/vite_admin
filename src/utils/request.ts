import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, TIMEOUT } from "@/config";

export interface requestReturnType<T = any> {
  /**
   * @说明 返回code状态码
   */
  code: number;
  /**
   * @结果 数据内容
   */
  data: T;
  /**
   * @提示信息 msg
   */
  msg: string;
}

// 创建axios实例
const instance = axios.create({
  timeout: TIMEOUT,
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    console.log(config, "config");
    // 请求拦截-可以做网络加载开始动作等等
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截
instance.interceptors.response.use(
  (response) => {
    // 响应拦截-可做网络加载完成的动作
    console.log(response, "response");
    return response;
  },
  (error) => {
    console.log(error, "error");
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败";
    }

    // 错误逻辑处理，此处可在页面弹框处理
    return Promise.reject(error.response);
  }
);

// 代理请求
async function httpProxy<T = any>(
  config: AxiosRequestConfig
): Promise<requestReturnType<T>> {
  let resData = await instance(config);
  return resData.data;
}

export default httpProxy;

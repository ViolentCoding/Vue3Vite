/// <reference types="vite/client" />
/* Vite */
// 解决以来报错问题 Could not find a declaration file for module 'vite-plugin-eslint'.
declare module "vite-plugin-eslint";

declare type Recordable<T = any> = Record<string, T>;

declare interface ImportMetaEnv {
  readonly VITE_NODE_ENV: "development" | "production" | "test"; //定义提示信息 数据是只读的无法被修改
  readonly VITE_APP_TITLE: string; //定义页面前缀信息 数据只读
  readonly VITE_API_BASE_URL: string; //定义网络请求公共地址
  readonly VITE_PORT: number; //定义默认端口号
  readonly VITE_OPEN: boolean; //是否自动打开浏览器
  readonly VITE_ROUTER_MODE: "hash" | "history"; // # Optional: hash | history
  //多个变量定义多个...
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

/* __APP_INFO__ */
declare const __APP_INFO__: {
  pkg: {
    name: string;
    version: string;
    dependencies: Recordable<string>;
    devDependencies: Recordable<string>;
  };
  lastBuildTime: string;
};

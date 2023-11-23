import { fileURLToPath, URL } from "node:url";
// import { resolve } from "path"; // 主要用于alias文件路径别名
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";
import viteCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import { wrapperEnv } from "./build/getEnv";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";
import dayjs from "dayjs";

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version }, //项目安装的依赖信息
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"), //项目编译时间
};
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd(); //获取根路径
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  return {
    plugins: [
      visualizer({ open: true }),
      vue(),
      eslintPlugin(),
      createHtmlPlugin({
        inject: {
          data: {
            title: viteEnv.VITE_APP_TITLE,
          },
        },
      }),
    ],
    envPrefix: "VITE_",
    resolve: {
      alias: {
        // 这里是将src目录配置别名为 @ 方便在项目中导入src目录下的文件
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        // "@": resolve(__dirname, './src'),
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    // 引入第三方的配置,强制预构建插件包
    optimizeDeps: {
      include: ["echarts", "axios", "mockjs"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false, // 关闭编译时 字符编码 报错问题
          javascriptEnabled: true,
          // additionalData: `@import "${resolve(__dirname, 'src/assets/css/var.scss')}";`,
          additionalData: `@import "${fileURLToPath(
            new URL("src/assets/css/var.scss", import.meta.url)
          )}";`,
        },
      },
    },
    json: {
      //是否支持从 .json 文件中进行按名导入
      namedExports: true,
      //若设置为 true 导入的json会被转为 export default JSON.parse("..") 会比转译成对象字面量性能更好
      stringify: false,
    },
    //继承自 esbuild 转换选项，最常见的用例是自定义 JSX
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
      jsxInject: `import Vue from 'vue'`,
    },
    // 打包配置
    build: {
      target: "modules", // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
      outDir: "dist", // 指定输出路径
      assetsDir: "assets", // 指定生成静态资源的存放路径
      assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
      cssCodeSplit: true, // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
      sourcemap: false, // 构建后是否生成 source map 文件
      write: true, //设置为 false 来禁用将构建后的文件写入磁盘
      emptyOutDir: true, //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      reportCompressedSize: true, //启用/禁用 gzip 压缩大小报告
      chunkSizeWarningLimit: 500, //chunk 大小警告的限制
      minify: "terser", // 混淆器，terser构建后文件体积更小
      // rollup 配置
      rollupOptions: {
        output: {
          chunkFileNames: "js/[name]-[hash].js", // 引入文件名的名称
          entryFileNames: "js/[name]-[hash].js", // 包的入口文件名称
          assetFileNames: "[ext]/[name]-[hash].[ext]", // 资源文件像 字体，图片等
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
        plugins: [
          viteCompression({
            verbose: true, // 是否在控制台中输出压缩结果
            disable: false,
            threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
            algorithm: "gzip", // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
            ext: ".gz",
            deleteOriginFile: false, // 源文件压缩后是否删除
          }),
        ],
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      }, //去除 console debugger
    },
    // 本地运行配置，及反向代理配置
    server: {
      host: "0.0.0.0", // 指定服务器主机名
      port: viteEnv.VITE_PORT, // 指定服务器端口
      open: viteEnv.VITE_OPEN, // 在服务器启动时自动在浏览器中打开应用程序
      strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
      https: false, // 是否开启 https
      cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
      proxy: {
        // 为开发服务器配置自定义代理规则
        // 选项写法
        "/api": {
          target: "http://192.168.xxx.xxx:xxxx", //代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});

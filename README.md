# vvsMarkdown
Electron+React+七牛云 实现跨平台桌面级应用
# Electron 主进程 - 负责创建窗口，提供原生应用的各种模块
    Electron 渲染进程 - 提供浏览器环境
        React 作为View层完成各种交互
        Node.js 负责本地文件的创建管理，网络文件的下载等
        七牛云对象存储 负责本地文件同步到云端，提供上传下载的服务

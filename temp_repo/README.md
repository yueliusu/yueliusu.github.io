# 个人博客

这是一个基于 Hexo 框架和 Annie 主题搭建的个人博客项目，托管在 GitHub Pages 上。

## 项目特点

- 基于 Hexo 静态博客框架
- 使用 Annie 主题，支持响应式设计
- 支持文章访问量统计
- 支持文章点赞功能
- 支持中英文切换
- 支持图片懒加载
- 支持文章目录导航
- 支持回到顶部功能
- 支持图片预览

## 主题功能

### 页面布局

- 首页文章列表
- 文章归档页
- 分类页面
- 标签页面
- 关于页面
- 图片画廊

### 特色功能

- 支持文章封面图
- 支持代码高亮
- 支持 Markdown 格式
- 支持社交媒体链接
- 支持站点访问统计
- 支持评论系统

## 本地运行

1. 确保已安装 Node.js 环境
2. 安装 Hexo：
```bash
npm install hexo-cli -g
```
3. 克隆项目：
```bash
git clone https://github.com/yueliusu/yueliusu.github.io.git
```
4. 安装依赖：
```bash
cd yueliusu.github.io
npm install
```
5. 本地运行：
```bash
hexo server
```

## 部署

1. 修改 `_config.yml` 中的部署配置：
```yaml
deploy:
  type: git
  repo: https://github.com/yueliusu/yueliusu.github.io
  branch: gh-pages
```

2. 安装部署插件：
```bash
npm install hexo-deployer-git --save
```

3. 生成并部署：
```bash
hexo clean && hexo generate && hexo deploy
```

## 目录结构

```
├── 2024/               # 文章目录
├── about/              # 关于页面
├── archives/           # 归档页面
├── categories/         # 分类页面
├── css/               # 样式文件
├── fancybox/          # 图片预览插件
├── gallery/           # 图片画廊
├── img/               # 图片资源
├── js/                # JavaScript 文件
├── plugin/            # 插件目录
└── tags/              # 标签页面
```

## 主题配置

主题的具体配置可以在 `_config.yml` 文件中进行修改，包括：

- 网站基本信息
- 导航菜单设置
- 社交媒体链接
- 评论系统配置
- 统计功能配置
- 其他自定义设置

## 许可证

本项目基于 MIT 许可证开源。
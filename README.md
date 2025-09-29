# NOTEHUB

**这是一个基于 Nest.js + React 的一个文档笔记的项目旨在学习**

# 🚀 技术栈

- [Nest.js](https://nestjs.com/)
- [React](https://react.dev/)
- [Tiptap](https://tiptap.dev/)

# 📂 项目结构

```
.
├── apps/               # 应用层（前端/后端）
│ ├── client/           # React 前端应用
│ └── server/           # Nest.js 后端应用
├── packages/           # 公共包
│ ├── utils/            # 工具函数库
│ ├── components/       # UI 组件库
│ └── plugins/          # 插件（Tiptap富文本编辑器的插件）
├── scripts/            # packages 公共包的打包脚本
├── package.json        # 根 package.json（仅存放工作区管置）
├── pnpm-workspace.yaml # pnpm 工作区配置
├── tsconfig.json       # 根 TS 配置
├── .eslintrc.json
├── .prettierrc
└── README.md
```

# 📦 环境要求

- `node >= 20.19.5`
- `npm  >= 10.8.2`
- `pnpm >= 10.15.0`

# 🔧 安装

- `pnpm install` (安装所有依赖包，在项目根目录下执行)
- `pnpm -Dw install <dependency>` (在项目根目录下安装依赖包)
- `pnpm --filter <package-name> add <dependency>` (在指定包下安装依赖包)

# 🏃‍♂️ 常用命令

# 🛠️ 代码规范

- `Prettier：统一代码风格`
- `ESLint：保证代码质量`
- `Prettier：统一代码风格`
- `Husky：代码提交时自动检查代码质量`

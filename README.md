# INEFFA - 伊涅芙 | 赛博家政机器人

个人主页项目 — 复古杂志风格的赛博家政机器人展示页面。

## 开发

```bash
# 安装依赖
bun install

# 开发模式
bun run dev

# 构建
bun run build
```

## 部署 (PM2)

⚠️ **重要**：此项目使用 **PM2** 管理运行。

### 快速部署（推荐）

```bash
./deploy.sh
```

一键执行构建 + PM2 重启。

### 手动部署

```bash
# 启动服务
pm2 start npm --name ineffa -- start

# 查看状态
pm2 list

# 重启（代码更新后必须执行）
pm2 restart ineffa

# 停止
pm2 stop ineffa
```

## 文件位置

- 项目路径：`/home/ubuntu/ineffa/`
- PM2 进程名：`ineffa`

## 技术栈

- Next.js 16 + React 19
- TailwindCSS 4
- Bun runtime
- @ricons/ionicons5 (图标库)

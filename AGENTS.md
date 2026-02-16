# AGENTS.md - INEFFA 项目档案

## 部署信息

- **进程管理**: PM2 (`pm2 list` 查看)
- **进程名**: `ineffa`
- **项目路径**: `/home/ubuntu/ineffa/`

## 重要提醒

### 代码更新后必须重启 PM2！

Next.js 构建后，**必须重启 PM2 进程**才能看到效果。

### 快速部署（推荐）

```bash
./deploy.sh
```

一键执行：构建 → PM2 重启

### 手动部署

```bash
cd /home/ubuntu/ineffa

# 1. 构建
bun run build

# 2. 重启 PM2（关键步骤！）
pm2 restart ineffa
```

## 常用命令

```bash
# 查看状态
pm2 list

# 查看日志
pm2 logs ineffa

# 重启
pm2 restart ineffa

# 停止
pm2 stop ineffa
```

## 项目结构

```
/home/ubuntu/ineffa/
├── app/              # Next.js App Router
├── public/           # 静态资源
├── .next/            # 构建输出
├── package.json
└── README.md
```

## 技术栈

- Next.js 16.1.6
- React 19
- TailwindCSS 4
- Bun v1.3.9
- @ricons/ionicons5

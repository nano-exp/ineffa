#!/usr/bin/env bash
set -e  # 任何命令失败立即退出
cd "$(dirname "$0")"

echo "🔨 构建中..."
bun run build

echo "🚀 重启 PM2..."
pm2 restart ineffa
echo "✅ 部署完成"


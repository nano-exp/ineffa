#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1

bun run build
pm2 restart ineffa


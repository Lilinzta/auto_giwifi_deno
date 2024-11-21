# 介绍

对 [GiraffeLe/Auto-Giwifi](https://github.com/GiraffeLe/Auto-Giwifi) 的重写，使用 [deno](https://deno.com/) + [typescript](https://www.typescriptlang.org/)

## 使用(需要 deno 环境)

在`main.ts`所在文件夹中

```bash
deno run -A main.ts 你的账号 你的密码 认证服务器ip(可选)
```

认证服务器ip默认为10.189.1.3

```bash
deno run -A main.ts 123456789 123456789
deno run -A main.ts 123456789 123456789 10.189.1.3
```

如果输入的账号密码正确,控制台会输出"认证成功,稍后跳转"

## Todo

目前此脚本仅仅能够完成简单的登录

需要改善的地方还有很多.

目前只适用于`洛阳理工学院`(大概)

## 开发

将仓库克隆到本地

```bash
git clone https://github.com/Lilinzta/auto_giwifi_deno
```

运行脚本，将自动下载依赖

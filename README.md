# dsh-skin

DeepSeek Harness 首页风格聊天背景皮肤 —— 对照 [deepseek.com/harness](https://www.deepseek.com/harness/en/) 首页逐行移植：WebGL 流体背景 + 白色点线网格 + 数字点云鲸鱼。插件化安装，可在插件管理里随时启用/停用。

A homepage-style chat background skin for DeepSeek Harness (WebGL fluid + dot-line grid + digital point-cloud whale), installable as a normal dsh plugin.

## 效果 / Features

- 首页同款 WebGL 流体背景（5 色噪声场 + 流场笔刷 + 光源/辉光/暗角/颗粒，shader 原样移植官方页面）
- 白色 90px 点线网格（鼠标扰动 + 弹簧回弹，官方同款物理）
- 鲸鱼 = 数字点云（HeroDigitileR3F 移植）：粒子聚成鲸形、呼吸游动、鼠标径向推开、光标光束提亮
- 深色主题生效；reduced-motion 自动停用；不监听点击事件

## 安装 / Install

```sh
dsh plugin --profile web add github:changan0617/dsh-skin
```

重启 `dsh web` 后生效。卸载：

```sh
dsh plugin --profile web remove dsh-skin
```

## 文件 / Files

| 文件 | 说明 |
|---|---|
| `lib/client.js` | 皮肤客户端 bundle（流体 + 网格 + 鲸鱼点云，含全部交互与参数） |
| `lib/index.js` | 宿主半边（纯客户端插件，宿主无逻辑） |
| `cordis.patch.yml` | bundle 挂载补丁，插入 `harness-skin` 条目 |

## 参数调节 / Tuning

均位于 `lib/client.js`，改完重启 `dsh web` 并 Ctrl+F5：

| 效果 | 位置 | 当前值 |
|---|---|---|
| 鲸鱼基础透明度 | `baseAlpha` | `0.25 + 0.28 * D` |
| 鲸鱼粒子大小 | `size = 0.09 * unit` | 0.09 |
| 鲸鱼大小 | `whaleW = Math.min(W, H) * 0.52` | 0.52 |
| 鲸鱼位置 | `cx = contentCX` / `cy = H * 0.45` | 内容区居中 |
| 鼠标提亮范围 | `BEAM_R` | 10 |
| 鼠标提亮强度 | alpha 行 `(1 + 0.35 * beam)` | 0.35 |
| 粒子推开半径/强度 | `MOUSE_R` / `MOUSE_STR` | 4.9 / 0.8 |
| 流体是否被鼠标扭曲 | flowmap `brushStrength` 后的值 | 0（关闭） |

## 注意 / Notes

- 皮肤仅在深色主题（`body[data-ds-dark-theme]`）下生效。
- 系统开启「减少动态效果」时脚本自动停用动画。

## License

[MIT](LICENSE) © 2026 changan0617

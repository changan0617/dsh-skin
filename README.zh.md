# dsh-skin（中文说明）

DeepSeek Harness 首页风格聊天背景皮肤插件：深蓝渐变底 + WebGL 流体 + 白色点线网格 + 数字点云鲸鱼（鼠标光束提亮 / 粒子推开交互）。

来源：对照 https://www.deepseek.com/harness/en/ 首页源码逐行移植。

## 安装

```sh
dsh plugin --profile web add github:changan0617/dsh-skin
```

安装后重启 `dsh web`，浏览器打开后按 Ctrl+F5 强制刷新。停用/卸载：

```sh
dsh plugin --profile web remove dsh-skin
```

## 常用调节

都在 `lib/client.js` 里，改完重启 `dsh web` 并 Ctrl+F5：

- 鲸鱼基础透明度：搜 `baseAlpha`（当前 `0.25 + 0.28 * D`，数值越小越透明）
- 鲸鱼粒子大小：搜 `size = 0.09 * unit`（当前 0.09，越大越粗）
- 鲸鱼大小：搜 `whaleW = Math.min(W, H) * 0.52`（0.52 为比例）
- 鲸鱼位置：`cx = contentCX`（内容区水平中心）、`cy = H * 0.45`
- 鼠标提亮范围：`BEAM_R = 10`（scene 单位，越大范围越大）
- 鼠标提亮强度：alpha 行的 `(1 + 0.35 * beam)`，0.35 越大越亮
- 粒子推开半径：`MOUSE_R = 4.9`；推开强度 `MOUSE_STR = 0.8`
- 流体是否被鼠标扭曲：搜 `brushStrength` 后面的 0（0 = 不扭曲）

## 注意事项

1. 皮肤只在深色主题（`body[data-ds-dark-theme]`）下生效。
2. 系统开启「减少动态效果」时脚本会自动停用动画。
3. 覆盖安装目录的旧版手动补丁不再需要：本插件通过 bundle 挂载，`dsh plugin remove` 即可干净卸载。

## License

MIT © 2026 changan0617

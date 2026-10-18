// dsh-skin — Host half（纯客户端插件，宿主侧无逻辑）
const name = "harness-skin";
const inject = [];
function apply() {
  /* 客户端皮肤在 lib/client.js 的 apply 中注入，宿主无需任何操作 */
}
export { name, inject, apply };

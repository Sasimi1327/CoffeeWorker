import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString } from "./index-uFz9gIqX.js";
const _sfc_main = {
  data() {
    return {
      count: 6
    };
  },
  methods: {
    countDown() {
      this.count -= 1;
      if (this.count === 0) {
        this.$router.push({ path: "/" });
      }
      setTimeout(() => {
        this.countDown();
      }, 1e3);
    }
  },
  mounted() {
    this.countDown();
  }
};
const _hoisted_1 = { id: "main" };
const _hoisted_2 = { class: "fof" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", null, "Error 404", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("h3", null, toDisplayString($data.count) + " 秒後回登入頁", 1)
    ])
  ]);
}
const ErrorPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ErrorPage as default
};

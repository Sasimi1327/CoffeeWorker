import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, w as withCtx, b as createBaseVNode, f as createTextVNode } from "./index-uFz9gIqX.js";
const _sfc_main = {};
const _hoisted_1 = { class: "container d-flex flex-column justify-content-center align-items-center" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "msg" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "text-center" }, "您的訂單已完成"),
  /* @__PURE__ */ createBaseVNode("p", null, "請注意您的訂單查收，若有任何問題請來電告知，我們會儘快為您服務。")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_RouterLink, {
      to: "/",
      class: "finishButton"
    }, {
      default: withCtx(() => [
        createTextVNode(" 回首頁 ")
      ]),
      _: 1
    })
  ]);
}
const OrderComplete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  OrderComplete as default
};

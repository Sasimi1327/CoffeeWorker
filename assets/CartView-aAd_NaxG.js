import { S as Swal } from "./sweetalert2.all--pEj7bp4.js";
import { c as cartStore } from "./cart-8NMC2yye.js";
import { _ as _export_sfc, m as mapActions, a as mapState, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, b as createBaseVNode, w as withCtx, F as Fragment, y as renderList, f as createTextVNode, t as toDisplayString, E as createCommentVNode, B as withDirectives, D as vModelText, p as pushScopeId, g as popScopeId } from "./index-uFz9gIqX.js";
const _sfc_main = {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    ...mapActions(cartStore, ["updateCartItem", "deleteCartItem"]),
    checkBeforeRemove(item) {
      Swal.fire({
        title: "刪除產品確認",
        text: `是否刪除 【${item.product.title ? item.product.title : item.id}】 (刪除後將無法恢復)`,
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        cancelButtonText: "取消刪除",
        confirmButtonText: "確認刪除"
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteCartItem(item);
        }
      });
    }
  },
  computed: {
    ...mapState(cartStore, ["carts", "total", "final_total", "loading", "isUpdateItem", "isDelItem"])
  },
  watch: {
    loading() {
      this.isLoading = this.loading;
    },
    isUpdateItem() {
      if (!this.isUpdateItem) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "已更新購物車項目",
          showConfirmButton: false,
          timer: 2e3
        });
      }
    },
    isDelItem() {
      if (!this.isDelItem) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "已刪除購物車項目",
          showConfirmButton: false,
          timer: 2e3
        });
      }
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-a0c15063"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container my-10 my-md-20" };
const _hoisted_2 = { class: "d-flex justify-content-between align-items-center py-4" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", null, "您的購物車列表", -1));
const _hoisted_4 = {
  key: 0,
  class: "text-center"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "fz-1" }, "購物車是空的", -1));
const _hoisted_6 = { class: "w-100 text-center d-none d-md-block" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", { class: "fz-4" }, [
    /* @__PURE__ */ createBaseVNode("th", {
      colspan: "2",
      scope: "col",
      class: "py-3"
    }, "咖啡品項"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      class: "py-3"
    }, "數量"),
    /* @__PURE__ */ createBaseVNode("th", {
      scope: "col",
      class: "py-3"
    }, "小計")
  ])
], -1));
const _hoisted_8 = { class: "w-25" };
const _hoisted_9 = ["src"];
const _hoisted_10 = { class: "w-30 p-4 text-start" };
const _hoisted_11 = { class: "w-25 px-5" };
const _hoisted_12 = { class: "d-flex justify-content-center align-items-center" };
const _hoisted_13 = { class: "d-flex justify-content-center" };
const _hoisted_14 = ["onClick"];
const _hoisted_15 = {
  key: 0,
  class: "material-symbols-outlined my-1 align-middle"
};
const _hoisted_16 = {
  key: 1,
  class: "material-symbols-outlined my-1 align-middle"
};
const _hoisted_17 = ["onUpdate:modelValue"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "material-symbols-outlined my-1 align-middle" }, "add", -1));
const _hoisted_20 = [
  _hoisted_19
];
const _hoisted_21 = { class: "w-20 fw-bold fz-5" };
const _hoisted_22 = { class: "d-md-none" };
const _hoisted_23 = { class: "col-6 my-2" };
const _hoisted_24 = { class: "col-6 my-2" };
const _hoisted_25 = { class: "col-6 my-2" };
const _hoisted_26 = { class: "col-6 my-2" };
const _hoisted_27 = { class: "col-6 my-2" };
const _hoisted_28 = { class: "d-flex justify-content-start" };
const _hoisted_29 = ["onClick"];
const _hoisted_30 = {
  key: 0,
  class: "material-symbols-outlined my-1 align-middle"
};
const _hoisted_31 = {
  key: 1,
  class: "material-symbols-outlined my-1 align-middle"
};
const _hoisted_32 = ["onUpdate:modelValue"];
const _hoisted_33 = ["onClick"];
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "material-symbols-outlined my-1 align-middle" }, "add", -1));
const _hoisted_35 = [
  _hoisted_34
];
const _hoisted_36 = { class: "col-6 my-3" };
const _hoisted_37 = { class: "fw-bold fz-5 text-secondary" };
const _hoisted_38 = { class: "container my-5 my-md-10" };
const _hoisted_39 = { class: "row align-items-center" };
const _hoisted_40 = { class: "col-12 text-end fz-5 fw-normal" };
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "fz-4 fw-bold mr-3" }, "總計:", -1));
const _hoisted_42 = {
  key: 0,
  class: "col-12 text-end fz-5 text-primary"
};
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "fz-4 fw-bold mr-3" }, "折扣價:", -1));
const _hoisted_44 = { class: "text-end" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_VueLoading = resolveComponent("VueLoading");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_VueLoading, {
      active: $data.isLoading,
      "onUpdate:active": _cache[0] || (_cache[0] = ($event) => $data.isLoading = $event)
    }, null, 8, ["active"]),
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        _hoisted_3,
        createVNode(_component_RouterLink, {
          to: "/products",
          class: "link-underline link-underline-opacity-0 fz-5"
        }, {
          default: withCtx(() => [
            createTextVNode("再逛逛吧")
          ]),
          _: 1
        })
      ]),
      !((_a = _ctx.carts) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
        _hoisted_5,
        createVNode(_component_router_link, {
          to: "/products",
          type: "button",
          class: "btn btn-primary btnHoverStyle mt-6 mt-md-10 px-10 py-4 rounded-2 fz-7 fw-bold text-white bg-secondary"
        }, {
          default: withCtx(() => [
            createTextVNode("更多商品")
          ]),
          _: 1
        })
      ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("table", _hoisted_6, [
          _hoisted_7,
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.carts, (item) => {
              return openBlock(), createElementBlock("tr", {
                key: item.id
              }, [
                createBaseVNode("td", _hoisted_8, [
                  createBaseVNode("img", {
                    src: item.product.imageUrl,
                    alt: "item.id",
                    class: "img-thumbnail w-100 h-100 object-fit-cover"
                  }, null, 8, _hoisted_9)
                ]),
                createBaseVNode("td", _hoisted_10, [
                  createBaseVNode("h6", null, "名稱： " + toDisplayString(item.product.title), 1),
                  createBaseVNode("h6", null, "價格： NT$ " + toDisplayString(item.product.price), 1),
                  createBaseVNode("h6", null, "甜度： " + toDisplayString(item.sugar), 1),
                  createBaseVNode("h6", null, "溫度： " + toDisplayString(item.ice), 1)
                ]),
                createBaseVNode("td", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("button", {
                        type: "button",
                        class: "bg-white border-black",
                        onClick: ($event) => item.qty > 1 ? (item.qty--, _ctx.updateCartItem(item)) : $options.checkBeforeRemove(item)
                      }, [
                        item.qty > 1 ? (openBlock(), createElementBlock("span", _hoisted_15, "remove")) : (openBlock(), createElementBlock("span", _hoisted_16, "delete"))
                      ], 8, _hoisted_14),
                      withDirectives(createBaseVNode("input", {
                        type: "number",
                        name: "quantity",
                        min: "1",
                        value: "1",
                        disabled: "",
                        class: "w-30 bg-white",
                        "onUpdate:modelValue": ($event) => item.qty = $event
                      }, null, 8, _hoisted_17), [
                        [vModelText, item.qty]
                      ]),
                      createBaseVNode("button", {
                        type: "button",
                        class: "bg-white border-black",
                        onClick: ($event) => {
                          item.qty++;
                          _ctx.updateCartItem(item);
                        }
                      }, _hoisted_20, 8, _hoisted_18)
                    ])
                  ])
                ]),
                createBaseVNode("td", _hoisted_21, " NT$ " + toDisplayString(item.product.price * item.qty), 1)
              ]);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_22, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.carts, (item) => {
            return openBlock(), createElementBlock("div", {
              class: "row justify-content-center align-items-center position-relative p-4 mb-0 mb-n-1px border border-2",
              key: item.id
            }, [
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("h6", null, "名稱： " + toDisplayString(item.product.title), 1)
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("h6", null, "價格： NT$ " + toDisplayString(item.product.price), 1)
              ]),
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("h6", null, "甜度： " + toDisplayString(item.sugar), 1)
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("h6", null, "溫度： " + toDisplayString(item.ice), 1)
              ]),
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  createBaseVNode("button", {
                    type: "button",
                    class: "bg-white border-black",
                    onClick: ($event) => item.qty > 1 ? (item.qty--, _ctx.updateCartItem(item)) : $options.checkBeforeRemove(item)
                  }, [
                    item.qty > 1 ? (openBlock(), createElementBlock("span", _hoisted_30, "remove")) : (openBlock(), createElementBlock("span", _hoisted_31, "delete"))
                  ], 8, _hoisted_29),
                  withDirectives(createBaseVNode("input", {
                    type: "number",
                    name: "quantity",
                    min: "1",
                    value: "1",
                    disabled: "",
                    class: "w-30 bg-white",
                    "onUpdate:modelValue": ($event) => item.qty = $event
                  }, null, 8, _hoisted_32), [
                    [vModelText, item.qty]
                  ]),
                  createBaseVNode("button", {
                    type: "button",
                    class: "bg-white border-black",
                    onClick: ($event) => {
                      item.qty++;
                      _ctx.updateCartItem(item);
                    }
                  }, _hoisted_35, 8, _hoisted_33)
                ])
              ]),
              createBaseVNode("div", _hoisted_36, [
                createBaseVNode("h6", _hoisted_37, "小計： NT$ " + toDisplayString(item.product.price * item.qty), 1)
              ])
            ]);
          }), 128))
        ])
      ], 64))
    ]),
    createBaseVNode("div", _hoisted_38, [
      createBaseVNode("div", _hoisted_39, [
        createBaseVNode("div", _hoisted_40, [
          _hoisted_41,
          createTextVNode(" NT$ " + toDisplayString(this.total), 1)
        ]),
        this.total !== this.final_total ? (openBlock(), createElementBlock("div", _hoisted_42, [
          _hoisted_43,
          createTextVNode(" NT$ " + toDisplayString(this.final_total), 1)
        ])) : createCommentVNode("", true)
      ]),
      createBaseVNode("div", _hoisted_44, [
        createVNode(_component_RouterLink, {
          to: "/userinfo",
          type: "button",
          class: "btn btn-primary btnHoverStyle mt-5 mt-md-10 px-15 py-4 rounded-2 fz-5 fw-bold text-white bg-secondary"
        }, {
          default: withCtx(() => [
            createTextVNode("填寫客戶資訊")
          ]),
          _: 1
        })
      ])
    ])
  ], 64);
}
const CartView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a0c15063"]]);
export {
  CartView as default
};

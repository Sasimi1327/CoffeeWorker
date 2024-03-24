import { S as Swal } from "./sweetalert2.all-rAJSh8h2.js";
import { c as cartStore } from "./cart-TFs4JoLr.js";
import { _ as _export_sfc, m as mapActions, a as mapState, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, b as createBaseVNode, t as toDisplayString, f as createTextVNode, B as withDirectives, C as vModelRadio, n as normalizeClass, D as vModelText, F as Fragment, p as pushScopeId, g as popScopeId } from "./index-IU5jS32T.js";
var define_import_meta_env_default = { VITE_URL: "https://vue3-course-api.hexschool.io/v2", VITE_PATH: "sasimi2024", BASE_URL: "/CoffeeWorker/", MODE: "production", DEV: false, PROD: true, SSR: false };
const { VITE_URL, VITE_PATH } = define_import_meta_env_default;
const _sfc_main = {
  data() {
    return {
      isLoading: false,
      selectProduct: {},
      selectSugar: "標準甜",
      selectIce: "正常冰",
      qty: 1
    };
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
    getProduct() {
      const { id } = this.$route.params;
      const url = `${VITE_URL}/api/${VITE_PATH}/product/${id}`;
      this.$http.get(url).then((res) => {
        this.selectProduct = res.data.product;
      }).catch((err) => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 2e3
        });
      });
    }
  },
  watch: {
    isAddToCart() {
      if (!this.isAddToCart) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "已加入購物車項目",
          width: 300,
          showConfirmButton: false,
          timer: 2e3
        });
      }
    },
    loading() {
      this.isLoading = this.loading;
    }
  },
  computed: {
    ...mapState(cartStore, ["isAddToCart", "loading"])
  },
  mounted() {
    this.getProduct();
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-9f79219f"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container py-20 mb-6" };
const _hoisted_2 = { class: "row" };
const _hoisted_3 = { class: "col-lg-5" };
const _hoisted_4 = { class: "pt-15" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "col-lg-7" };
const _hoisted_7 = { class: "position-relative ml-18" };
const _hoisted_8 = { class: "fz-3 text-primary" };
const _hoisted_9 = { class: "my-7 fz-5" };
const _hoisted_10 = { class: "text-primary mt-4 mb-6" };
const _hoisted_11 = {
  key: 0,
  class: "fz-4 fw-bold"
};
const _hoisted_12 = { class: "text-decoration-none" };
const _hoisted_13 = { class: "text-muted fw-bold fz-3" };
const _hoisted_14 = {
  key: 1,
  class: "fz-3 fw-bold"
};
const _hoisted_15 = { class: "text-decoration-none" };
const _hoisted_16 = { class: "text-primary fz-3" };
const _hoisted_17 = { class: "ml-3 align-middle fz-6 text-dark-brown" };
const _hoisted_18 = { class: "text-muted fw-normal fz-5 lh-1" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("legend", { class: "mb-3 position-relative d-block fw-bold fz-6 lh-1" }, "甜度", -1));
const _hoisted_20 = {
  class: "btn-group mb-5 w-100 d-flex justify-content-start",
  role: "group"
};
const _hoisted_21 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_22 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_23 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_24 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_25 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("legend", { class: "mb-3 position-relative d-block fw-bold fz-6 lh-1" }, "冰塊", -1));
const _hoisted_27 = {
  class: "btn-group mb-5 w-100 d-flex justify-content-start",
  role: "group"
};
const _hoisted_28 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_29 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_30 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_31 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_32 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_33 = { class: "mb-1 mr-1 position-relative" };
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("legend", { class: "mb-3 position-relative d-block fw-bold fz-6 lh-1" }, "數量", -1));
const _hoisted_35 = { class: "d-flex justify-content-start mb-8 position-relative" };
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "material-symbols-outlined my-1 align-middle" }, "remove", -1));
const _hoisted_37 = [
  _hoisted_36
];
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "material-symbols-outlined my-1 align-middle" }, "add", -1));
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = { class: "mb-3 position-relative" };
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "container-fluid" }, null, -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueLoading = resolveComponent("VueLoading");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_VueLoading, {
      active: $data.isLoading,
      "onUpdate:active": _cache[0] || (_cache[0] = ($event) => $data.isLoading = $event)
    }, null, 8, ["active"]),
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("img", {
              src: $data.selectProduct.imageUrl,
              class: "img-fluid object-fit-cover"
            }, null, 8, _hoisted_5)
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("h3", _hoisted_8, toDisplayString($data.selectProduct.title), 1),
            createBaseVNode("div", _hoisted_9, toDisplayString($data.selectProduct.description), 1),
            createBaseVNode("div", _hoisted_10, [
              $data.selectProduct.price === $data.selectProduct.origin_price ? (openBlock(), createElementBlock("span", _hoisted_11, [
                createTextVNode(" NT$ "),
                createBaseVNode("ins", _hoisted_12, [
                  createBaseVNode("span", _hoisted_13, toDisplayString($data.selectProduct.price), 1)
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_14, [
                createTextVNode(" NT$ "),
                createBaseVNode("ins", _hoisted_15, [
                  createBaseVNode("span", _hoisted_16, toDisplayString($data.selectProduct.price), 1)
                ]),
                createBaseVNode("del", _hoisted_17, [
                  createTextVNode(" NT$ "),
                  createBaseVNode("span", _hoisted_18, toDisplayString($data.selectProduct.origin_price), 1)
                ])
              ]))
            ]),
            _hoisted_19,
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "標準甜",
                  autocomplete: "off",
                  value: "標準甜",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.selectSugar = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectSugar]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectSugar === "標準甜" }]),
                  for: "標準甜"
                }, "正常甜", 2)
              ]),
              createBaseVNode("div", _hoisted_22, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "7分甜",
                  autocomplete: "off",
                  value: "7分甜",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.selectSugar = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectSugar]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectSugar === "7分甜" }]),
                  for: "7分甜"
                }, "少糖", 2)
              ]),
              createBaseVNode("div", _hoisted_23, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "5分甜",
                  autocomplete: "off",
                  value: "5分甜",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.selectSugar = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectSugar]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectSugar === "5分甜" }]),
                  for: "5分甜"
                }, "半糖", 2)
              ]),
              createBaseVNode("div", _hoisted_24, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "3分甜",
                  autocomplete: "off",
                  value: "3分甜",
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.selectSugar = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectSugar]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectSugar === "3分甜" }]),
                  for: "3分甜"
                }, "微糖", 2)
              ]),
              createBaseVNode("div", _hoisted_25, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "健康甜",
                  autocomplete: "off",
                  value: "健康甜",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.selectSugar = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectSugar]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectSugar === "健康甜" }]),
                  for: "健康甜"
                }, "無糖", 2)
              ])
            ]),
            _hoisted_26,
            createBaseVNode("div", _hoisted_27, [
              createBaseVNode("div", _hoisted_28, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "正常冰",
                  autocomplete: "off",
                  value: "正常冰",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.selectIce = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectIce]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectIce === "正常冰" }]),
                  for: "正常冰"
                }, "正常冰", 2)
              ]),
              createBaseVNode("div", _hoisted_29, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "微冰",
                  autocomplete: "off",
                  value: "微冰",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.selectIce = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectIce]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectIce === "微冰" }]),
                  for: "微冰"
                }, "微冰", 2)
              ]),
              createBaseVNode("div", _hoisted_30, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "去冰",
                  autocomplete: "off",
                  value: "去冰",
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.selectIce = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectIce]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectIce === "去冰" }]),
                  for: "去冰"
                }, "去冰", 2)
              ]),
              createBaseVNode("div", _hoisted_31, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "常溫",
                  autocomplete: "off",
                  value: "常溫",
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.selectIce = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectIce]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectIce === "常溫" }]),
                  for: "常溫"
                }, "常溫", 2)
              ]),
              createBaseVNode("div", _hoisted_32, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "溫",
                  autocomplete: "off",
                  value: "溫",
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.selectIce = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectIce]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectIce === "溫" }]),
                  for: "溫"
                }, "溫", 2)
              ]),
              createBaseVNode("div", _hoisted_33, [
                withDirectives(createBaseVNode("input", {
                  type: "radio",
                  class: "btn-check",
                  name: "btnradio",
                  id: "熱",
                  autocomplete: "off",
                  value: "熱",
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.selectIce = $event)
                }, null, 512), [
                  [vModelRadio, $data.selectIce]
                ]),
                createBaseVNode("label", {
                  class: normalizeClass(["btn btn-dark-brown fw-bold", { active: $data.selectIce === "熱" }]),
                  for: "熱"
                }, "熱", 2)
              ])
            ]),
            _hoisted_34,
            createBaseVNode("div", _hoisted_35, [
              createBaseVNode("button", {
                type: "button",
                class: "bg-white border-black",
                onClick: _cache[12] || (_cache[12] = ($event) => $data.qty > 1 ? $data.qty-- : "")
              }, _hoisted_37),
              withDirectives(createBaseVNode("input", {
                type: "number",
                name: "quantity",
                min: "1",
                value: "1",
                disabled: "",
                class: "w-10 bg-white",
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.qty = $event)
              }, null, 512), [
                [vModelText, $data.qty]
              ]),
              createBaseVNode("button", {
                type: "button",
                class: "bg-white border-black",
                onClick: _cache[14] || (_cache[14] = ($event) => $data.qty++)
              }, _hoisted_39)
            ]),
            createBaseVNode("div", _hoisted_40, [
              createBaseVNode("button", {
                type: "button",
                class: "px-10 py-4 border-0 rounded-2 w-50 bg-primary fw-bold fz-5 btn-addCart",
                onClick: _cache[15] || (_cache[15] = ($event) => _ctx.addToCart($data.selectProduct.id, $data.selectSugar, $data.selectIce, $data.qty))
              }, "加入購物車")
            ])
          ])
        ])
      ])
    ]),
    _hoisted_41
  ], 64);
}
const ProductStatement = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9f79219f"]]);
export {
  ProductStatement as default
};

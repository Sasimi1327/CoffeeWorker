import { S as Swal } from "./sweetalert2.all-y40DOsxL.js";
import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, y as renderList, f as createTextVNode, t as toDisplayString, z as withModifiers, e as createStaticVNode, p as pushScopeId, g as popScopeId } from "./index-Y8Vdyrzx.js";
var define_import_meta_env_default = { VITE_URL: "https://vue3-course-api.hexschool.io/v2", VITE_PATH: "sasimi2024", BASE_URL: "/CoffeeWorker/", MODE: "production", DEV: false, PROD: true, SSR: false };
const { VITE_URL, VITE_PATH } = define_import_meta_env_default;
const _sfc_main = {
  data() {
    return {
      order: {}
      // createAt: '',
      // orderId: '',
      // is_paid: false,
      // products: [],
      // total: 0,
      // user: {},
      // msg: '',
    };
  },
  methods: {
    getOrder() {
      const { id } = this.$route.params;
      const url = `${VITE_URL}/api/${VITE_PATH}/order/${id}`;
      this.$http.get(url).then((res) => {
        this.order = res.data.order;
      }).catch((err) => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    payOrder() {
      const { id } = this.$route.params;
      const url = `${VITE_URL}/api/${VITE_PATH}/pay/${id}`;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.$router.push({
            name: "pay-complete",
            params: {
              id
            }
          });
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "success",
            title: "付款成功",
            showConfirmButton: false,
            timer: 3e3
          });
        } else {
          Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 3e3
          });
        }
      }).catch((err) => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 3e3
        });
      });
    }
  },
  mounted() {
    this.getOrder();
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-443e578d"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container my-10 my-md-20" };
const _hoisted_2 = { class: "d-flex justify-content-between align-items-center py-4" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", null, "訂單確認", -1));
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<div class="d-none d-md-block" data-v-443e578d><ul class="row list-unstyled py-4 mb-0 border border-2 border-bottom-0 fw-bold" data-v-443e578d><li class="col-md-5 text-center" data-v-443e578d>商品資訊</li><li class="col-md-2 text-start" data-v-443e578d>價格</li><li class="col-md-1 text-start" data-v-443e578d>甜度</li><li class="col-md-1 text-start" data-v-443e578d>溫度</li><li class="col-md-1 text-start" data-v-443e578d>數量</li><li class="col-md-2 text-start" data-v-443e578d>小計</li></ul></div>', 1);
const _hoisted_5 = { class: "col-md-5 mb-4 mb-md-0 d-none d-md-block" };
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = { class: "col-6 col-md-2 my-3 mb-md-0 d-md-none" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-md-none fz-6 align-middle" }, "商品名：", -1));
const _hoisted_9 = { class: "col-6 col-md-2 my-3 mb-md-0" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-md-none fz-6 align-middle" }, "價格：", -1));
const _hoisted_11 = { class: "col-6 col-md-1 my-3 mb-md-0" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-md-none fz-6 align-middle" }, "甜度：", -1));
const _hoisted_13 = { class: "col-6 col-md-1 my-3 mb-md-0" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-md-none fz-6 align-middle" }, "溫度：", -1));
const _hoisted_15 = { class: "col-6 col-md-1 my-3 mb-md-0" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-md-none fz-6 align-middle" }, "數量：", -1));
const _hoisted_17 = { class: "col-6 col-md-2 my-3 mb-md-0" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-md-none fz-6 align-middle" }, "小計：", -1));
const _hoisted_19 = { class: "row align-items-center mt-4" };
const _hoisted_20 = { class: "col-12 text-end fz-5 fw-normal" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "fz-4 fw-bold mr-3" }, "總計：", -1));
const _hoisted_22 = { class: "container my-10 my-md-20" };
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "d-flex justify-content-between align-items-center py-4" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "訂單資訊")
], -1));
const _hoisted_24 = { class: "row align-items-center list-unstyled px-8 py-2 mb-0 border border-2 mb-n-1px position-relative" };
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", { class: "col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom align-middle" }, " 訂單時間 ", -1));
const _hoisted_26 = { class: "col-md-6 p-4 border-bottom border-grey-d4 fz-5" };
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-inline-block d-md-none fz-5 align-middle" }, "訂單時間：", -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", { class: "col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom align-middle" }, " 訂單編號 ", -1));
const _hoisted_29 = { class: "col-md-6 p-4 border-bottom border-grey-d4 fz-5" };
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-inline-block d-md-none fz-5 align-middle" }, "訂單編號：", -1));
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", { class: "col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom align-middle" }, " 收件人姓名 ", -1));
const _hoisted_32 = { class: "col-md-6 p-4 border-bottom border-grey-d4 fz-5" };
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-inline-block d-md-none fz-5 align-middle" }, "收件人姓名：", -1));
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", { class: "col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom align-middle" }, " 電子郵件 ", -1));
const _hoisted_35 = { class: "col-md-6 p-4 border-bottom border-grey-d4 fz-5" };
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-inline-block d-md-none fz-5 align-middle" }, "電子郵件：", -1));
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", { class: "col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom align-middle" }, " 收件人電話 ", -1));
const _hoisted_38 = { class: "col-md-6 p-4 border-bottom border-grey-d4 fz-5" };
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-inline-block d-md-none fz-5 align-middle" }, "收件人電話：", -1));
const _hoisted_40 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", { class: "col-md-6 d-none d-md-block fz-5 fw-bold my-4 p-4 border-bottom align-middle" }, " 收件人地址 ", -1));
const _hoisted_41 = { class: "col-md-6 p-4 border-bottom border-grey-d4 fz-5" };
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-inline-block d-md-none fz-5 align-middle" }, "收件人地址：", -1));
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", { class: "col-md-6 d-none d-md-block fz-5 fw-bold my-4 align-middle" }, " 留言 ", -1));
const _hoisted_44 = { class: "col-md-6 p-4 fz-6" };
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "d-inline-block d-md-none fz-5 align-middle" }, "留言：", -1));
const _hoisted_46 = { class: "container" };
const _hoisted_47 = { class: "text-end my-10 my-md-20" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        _hoisted_3,
        createVNode(_component_RouterLink, {
          to: "/products",
          class: "link-underline link-underline-opacity-0 fz-5"
        }, {
          default: withCtx(() => [
            createTextVNode("繼續購買")
          ]),
          _: 1
        })
      ]),
      _hoisted_4,
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.order.products, (item) => {
        return openBlock(), createElementBlock("div", {
          class: "row justify-content-center align-items-center list-unstyled p-4 mb-0 border border-2 mb-n-1px position-relative",
          key: item.id
        }, [
          createBaseVNode("li", _hoisted_5, [
            createBaseVNode("img", {
              src: item.product.imageUrl,
              class: "img-fluid w-40 h-40 object-fit-cover mr-5",
              alt: item.product.title
            }, null, 8, _hoisted_6),
            createTextVNode(" " + toDisplayString(item.product.title), 1)
          ]),
          createBaseVNode("li", _hoisted_7, [
            _hoisted_8,
            createTextVNode(" " + toDisplayString(item.product.title), 1)
          ]),
          createBaseVNode("li", _hoisted_9, [
            _hoisted_10,
            createTextVNode(" NT$ " + toDisplayString(item.product.price), 1)
          ]),
          createBaseVNode("li", _hoisted_11, [
            _hoisted_12,
            createTextVNode(" " + toDisplayString(item.sugar), 1)
          ]),
          createBaseVNode("li", _hoisted_13, [
            _hoisted_14,
            createTextVNode(" " + toDisplayString(item.ice), 1)
          ]),
          createBaseVNode("li", _hoisted_15, [
            _hoisted_16,
            createTextVNode(" " + toDisplayString(item.qty), 1)
          ]),
          createBaseVNode("li", _hoisted_17, [
            _hoisted_18,
            createTextVNode(" NT$ " + toDisplayString(item.final_total), 1)
          ])
        ]);
      }), 128)),
      createBaseVNode("div", _hoisted_19, [
        createBaseVNode("div", _hoisted_20, [
          _hoisted_21,
          createTextVNode(" NT$ " + toDisplayString($data.order.total), 1)
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_22, [
      _hoisted_23,
      createBaseVNode("ul", _hoisted_24, [
        _hoisted_25,
        createBaseVNode("li", _hoisted_26, [
          _hoisted_27,
          createTextVNode(" " + toDisplayString(_ctx.$filters.date($data.order.create_at)), 1)
        ]),
        _hoisted_28,
        createBaseVNode("li", _hoisted_29, [
          _hoisted_30,
          createTextVNode(" " + toDisplayString($data.order.id), 1)
        ]),
        _hoisted_31,
        createBaseVNode("li", _hoisted_32, [
          _hoisted_33,
          createTextVNode(" " + toDisplayString((_a = $data.order.user) == null ? void 0 : _a.name), 1)
        ]),
        _hoisted_34,
        createBaseVNode("li", _hoisted_35, [
          _hoisted_36,
          createTextVNode(" " + toDisplayString((_b = $data.order.user) == null ? void 0 : _b.email), 1)
        ]),
        _hoisted_37,
        createBaseVNode("li", _hoisted_38, [
          _hoisted_39,
          createTextVNode(" " + toDisplayString((_c = $data.order.user) == null ? void 0 : _c.tel), 1)
        ]),
        _hoisted_40,
        createBaseVNode("li", _hoisted_41, [
          _hoisted_42,
          createTextVNode(" " + toDisplayString((_d = $data.order.user) == null ? void 0 : _d.address), 1)
        ]),
        _hoisted_43,
        createBaseVNode("li", _hoisted_44, [
          _hoisted_45,
          createTextVNode(" " + toDisplayString($data.order.msg), 1)
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_46, [
      createBaseVNode("div", _hoisted_47, [
        createBaseVNode("button", {
          type: "button",
          class: "btn btn-primary py-4 px-20 btnHoverStyle fw-bold text-white bg-secondary",
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.payOrder && $options.payOrder(...args), ["prevent"]))
        }, "確認結帳")
      ])
    ])
  ], 64);
}
const OrderComfirm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-443e578d"]]);
export {
  OrderComfirm as default
};

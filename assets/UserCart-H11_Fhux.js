import { S as Swal } from "./sweetalert2.all--pEj7bp4.js";
import { c as cartStore } from "./cart-8NMC2yye.js";
import { _ as _export_sfc, a as mapState, m as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, b as createBaseVNode, w as withCtx, F as Fragment, f as createTextVNode, n as normalizeClass, B as withDirectives, D as vModelText } from "./index-uFz9gIqX.js";
var define_import_meta_env_default = { VITE_URL: "https://vue3-course-api.hexschool.io/v2", VITE_PATH: "sasimi2024", BASE_URL: "/CoffeeWorker/", MODE: "production", DEV: false, PROD: true, SSR: false };
const { VITE_URL, VITE_PATH } = define_import_meta_env_default;
const _sfc_main = {
  data() {
    return {
      isLoading: false,
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      }
    };
  },
  computed: {
    ...mapState(cartStore, ["carts", "loading"]),
    isComplete() {
      return this.form.user.name && this.form.user.email && this.form.user.tel && this.form.user.address;
    }
  },
  watch: {
    loading() {
      this.isLoading = this.loading;
    }
  },
  methods: {
    ...mapActions(cartStore, ["getCarts"]),
    onSubmit() {
      if (this.carts.length === 0) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "購物車為空",
          showConfirmButton: false,
          timer: 3e3
        });
        this.$router.push("/products");
      }
      this.isLoading = true;
      const url = `${VITE_URL}/api/${VITE_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        this.getCarts();
        this.isLoading = false;
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "已建立訂單",
          showConfirmButton: false,
          timer: 3e3
        });
        this.form.message = "";
        this.$refs.form.resetForm();
        this.$router.push({
          name: "order-detail",
          params: {
            id: res.data.orderId
          }
        });
      }).catch((err) => {
        var _a;
        this.isLoading = false;
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: (_a = err.response) == null ? void 0 : _a.data.message,
          showConfirmButton: false,
          timer: 3e3
        });
      });
    }
  }
};
const _hoisted_1 = { class: "container my-10 my-md-20" };
const _hoisted_2 = { class: "d-flex justify-content-between align-items-center py-4" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", null, "填寫顧客資訊", -1);
const _hoisted_4 = { class: "row" };
const _hoisted_5 = { class: "col-md-6 mb-6" };
const _hoisted_6 = { class: "form-floating mb-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", { for: "name" }, "收件人姓名", -1);
const _hoisted_8 = { class: "col-md-6 mb-6" };
const _hoisted_9 = { class: "form-floating mb-3" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("label", { for: "email" }, "電子郵件", -1);
const _hoisted_11 = { class: "col-md-6 mb-6" };
const _hoisted_12 = { class: "form-floating mb-3" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", { for: "tel" }, "收件人電話", -1);
const _hoisted_14 = { class: "col-md-6 mb-6" };
const _hoisted_15 = { class: "form-floating mb-3" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("label", { for: "address" }, "收件人地址", -1);
const _hoisted_17 = { class: "col-12 mb-6" };
const _hoisted_18 = { class: "form-floating mb-3" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("label", { for: "msg" }, "留言", -1);
const _hoisted_20 = { class: "text-end" };
const _hoisted_21 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueLoading = resolveComponent("VueLoading");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_v_field = resolveComponent("v-field");
  const _component_error_message = resolveComponent("error-message");
  const _component_v_form = resolveComponent("v-form");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_VueLoading, {
      active: $data.isLoading,
      "onUpdate:active": _cache[0] || (_cache[0] = ($event) => $data.isLoading = $event)
    }, null, 8, ["active"]),
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        _hoisted_3,
        createVNode(_component_RouterLink, {
          to: "/cart",
          class: "link-underline link-underline-opacity-0 fz-5"
        }, {
          default: withCtx(() => [
            createTextVNode("回購物車列表")
          ]),
          _: 1
        })
      ]),
      createVNode(_component_v_form, {
        ref: "form",
        onSubmit: $options.onSubmit
      }, {
        default: withCtx(({ errors }) => [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_v_field, {
                  type: "text",
                  class: normalizeClass(["form-control", {
                    "is-invalid": errors["姓名"],
                    "is-valid": $data.form.user.name && !errors["姓名"]
                  }]),
                  id: "name",
                  name: "姓名",
                  placeholder: "請輸入姓名",
                  rules: "required",
                  modelValue: $data.form.user.name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.user.name = $event)
                }, null, 8, ["class", "modelValue"]),
                _hoisted_7,
                createVNode(_component_error_message, {
                  name: "姓名",
                  class: "invalid-feedback"
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createVNode(_component_v_field, {
                  type: "email",
                  class: normalizeClass(["form-control", {
                    "is-invalid": errors["電子郵件"],
                    "is-valid": $data.form.user.email && !errors["電子郵件"]
                  }]),
                  id: "email",
                  name: "電子郵件",
                  placeholder: "請輸入電子郵件",
                  rules: "email|required",
                  modelValue: $data.form.user.email,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.user.email = $event)
                }, null, 8, ["class", "modelValue"]),
                _hoisted_10,
                createVNode(_component_error_message, {
                  name: "電子郵件",
                  class: "invalid-feedback"
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_v_field, {
                  type: "tel",
                  class: normalizeClass(["form-control", {
                    "is-invalid": errors["電話"],
                    "is-valid": $data.form.user.tel && !errors["電話"]
                  }]),
                  id: "tel",
                  name: "電話",
                  placeholder: "請輸入電話",
                  rules: {
                    numeric: true,
                    required: true,
                    min: 8,
                    regex: /^(09)([0-9]{2})([0-9]{6})$|^(0)([0-9]{1})([0-9]{6,8})$/
                  },
                  modelValue: $data.form.user.tel,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.user.tel = $event)
                }, null, 8, ["class", "modelValue"]),
                _hoisted_13,
                createVNode(_component_error_message, {
                  name: "電話",
                  class: "invalid-feedback"
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createVNode(_component_v_field, {
                  type: "text",
                  class: normalizeClass(["form-control", {
                    "is-invalid": errors["地址"],
                    "is-valid": $data.form.user.address && !errors["地址"]
                  }]),
                  id: "address",
                  name: "地址",
                  placeholder: "請輸入地址",
                  rules: "required",
                  modelValue: $data.form.user.address,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.user.address = $event)
                }, null, 8, ["class", "modelValue"]),
                _hoisted_16,
                createVNode(_component_error_message, {
                  name: "地址",
                  class: "invalid-feedback"
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                withDirectives(createBaseVNode("textarea", {
                  id: "msg",
                  class: "form-control",
                  placeholder: "請輸入留言",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.form.message = $event),
                  style: { "height": "100px" }
                }, null, 512), [
                  [vModelText, $data.form.message]
                ]),
                _hoisted_19
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("button", {
              type: "submit",
              class: "btn btn-primary py-4 px-20 btnCustomHover fw-bold",
              disabled: !$options.isComplete
            }, "送出訂單", 8, _hoisted_21)
          ])
        ]),
        _: 1
      }, 8, ["onSubmit"])
    ])
  ], 64);
}
const UserCart = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  UserCart as default
};

import { S as Swal } from "./sweetalert2.all-EDrVvrnR.js";
import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, n as normalizeClass, z as withModifiers, F as Fragment, y as renderList, t as toDisplayString, r as resolveComponent, d as createVNode, f as createTextVNode } from "./index-9U_Khqeb.js";
const _sfc_main$1 = {
  props: ["pages"],
  methods: {
    updatePage(page) {
      this.$emit("emitPages", page);
    }
  }
};
const _hoisted_1$1 = { "aria-label": "Page navigation" };
const _hoisted_2$1 = { class: "pagination" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, "«", -1);
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = {
  key: 0,
  class: "page-link"
};
const _hoisted_6$1 = ["onClick"];
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", { "aria-hidden": "true" }, "»", -1);
const _hoisted_8$1 = [
  _hoisted_7$1
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", _hoisted_1$1, [
    createBaseVNode("ul", _hoisted_2$1, [
      createBaseVNode("li", {
        class: normalizeClass(["page-item", { disabled: !$props.pages.has_pre }])
      }, [
        createBaseVNode("a", {
          class: "page-link",
          href: "#",
          "aria-label": "Previous",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.updatePage($props.pages.current_page - 1), ["prevent"]))
        }, _hoisted_4$1)
      ], 2),
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.pages.total_pages, (page) => {
        return openBlock(), createElementBlock("li", {
          class: normalizeClass(["page-item", {
            active: page === $props.pages.current_page
          }]),
          key: page + 123
        }, [
          page === $props.pages.current_page ? (openBlock(), createElementBlock("span", _hoisted_5$1, toDisplayString(page), 1)) : (openBlock(), createElementBlock("a", {
            key: 1,
            class: "page-link",
            href: "#",
            onClick: withModifiers(($event) => $options.updatePage(page), ["prevent"])
          }, toDisplayString(page), 9, _hoisted_6$1))
        ], 2);
      }), 128)),
      createBaseVNode("li", {
        class: normalizeClass(["page-item", { disabled: !$props.pages.has_next }])
      }, [
        createBaseVNode("a", {
          class: "page-link",
          href: "#",
          "aria-label": "Next",
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.updatePage($props.pages.current_page + 1), ["prevent"]))
        }, _hoisted_8$1)
      ], 2)
    ])
  ]);
}
const PaginationComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const AllCoffee = "/CoffeeWorker/assets/AllCoffee-GPTIEMEv.avif";
const Expresso = "/CoffeeWorker/assets/Expresso-wTdxPeQz.avif";
const Americano = "/CoffeeWorker/assets/Americano-59cmnXA4.avif";
const MilkCoffee = "/CoffeeWorker/assets/MilkCoffee-83KBPtsP.avif";
const Chocolate = "/CoffeeWorker/assets/Chocolate-R2h0JHjf.avif";
const Special = "/CoffeeWorker/assets/Special-_5jxCVbd.avif";
var define_import_meta_env_default = { VITE_URL: "https://vue3-course-api.hexschool.io/v2", VITE_PATH: "sasimi2024", BASE_URL: "/CoffeeWorker/", MODE: "production", DEV: false, PROD: true, SSR: false };
const { VITE_URL, VITE_PATH } = define_import_meta_env_default;
const _sfc_main = {
  components: {
    PaginationComponent
  },
  data() {
    return {
      selectType: "全部商品",
      coffeeType: [
        {
          AllCoffee: "全部商品",
          imgSrc: AllCoffee
        },
        {
          Expresso: "濃縮咖啡",
          imgSrc: Expresso
        },
        {
          Americano: "美式咖啡",
          imgSrc: Americano
        },
        {
          MilkCoffee: "牛奶咖啡",
          imgSrc: MilkCoffee
        },
        {
          Chocolate: "巧克力咖啡",
          imgSrc: Chocolate
        },
        {
          Special: "特調咖啡",
          imgSrc: Special
        }
      ],
      products: [],
      pages: {}
    };
  },
  methods: {
    getImagePath(type) {
      return Object.keys(type)[0];
    },
    updateCategory(category) {
      this.selectType = category;
      if (category === "全部商品") {
        this.getProducts();
      } else {
        this.getProducts(1, category);
      }
    },
    getProducts(page = 1, category = "") {
      const url = `${VITE_URL}/api/${VITE_PATH}/products?page=${page}&category=${category}`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        this.pages = res.data.pagination;
      }).catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 1500
        });
      });
    },
    productStatement(id) {
      this.$router.push({ path: `/product/${id}` });
    }
  },
  mounted() {
    this.getProducts();
  }
};
const _hoisted_1 = { class: "container-fluid" };
const _hoisted_2 = { class: "row" };
const _hoisted_3 = { class: "col-12" };
const _hoisted_4 = { class: "pt-20 mb-6 fz-1 text-center fw-bold text-secondary" };
const _hoisted_5 = { class: "container" };
const _hoisted_6 = { class: "row" };
const _hoisted_7 = { class: "card d-flex justify-content-center align-items-center border-0" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "card-body" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "container my-10 mb-md-20" };
const _hoisted_12 = { class: "row" };
const _hoisted_13 = { class: "card h-100" };
const _hoisted_14 = { class: "card-img-container" };
const _hoisted_15 = ["src", "alt"];
const _hoisted_16 = { class: "card-body text-start" };
const _hoisted_17 = { class: "card-title fz-7 lh-base fw-bold" };
const _hoisted_18 = { class: "card-text" };
const _hoisted_19 = { key: 0 };
const _hoisted_20 = { class: "text-decoration-none" };
const _hoisted_21 = { class: "text-muted fw-bold fz-4" };
const _hoisted_22 = { key: 1 };
const _hoisted_23 = { class: "mr-1" };
const _hoisted_24 = { class: "text-muted fw-normal fz-6 lh-1" };
const _hoisted_25 = { class: "text-decoration-none" };
const _hoisted_26 = { class: "text-primary fz-4" };
const _hoisted_27 = { class: "card-footer border-0 bg-white text-end" };
const _hoisted_28 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PaginationComponent = resolveComponent("PaginationComponent");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("h2", _hoisted_4, toDisplayString($data.selectType), 1)
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("div", _hoisted_6, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.coffeeType, (type, idx) => {
          return openBlock(), createElementBlock("div", {
            class: "col-md-4 col-lg-2",
            key: idx
          }, [
            createBaseVNode("div", _hoisted_7, [
              createTextVNode(toDisplayString(type.imgPath) + " ", 1),
              createBaseVNode("img", {
                src: type.imgSrc,
                width: "200",
                height: "200",
                class: "img-thumbnail object-fit-cover"
              }, null, 8, _hoisted_8),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("a", {
                  class: "btn text-light-brown stretched-link fz-5",
                  onClick: ($event) => $options.updateCategory(Object.values(type)[0])
                }, toDisplayString(Object.values(type)[0]), 9, _hoisted_10)
              ])
            ])
          ]);
        }), 128))
      ])
    ]),
    createBaseVNode("div", _hoisted_11, [
      createBaseVNode("div", _hoisted_12, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.products, (product) => {
          return openBlock(), createElementBlock("div", {
            class: "col-md-6 col-lg-3 mb-8",
            key: product.id
          }, [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("img", {
                  src: product.imageUrl,
                  class: "card-img-top productImg",
                  alt: product.id
                }, null, 8, _hoisted_15)
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("h5", _hoisted_17, toDisplayString(product.title), 1),
                createBaseVNode("p", _hoisted_18, [
                  product.price === product.origin_price ? (openBlock(), createElementBlock("span", _hoisted_19, [
                    createTextVNode(" NT$ "),
                    createBaseVNode("ins", _hoisted_20, [
                      createBaseVNode("span", _hoisted_21, toDisplayString(product.price), 1)
                    ])
                  ])) : (openBlock(), createElementBlock("span", _hoisted_22, [
                    createTextVNode(" NT$ "),
                    createBaseVNode("s", _hoisted_23, [
                      createBaseVNode("span", _hoisted_24, toDisplayString(product.origin_price), 1)
                    ]),
                    createBaseVNode("ins", _hoisted_25, [
                      createBaseVNode("span", _hoisted_26, toDisplayString(product.price), 1)
                    ])
                  ]))
                ])
              ]),
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: withModifiers(($event) => $options.productStatement(`${product.id}`), ["prevent"]),
                  class: "w-100 btn btn-primary stretched-link mb-5 py-3 text-white fz-6 fw-bold"
                }, "商品明細", 8, _hoisted_28)
              ])
            ])
          ]);
        }), 128))
      ]),
      createVNode(_component_PaginationComponent, {
        pages: $data.pages,
        onEmitPages: $options.getProducts
      }, null, 8, ["pages", "onEmitPages"])
    ])
  ], 64);
}
const ProductsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5cee9893"]]);
export {
  ProductsList as default
};

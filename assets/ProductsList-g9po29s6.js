import { n as now, h as elementTransitionEnd, S as Swiper, f as SwiperSlide } from "./swiper-VRALD3tU.js";
import { S as Swal } from "./sweetalert2.all-bJU75qNM.js";
import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, n as normalizeClass, i as withModifiers, F as Fragment, h as renderList, t as toDisplayString, r as resolveComponent, d as createVNode, w as withCtx, f as createTextVNode, j as createBlock } from "./index-FBN-f_Ao.js";
function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode)
      return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode)
      return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "startX" : "startY"],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
      time: now()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode)
      return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1e3 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl)
        newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides)
          needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides)
          needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once("transitionEnd", () => {
          swiper.loopFix();
        });
      }
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        elementTransitionEnd(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce)
            return;
          emit("momentumBounce");
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed)
                return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit("_freeModeNoMomentumRelease");
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed)
              return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit("_freeModeNoMomentumRelease");
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit("_freeModeStaticRelease");
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}
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
const AllCoffee = "/CoffeeWorker/assets/AllCoffee-r4DNwLoa.png";
const Expresso = "/CoffeeWorker/assets/Expresso-xUZteEFI.png";
const Americano = "/CoffeeWorker/assets/Americano-AlCySmBX.png";
const MilkCoffee = "/CoffeeWorker/assets/MilkCoffee-QbLIcJeZ.png";
const Chocolate = "/CoffeeWorker/assets/Chocolate-cYvTeeZs.png";
const Special = "/CoffeeWorker/assets/Special-5gZqHQas.png";
var define_import_meta_env_default = { VITE_URL: "https://vue3-course-api.hexschool.io/v2", VITE_PATH: "sasimi2024", BASE_URL: "/CoffeeWorker/", MODE: "production", DEV: false, PROD: true, SSR: false };
const { VITE_URL, VITE_PATH } = define_import_meta_env_default;
const _sfc_main = {
  components: {
    PaginationComponent,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [freeMode],
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
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = { class: "card-body" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "d-md-none col-12" };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "container my-10 mb-md-20" };
const _hoisted_14 = { class: "row" };
const _hoisted_15 = { class: "card h-100" };
const _hoisted_16 = { class: "card-img-container" };
const _hoisted_17 = ["src", "alt"];
const _hoisted_18 = { class: "card-body text-start" };
const _hoisted_19 = { class: "card-title fz-7 lh-base fw-bold" };
const _hoisted_20 = { class: "card-text" };
const _hoisted_21 = { key: 0 };
const _hoisted_22 = { class: "text-decoration-none" };
const _hoisted_23 = { class: "text-muted fw-bold fz-4" };
const _hoisted_24 = { key: 1 };
const _hoisted_25 = { class: "mr-1" };
const _hoisted_26 = { class: "text-muted fw-normal fz-6 lh-1" };
const _hoisted_27 = { class: "text-decoration-none" };
const _hoisted_28 = { class: "text-primary fz-4" };
const _hoisted_29 = { class: "card-footer border-0 bg-white text-end" };
const _hoisted_30 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
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
            class: "d-none d-md-block col-md-4 col-lg-2",
            key: idx
          }, [
            createBaseVNode("div", _hoisted_7, [
              createTextVNode(toDisplayString(type.imgPath) + " ", 1),
              createBaseVNode("img", {
                src: type.imgSrc,
                width: "180",
                height: "180",
                class: "img-thumbnail object-fit-cover d-none d-md-block",
                alt: Object.values(type)[0]
              }, null, 8, _hoisted_8),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("a", {
                  class: normalizeClass(["btn text-light-brown stretched-link fz-5 text-nowrap", {
                    active: $data.selectType === Object.values(type)[0],
                    disabled: $data.selectType === Object.values(type)[0]
                  }]),
                  onClick: ($event) => $options.updateCategory(Object.values(type)[0])
                }, toDisplayString(Object.values(type)[0]), 11, _hoisted_10)
              ])
            ])
          ]);
        }), 128)),
        createBaseVNode("div", _hoisted_11, [
          createVNode(_component_swiper, {
            pagination: {
              clickable: true
            },
            slidesPerView: 3,
            spaceBetween: 15,
            freeMode: true,
            modules: $data.modules,
            class: "mySwiper"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.coffeeType, (type, idx) => {
                return openBlock(), createBlock(_component_swiper_slide, { key: idx }, {
                  default: withCtx(() => [
                    createBaseVNode("a", {
                      class: normalizeClass(["btn text-light-brown fz-5 text-nowrap", {
                        active: $data.selectType === Object.values(type)[0],
                        disabled: $data.selectType === Object.values(type)[0]
                      }]),
                      onClick: ($event) => $options.updateCategory(Object.values(type)[0])
                    }, toDisplayString(Object.values(type)[0]), 11, _hoisted_12)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["modules"])
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_13, [
      createBaseVNode("div", _hoisted_14, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.products, (product) => {
          return openBlock(), createElementBlock("div", {
            class: "col-md-6 col-lg-3 mb-8",
            key: product.id
          }, [
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("img", {
                  src: product.imageUrl,
                  class: "card-img-top productImg",
                  alt: product.id
                }, null, 8, _hoisted_17)
              ]),
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("h5", _hoisted_19, toDisplayString(product.title), 1),
                createBaseVNode("p", _hoisted_20, [
                  product.price === product.origin_price ? (openBlock(), createElementBlock("span", _hoisted_21, [
                    createTextVNode(" NT$ "),
                    createBaseVNode("ins", _hoisted_22, [
                      createBaseVNode("span", _hoisted_23, toDisplayString(product.price), 1)
                    ])
                  ])) : (openBlock(), createElementBlock("span", _hoisted_24, [
                    createTextVNode(" NT$ "),
                    createBaseVNode("s", _hoisted_25, [
                      createBaseVNode("span", _hoisted_26, toDisplayString(product.origin_price), 1)
                    ]),
                    createBaseVNode("ins", _hoisted_27, [
                      createBaseVNode("span", _hoisted_28, toDisplayString(product.price), 1)
                    ])
                  ]))
                ])
              ]),
              createBaseVNode("div", _hoisted_29, [
                createBaseVNode("button", {
                  type: "button",
                  onClick: withModifiers(($event) => $options.productStatement(`${product.id}`), ["prevent"]),
                  class: "w-100 btn btn-primary stretched-link mb-4 py-3 text-white fz-5 fw-bold"
                }, "商品明細", 8, _hoisted_30)
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
const ProductsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bcda788a"]]);
export {
  ProductsList as default
};

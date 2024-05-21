import { e as elementChildren, c as createElement, m as makeElementsArray, a as elementOuterSize, b as elementIndex, d as elementParents, g as getDocument, S as Swiper, f as SwiperSlide } from "./swiper-VRALD3tU.js";
import { S as Swal } from "./sweetalert2.all-bJU75qNM.js";
import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, h as renderList, e as createStaticVNode, f as createTextVNode, t as toDisplayString, i as withModifiers, j as createBlock, p as pushScopeId, g as popScopeId } from "./index-FBN-f_Ao.js";
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = createElement("div", checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = "";
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl)
      return;
    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index)
        return;
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
        el.forEach((subEl) => {
          subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach((bulletEl) => {
        const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach((bullet) => {
          const bulletIndex = elementIndex(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          } else if (swiper.isElement) {
            bullet.setAttribute("part", "bullet");
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, "next");
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(" "));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
            }
          }
          setSideBullets(firstDisplayedBullet, "prev");
          setSideBullets(lastDisplayedBullet, "next");
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.forEach((bullet) => {
          bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === "fraction") {
        subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === "progressbar") {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
        } else {
          progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === "horizontal") {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === "custom" && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0)
          emit("paginationRender", subEl);
      } else {
        if (subElIndex === 0)
          emit("paginationRender", subEl);
        emit("paginationUpdate", subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
      }
    });
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach((subEl) => {
      if (params.type !== "custom") {
        subEl.innerHTML = paginationHTML || "";
      }
      if (params.type === "bullets") {
        swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
      }
    });
    if (params.type !== "custom") {
      emit("paginationRender", el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el)
      return;
    let el;
    if (typeof params.el === "string" && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === "string") {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0)
      return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      if (el.length > 1) {
        el = el.filter((subEl) => {
          if (elementParents(subEl, ".swiper")[0] !== swiper.el)
            return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1)
      el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      if (params.type === "bullets" && params.clickable) {
        subEl.classList.add(...(params.clickableClass || "").split(" "));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === "bullets" && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === "progressbar" && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener("click", onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || "").split(" "));
          subEl.removeEventListener("click", onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets)
      swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
  }
  on("changeDirection", () => {
    if (!swiper.pagination || !swiper.pagination.el)
      return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach((subEl) => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on("init", () => {
    if (swiper.params.pagination.enabled === false) {
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on("activeIndexChange", () => {
    if (typeof swiper.snapIndex === "undefined") {
      update();
    }
  });
  on("snapIndexChange", () => {
    update();
  });
  on("snapGridLengthChange", () => {
    render();
    update();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
    }
  });
  on("lock unlock", () => {
    update();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
  let autoplayTimeLeft;
  let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl)
      return;
    if (e.target !== swiper.wrapperEl)
      return;
    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
    if (pausedByPointerEnter) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl)
      return void 0;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
    return currentSlideDelay;
  };
  const run = (delayForce) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed)
        return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit("autoplay");
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit("autoplay");
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }
    return delay;
  };
  const start = () => {
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    swiper.autoplay.running = true;
    run();
    emit("autoplayStart");
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit("autoplayStop");
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit("autoplayPause");
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop)
      return;
    if (autoplayTimeLeft < 0)
      autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running)
      return;
    autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    const document2 = getDocument();
    if (document2.visibilityState === "hidden") {
      pausedByInteraction = true;
      pause(true);
    }
    if (document2.visibilityState === "visible") {
      resume();
    }
  };
  const onPointerEnter = (e) => {
    if (e.pointerType !== "mouse")
      return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused)
      return;
    pause(true);
  };
  const onPointerLeave = (e) => {
    if (e.pointerType !== "mouse")
      return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener("pointerenter", onPointerEnter);
      swiper.el.addEventListener("pointerleave", onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener("pointerenter", onPointerEnter);
    swiper.el.removeEventListener("pointerleave", onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document2 = getDocument();
    document2.addEventListener("visibilitychange", onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document2 = getDocument();
    document2.removeEventListener("visibilitychange", onVisibilityChange);
  };
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on("_freeModeStaticRelease", () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on("_freeModeNoMomentumRelease", () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on("touchEnd", () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched)
      return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode)
      resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on("slideChange", () => {
    if (swiper.destroyed || !swiper.autoplay.running)
      return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}
const _imports_0 = "/CoffeeWorker/assets/banner-MAYwXisV.avif";
const _imports_1 = "/CoffeeWorker/assets/SelectCoffee-fVN3SKMP.png";
const _imports_2 = "/CoffeeWorker/assets/RoastCoffee-tMXTOwSO.png";
const _imports_3 = "/CoffeeWorker/assets/GrindCoffee-POnAjk19.png";
const _imports_4 = "/CoffeeWorker/assets/ExtractCoffee-tHO_0Spn.png";
var define_import_meta_env_default = { VITE_URL: "https://vue3-course-api.hexschool.io/v2", VITE_PATH: "sasimi2024", BASE_URL: "/CoffeeWorker/", MODE: "production", DEV: false, PROD: true, SSR: false };
const { VITE_URL, VITE_PATH } = define_import_meta_env_default;
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Pagination, Autoplay],
      newProducts: [],
      newProductShuffle: [],
      popularProducts: [],
      popularProductsShuffle: []
    };
  },
  methods: {
    getHomeProducts() {
      const url = `${VITE_URL}/api/${VITE_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        const grpProds = Object.groupBy(res.data.products, ({ unit }) => unit);
        this.newProducts = grpProds["新品上市"];
        this.newProductShuffle = this.shuffledArray(this.newProducts);
        this.popularProducts = grpProds["暢銷商品"];
        this.popularProductsShuffle = this.shuffledArray(this.popularProducts);
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
    shuffledArray(array) {
      const shuffled = array.slice().sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    },
    productStatement(id) {
      this.$router.push({ path: `/product/${id}` });
    }
  },
  mounted() {
    this.getHomeProducts();
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-aa37340d"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container-fluid position-relative text-center overflow-hidden" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "banner",
  class: "img-fluid w-100 mh-100 object-fit-cover"
}, null, -1));
const _hoisted_3 = { class: "row" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "position-absolute top-30 start-50 translate-middle" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "position-absolute end-10 fz-2 fw-bold fz-lg-1 text-light-brown" }, [
    /* @__PURE__ */ createTextVNode(" 徜徉咖啡的濃香 "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" 點亮工作的熱情 ")
  ])
], -1));
const _hoisted_5 = { class: "container mb-10 mb-md-20" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-center mt-10 mt-md-20 mb-6" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "fz-2 lh-sm fw-normal" }, "新品上市"),
  /* @__PURE__ */ createBaseVNode("span", { class: "fz-8 lh-base fw-normal" }, "不一樣的全新滋味")
], -1));
const _hoisted_7 = { class: "row pb-8" };
const _hoisted_8 = { class: "card cardZoom text-center mb-8 mb-lg-0" };
const _hoisted_9 = { class: "cardZoom-img-container" };
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "card-body" };
const _hoisted_12 = { class: "card-title mb-6 fz-6 lh-base fw-bold text-secondary" };
const _hoisted_13 = { class: "card-text text-start" };
const _hoisted_14 = { class: "text-dark-brown fw-normal fz-6 lh-1" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<div class="container-fluid my-10 my-md-20 py-10 py-md-20 bg-primary" data-v-aa37340d><div class="text-center my-6 text-white" data-v-aa37340d><h2 class="fz-2 lh-sm fw-normal" data-v-aa37340d>咖啡，還是咖啡</h2><span class="fz-8 lh-base fw-normal text-secondary" data-v-aa37340d>選豆、挑豆、烘豆、萃取，專注於咖啡</span></div><div class="row mt-4" data-v-aa37340d><div class="text-white" data-v-aa37340d><div class="row align-items-center" data-v-aa37340d><div class="col-md-1" data-v-aa37340d></div><div class="col-md-5 my-5 my-md-10" data-v-aa37340d><h6 class="fz-3 mb-6" data-v-aa37340d>1. 選豆（Selection）</h6><p class="fz-5 text-secondary" data-v-aa37340d>咖啡製作的第一步， 咖啡師會根據不同的口味偏好和特定的需求選擇合適的咖啡豆。 選擇過程考慮因素包括咖啡豆的產地、種類、種植海拔、處理方式等。 精心挑選的咖啡豆是確保一杯優質咖啡的關鍵。</p></div><div class="col-md-5" data-v-aa37340d><img src="' + _imports_1 + '" class="img-fluid object-fit-cover" alt="SelectCoffee" data-v-aa37340d></div><div class="col-md-1" data-v-aa37340d></div></div><div class="row timeline-inner my-5" data-v-aa37340d><div class="col-md-2" data-v-aa37340d></div><div class="col-md-8" data-v-aa37340d><hr style="border-width:3px;" data-v-aa37340d></div><div class="col-md-2" data-v-aa37340d></div></div><div class="row flex-md-row-reverse align-items-center justify-content-end" data-v-aa37340d><div class="col-md-1" data-v-aa37340d></div><div class="col-md-5 my-5 my-md-10 text-md-end" data-v-aa37340d><h6 class="fz-3 mb-6 text-start text-lg-end" data-v-aa37340d>2. 挑豆（Roasting）</h6><p class="fz-5 text-md-start text-secondary" data-v-aa37340d>咖啡豆在烘焙過程中會經歷挑豆的階段， 這是一種藝術和科學的結合。烘焙師會根據咖啡豆的特性和所需的口味， 控制烘焙的溫度、時間和烘焙方法，以達到理想的烘焙程度和風味特性。 烘焙過程會使咖啡豆釋放出豐富的香氣和風味，呈現出不同於生豆的獨特風味。</p></div><div class="col-md-5" data-v-aa37340d><img src="' + _imports_2 + '" class="img-fluid object-fit-cover" alt="SelectCoffee" data-v-aa37340d></div><div class="col-md-1 text-center" data-v-aa37340d></div></div><div class="row timeline-inner my-5" data-v-aa37340d><div class="col-md-2" data-v-aa37340d></div><div class="col-md-8" data-v-aa37340d><hr style="border-width:3px;" data-v-aa37340d></div><div class="col-md-2" data-v-aa37340d></div></div><div class="row align-items-center" data-v-aa37340d><div class="col-md-1" data-v-aa37340d></div><div class="col-md-5 my-5 my-md-10" data-v-aa37340d><h6 class="fz-3 mb-6" data-v-aa37340d>3. 烘豆（Grinding）</h6><p class="fz-5 text-secondary" data-v-aa37340d>烘焙後的咖啡豆需要被研磨成合適的顆粒大小， 以便於在萃取過程中充分釋放出咖啡的風味和香氣。 研磨程度的選擇取決於所使用的咖啡萃取方式，例如浸泡式、滴濾式或者濃縮式。 合適的研磨程度可以確保咖啡在萃取過程中均勻地釋放出味道，並且保持一定的酸度和甜度。</p></div><div class="col-md-5" data-v-aa37340d><img src="' + _imports_3 + '" class="img-fluid object-fit-cover" alt="SelectCoffee" data-v-aa37340d></div><div class="col-md-1" data-v-aa37340d></div></div><div class="row timeline-inner my-5" data-v-aa37340d><div class="col-md-2" data-v-aa37340d></div><div class="col-md-8" data-v-aa37340d><hr style="border-width:3px;" data-v-aa37340d></div><div class="col-md-2" data-v-aa37340d></div></div><div class="row flex-md-row-reverse align-items-center justify-content-end" data-v-aa37340d><div class="col-md-1" data-v-aa37340d></div><div class="col-md-5 my-5 my-md-10 text-md-end" data-v-aa37340d><h6 class="fz-3 mb-6 text-start text-lg-end" data-v-aa37340d>4. 萃取（Extraction）</h6><p class="fz-5 text-md-start text-secondary" data-v-aa37340d>萃取是將研磨後的咖啡與水接觸， 通過不同的萃取方式提取出咖啡的風味和香氣。 萃取過程中，水溫、水質、水量、浸泡時間等因素都會影響最終的咖啡口感。 精心控制萃取過程可以調整咖啡的濃度、口感和香氣，從而製作出一杯符合個人口味的完美咖啡。</p></div><div class="col-md-5" data-v-aa37340d><img src="' + _imports_4 + '" class="img-fluid object-fit-cover" alt="SelectCoffee" data-v-aa37340d></div><div class="col-md-1 text-center" data-v-aa37340d></div></div></div></div></div>', 1);
const _hoisted_17 = { class: "container-fluid pb-10 pb-md-12 bg-coronation" };
const _hoisted_18 = { class: "container text-center" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-center pt-10 pt-md-20 mb-6" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "fz-2 lh-sm fw-normal" }, "暢銷商品"),
  /* @__PURE__ */ createBaseVNode("span", { class: "fz-8 lh-base fw-normal" }, "網路人氣熱銷，千萬別錯過")
], -1));
const _hoisted_20 = { class: "d-none d-md-block" };
const _hoisted_21 = { class: "row" };
const _hoisted_22 = { class: "card border-0" };
const _hoisted_23 = ["src", "alt"];
const _hoisted_24 = { class: "card-body text-center" };
const _hoisted_25 = { class: "card-title fz-6 lh-base fw-normal" };
const _hoisted_26 = { class: "card-text" };
const _hoisted_27 = { class: "text-muted fw-bold fz-6 lh-1" };
const _hoisted_28 = { class: "d-md-none" };
const _hoisted_29 = { class: "card border-0" };
const _hoisted_30 = { class: "card-img-container" };
const _hoisted_31 = ["src", "alt"];
const _hoisted_32 = { class: "card-body text-center" };
const _hoisted_33 = { class: "card-title fz-6 lh-base fw-normal" };
const _hoisted_34 = { class: "card-text" };
const _hoisted_35 = { class: "text-muted fw-bold fz-6 lh-1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_swiper = resolveComponent("swiper");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      _hoisted_2,
      createBaseVNode("div", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_RouterLink, {
          to: "/products",
          type: "button",
          class: "btn-order position-absolute bottom-10 bottom-lg-20 end-10"
        }, {
          default: withCtx(() => [
            createTextVNode(" 訂購去 ")
          ]),
          _: 1
        })
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      _hoisted_6,
      createBaseVNode("div", _hoisted_7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.newProductShuffle, (product) => {
          return openBlock(), createElementBlock("div", {
            class: "col-12 col-md-6 col-lg-3",
            key: product.id
          }, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("img", {
                  src: product.imageUrl,
                  class: "card-img-top cardZoom-img-top",
                  alt: "product.id"
                }, null, 8, _hoisted_10)
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("h5", _hoisted_12, toDisplayString(product.title), 1),
                createBaseVNode("p", _hoisted_13, [
                  createBaseVNode("small", _hoisted_14, "NT$ " + toDisplayString(product.price), 1)
                ]),
                createBaseVNode("a", {
                  class: "btn btn-outline-primary stretched-link w-100 fw-bold py-3 fz-5",
                  onClick: withModifiers(($event) => $options.productStatement(`${product.id}`), ["prevent"])
                }, "商品明細", 8, _hoisted_15)
              ])
            ])
          ]);
        }), 128))
      ])
    ]),
    _hoisted_16,
    createBaseVNode("div", _hoisted_17, [
      createBaseVNode("div", _hoisted_18, [
        _hoisted_19,
        createBaseVNode("div", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.popularProductsShuffle, (product) => {
              return openBlock(), createElementBlock("div", {
                class: "col-md-6 col-lg-3 mb-8",
                key: product.id
              }, [
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("img", {
                    src: product.imageUrl,
                    class: "card-img-top",
                    alt: product.id
                  }, null, 8, _hoisted_23),
                  createBaseVNode("div", _hoisted_24, [
                    createBaseVNode("h5", _hoisted_25, toDisplayString(product.title), 1),
                    createBaseVNode("p", _hoisted_26, [
                      createBaseVNode("small", _hoisted_27, "NT$ " + toDisplayString(product.price), 1)
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_28, [
          createVNode(_component_swiper, {
            pagination: true,
            autoplay: { delay: 4e3 },
            modules: $data.modules,
            class: "mySwiper"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.popularProductsShuffle, (product) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  key: product.id
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_29, [
                      createBaseVNode("div", _hoisted_30, [
                        createBaseVNode("img", {
                          src: product.imageUrl,
                          class: "card-img-top",
                          alt: product.id
                        }, null, 8, _hoisted_31)
                      ]),
                      createBaseVNode("div", _hoisted_32, [
                        createBaseVNode("h5", _hoisted_33, toDisplayString(product.title), 1),
                        createBaseVNode("p", _hoisted_34, [
                          createBaseVNode("small", _hoisted_35, "NT$ " + toDisplayString(product.price), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["modules"])
        ]),
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
      ])
    ])
  ], 64);
}
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aa37340d"]]);
export {
  HomeView as default
};

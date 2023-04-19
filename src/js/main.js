const navigation = new Navigation();
const controller = new ScrollMagic.Controller();

//#region Header
const headerTiming = 10 * 1e3;
const headerSwiperProgressElems = {
    numCurSlide: document.getElementById("header-cur-slide"),
    numCountSlides: document.getElementById("header-count-slides"),
};

const headerTimer = {
    path: document.getElementById("timer-path"),
    timerId: undefined,
    frequency: 50,
    length: headerTiming,
    start() {
        let progress = 1;
        this.timerId = setInterval(() => {
            progress -= this.frequency / this.length;
            this.setPath(progress);
        }, this.frequency);
    },
    stop() {
        this.setPath(0);
        if (this.timerId) clearInterval(this.timerId);
        setTimeout(() => {
            this.setPath(1);
        }, 400);
    },
    setPath(percent) {
        this.path.style.strokeDasharray = [440 * percent, 440];
    },
};

const headerSwiper = new Swiper("#header-bg-swiper", {
    loop: true,
    effect: "cards",
    cardsEffect: {
        perSlideOffset: 20,
        perSlideRotate: 4,
    },
    autoplay: {
        delay: headerTiming,
        disableOnInteraction: false,
        waitForTransition: true,
    },
    speed: 1000,
    navigation: {
        nextEl: "#header-bg-swiper-next",
    },
    on: {
        init: function () {
            headerSwiperProgressElems.numCountSlides.textContent = String(
                this.slides.length
            ).padStart(2, "0");
            headerTimer.start();
        },
        slideNextTransitionStart: function () {
            headerSwiperProgressElems.numCurSlide.textContent = String(
                this.realIndex + 1
            ).padStart(2, "0");
            headerTimer.stop();
        },
        slideNextTransitionEnd: function () {
            headerTimer.start();
        },
    },
});
//#endregion

//#region intro
const introSwiperProgressElems = {
    numCurSlide: document.getElementById("intro-cur-slide"),
    numCountSlides: document.getElementById("intro-count-slides"),
};
const introSwiper = new Swiper("#intro-img-swiper", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition: true,
    },
    speed: 1000,
    on: {
        init: function () {
            introSwiperProgressElems.numCountSlides.textContent = String(
                this.slides.length
            ).padStart(2, "0");
        },
        slideNextTransitionStart: function () {
            introSwiperProgressElems.numCurSlide.textContent = String(
                this.realIndex + 1
            ).padStart(2, "0");
        },
    },
});

new ScrollMagic.Scene({
    duration: 600,
    triggerElement: "#intro",
    // triggerHook: "onLeave",
})
    // .setPin("#intro")
    .setTween(
        new TimelineMax()
            .add(
                TweenMax.to("#intro_main-text", {
                    opacity: 1,
                })
            )
            .add(
                TweenMax.to("#intro-text01", {
                    opacity: 1,
                })
            )
            .add(
                TweenMax.to("#intro-text02", {
                    opacity: 1,
                })
            )
    )
    .addTo(controller);

new ScrollMagic.Scene({
    duration: 600,
    triggerElement: "#intro_main-text",
    triggerHook: "onLeave",
})
    .setTween(
        new TimelineMax()
            .add(
                TweenMax.to("#intro-img-swiper-box", {
                    opacity: 1,
                    bottom:
                        parseInt(
                            getComputedStyle(
                                document.getElementById("intro-img-swiper-box")
                            ).bottom
                        ) + 100,
                })
            )
            .add(
                TweenMax.to("#intro-img", {
                    opacity: 1,
                    bottom:
                        parseInt(
                            getComputedStyle(
                                document.getElementById("intro-img")
                            ).bottom
                        ) + 100,
                })
            )
    )
    .addTo(controller);

//#endregion

//#region about
new ScrollMagic.Scene({
    duration: 600,
    triggerElement: "#about-trigger",
})
    .setTween(
        new TimelineMax()
            .add(
                TweenMax.to("#about-title", {
                    opacity: 1,
                })
            )
            .add(
                TweenMax.to("#about-text", {
                    opacity: 1,
                })
            )
            .add(
                TweenMax.to("#about-but", {
                    opacity: 1,
                })
            )
            .add(
                TweenMax.to("#about-chalet", {
                    opacity: 1,
                })
            )
            .add(
                TweenMax.to("#about-house", {
                    opacity: 1,
                    bottom: 0,
                })
            )
    )
    .addTo(controller);
//#endregion

//#region habbit
const habbitSwiperProgressElems = {
    numCurSlide: document.getElementById("habbit-cur-slide"),
    numCountSlides: document.getElementById("habbit-count-slides"),
};

const habbitImgSwiper = new Swiper("#habbit-img-swiper", {
    loop: true,
    speed: 500,
    allowTouchMove: false,
    navigation: {
        nextEl: "#habbit-swiper-next",
        prevEl: "#habbit-swiper-prev",
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["-100%", 0, 0],
        },
    },
    on: {
        init: function () {
            habbitSwiperProgressElems.numCountSlides.textContent = String(
                this.slides.length
            ).padStart(2, "0");
        },
        slideNextTransitionStart: function () {
            habbitSwiperProgressElems.numCurSlide.textContent = String(
                this.realIndex + 1
            ).padStart(2, "0");
        },
        slidePrevTransitionStart: function () {
            habbitSwiperProgressElems.numCurSlide.textContent = String(
                this.realIndex + 1
            ).padStart(2, "0");
        },
    },
});

const habbitInfoSwiper = new Swiper("#habbit-info-swiper", {
    loop: true,
    allowTouchMove: false,
    speed: 500,
    effect: "creative",
    slidesPerView: 1,
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
            opacity: 0,
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    navigation: {
        nextEl: "#habbit-swiper-next",
        prevEl: "#habbit-swiper-prev",
    },
});
//#endregion

//#region bering
const beringSwiper = new Swiper("#bering-swiper", {
    // loop: true,
    initialSlide: 2,
    speed: 1000,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    preventInteractionOnTransition: true,
    // roundLengths: true,
    navigation: {
        nextEl: "#bering-swiper-next",
        prevEl: "#bering-swiper-prev",
    },
});

beringSwiper.on("slideNextTransitionEnd", function () {
    const slide = this.slides[0];
    slide.classList.add("invisible");
    this.removeSlide(0);
    this.appendSlide(slide);
    setTimeout(() => {
        this.slides.at(-1).classList.remove("invisible");
    }, 30);
});
beringSwiper.on("slidePrevTransitionEnd", function () {
    const ind = this.slides.length - 1;
    const slide = this.slides[ind];
    slide.classList.add("invisible");
    this.removeSlide(ind);
    this.prependSlide(slide);
    setTimeout(() => {
        this.slides.at(0).classList.remove("invisible");
    }, 30);
});
//#endregion

//#region services
const servicesThumbSwiper = new Swiper("#services-thumb-swiper", {
    speed: 1000,
    slidesPerGroup: 1,
    slidesPerView: "auto",
    spaceBetween: 20,
});

const servicesInfoSwiper = new Swiper("#services-info-swiper", {
    speed: 1000,
    allowTouchMove: false,
});

const servicesImgSwiper = new Swiper("#services-img-swiper", {
    initialSlide: servicesInfoSwiper.slides.length - 1,
    speed: 1000,
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
    },
    thumbs: {
        swiper: servicesThumbSwiper,
    },
    on: {
        slideNextTransitionStart: function () {
            servicesInfoSwiper.slideTo(this.realIndex);
        },
        slidePrevTransitionStart: function () {
            servicesInfoSwiper.slideTo(this.realIndex);
        },
    },
});
servicesImgSwiper.slideNext();
//#endregion

//#region tours
const toursCardSwiper = new Swiper("#tours-card-swiper", {
    speed: 1000,
    slidesPerGroup: 1,
    slidesPerView: "auto",
    spaceBetween: 16,
    navigation: {
        nextEl: "#tours-swiper-next",
        prevEl: "#tours-swiper-prev",
    },
});

new ScrollMagic.Scene({
    duration: 500,
    triggerElement: "#tours",
})
    .setTween(
        new TimelineMax()
            .add(
                TweenMax.to("#tours-title", {
                    opacity: 1,
                    top: -74,
                })
            )
            .add(
                TweenMax.to("#tours-grandtext", {
                    opacity: 1,
                })
            )
    )
    .addTo(controller);
//#endregion

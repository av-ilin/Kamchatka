const navigation = new Navigation();

//#region scrollnagic
const controller = new ScrollMagic.Controller();

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
        delay: 10000,
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

//#endregion

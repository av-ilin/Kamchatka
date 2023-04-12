const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration: window.innerHeight + 500,
    triggerElement: "#intro",
    triggerHook: "onEnter",
})
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

const introLscape = document.getElementsByClassName("intro__lscape");
new ScrollMagic.Scene({
    duration: window.innerHeight / 2,
    triggerElement: "#intro-text01",
})
    .setTween(
        new TimelineMax()
            .add(
                TweenMax.to("#intro-img01", {
                    opacity: 1,
                    bottom:
                        parseInt(getComputedStyle(introLscape[0]).bottom) + 100,
                })
            )
            .add(
                TweenMax.to("#intro-img02", {
                    opacity: 1,
                    bottom:
                        parseInt(getComputedStyle(introLscape[1]).bottom) + 100,
                })
            )
    )
    .addTo(controller);

new ScrollMagic.Scene({
    duration: window.innerHeight + 100,
    triggerElement: "#about",
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

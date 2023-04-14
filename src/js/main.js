const navigation = new Navigation();
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

const introLscape = document.getElementsByClassName("intro__lscape");
new ScrollMagic.Scene({
    duration: 600,
    triggerElement: "#intro_main-text",
    triggerHook: "onLeave",
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

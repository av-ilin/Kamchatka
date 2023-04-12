const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration: 300, // the scene should last for a scroll distance of 100px
    // offset: intro.getBoundingClientRect().y, // start this scene after scrolling for 50px
    triggerElement: "#intro",
    triggerHook: "onLeave",
})
    .setPin("#intro")
    .setTween(["#intro_main-text", "#intro-text01", "#intro-text02"], {
        opacity: 1,
    })
    .addTo(controller);

const introLscape = document.getElementsByClassName("intro__lscape");
new ScrollMagic.Scene({
    duration: 700,
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

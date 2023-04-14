const nav = document.getElementById("nav");
const navBg = document.getElementsByClassName("nav__bg")[0];
const navMenu = document.getElementsByClassName("nav__menu")[0];
const navLogo = document.getElementById("nav-logo");
const navBurger = document.getElementById("nav-burger");

navLogo.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

navBurger.onclick = () => {
    if (nav.classList.contains("active")) {
        document.body.style.overflow = "";
        nav.classList.remove("active");
        setTimeout(() => {
            navBg.style.display = "none";
            navMenu.style.display = "none";
        }, 730);
    } else {
        document.body.style.overflow = "hidden";
        navBg.style.display = "";
        navMenu.style.display = "";
        setTimeout(() => {
            nav.classList.add("active");
        }, 30);
    }
};

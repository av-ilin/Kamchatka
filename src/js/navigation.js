class Navigation {
    static nav = document.getElementById("nav");
    static bg = document.getElementsByClassName("nav__bg")[0];
    static menu = document.getElementsByClassName("nav__menu")[0];
    static logo = document.getElementById("nav-logo");
    static burger = document.getElementById("nav-burger");
    static refs = {
        items: Array.from(document.getElementsByClassName("nav__menu-item")),
        about: document.getElementsByClassName("about__logo")[0],
    };

    constructor() {
        Navigation.logo.onclick = () => {
            this.navOff();
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        Navigation.burger.onclick = () => {
            if (Navigation.nav.classList.contains("active")) this.navOff();
            else this.navOn();
        };

        window.addEventListener("scroll", () => {
            if (
                window.scrollY > 20 &&
                !Navigation.nav.classList.contains("down")
            )
                Navigation.nav.classList.add("down");
            if (
                window.scrollY < 20 &&
                Navigation.nav.classList.contains("down")
            )
                Navigation.nav.classList.remove("down");
        });

        Navigation.refs.items.forEach((navItem, index) => {
            navItem.onclick = () => {
                this.navTo(index);
            };
        });
    }

    navOff() {
        document.body.style.overflow = "";
        Navigation.nav.classList.remove("active");
        setTimeout(() => {
            Navigation.bg.style.display = "none";
            Navigation.menu.style.display = "none";
        }, 730);
    }

    navOn() {
        document.body.style.overflow = "hidden";
        Navigation.bg.style.display = "";
        Navigation.menu.style.display = "";
        setTimeout(() => {
            Navigation.nav.classList.add("active");
        }, 30);
    }

    navTo(index) {
        this.navOff();

        switch (index % 6) {
            case 0:
                Navigation.refs.about.scrollIntoView({ behavior: "smooth" });
                break;
        }
    }
}

class Navigation {
    static nav = document.getElementById("nav");
    static bg = document.getElementsByClassName("nav__bg")[0];
    static menu = document.getElementsByClassName("nav__menu")[0];
    static logo = document.getElementById("nav-logo");
    static burger = document.getElementById("nav-burger");
    static refs = {
        items: Array.from(document.getElementsByClassName("nav-item")),
        about: document.getElementsByClassName("about")[0],
        habit: document.getElementsByClassName("habit")[0],
        bering: document.getElementsByClassName("bering")[0],
        services: document.getElementsByClassName("services")[0],
        tours: document.getElementsByClassName("tours")[0],
        contacts: document.getElementsByClassName("footer")[0],
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
                Navigation.refs.about.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                });
                break;
            case 1:
                Navigation.refs.habit.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                });
                break;
            case 2:
                Navigation.refs.bering.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                });
                break;
            case 3:
                Navigation.refs.services.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                });
                break;
            case 4:
                Navigation.refs.tours.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
                break;
            case 5:
                Navigation.refs.contacts.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
                break;
        }
    }
}

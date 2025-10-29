function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.querySelector(".navlinks").classList.toggle("navlinks-2");
}
window.onscroll = () => {
    document.getElementById("menu-bar").classList.remove("change");
    document.querySelector(".navlinks").classList.remove("navlinks-2");
};



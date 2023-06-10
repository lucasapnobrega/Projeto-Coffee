const menu = document.querySelector("#menu-icon")
const list = document.querySelector(".header-list")

menu.addEventListener("click", () => {
    list.classList.toggle("active")
})

window.onscroll = () => {
    list.classList.remove("active")
}
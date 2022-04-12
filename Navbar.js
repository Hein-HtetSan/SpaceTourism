var links = document.querySelectorAll(".my-navbar a")

links.forEach(a => {
    a.addEventListener("click", () => {
        resetLinks();
        a.classList.add("activeClass");
    })
})

function resetLinks() {
    links.forEach(a => {
        a.classList.remove("activeClass");
    })
}

var sideBarLinks = document.querySelectorAll(".sidebar-navbar li")

sideBarLinks.forEach(li => {
    li.addEventListener('click', () => {
        resetSidebarLinks();
        li.classList.add("activeSidebarItem")
    })
})
function resetSidebarLinks() {
    sideBarLinks.forEach(li => {
        li.classList.remove("activeSidebarItem");
    })
}
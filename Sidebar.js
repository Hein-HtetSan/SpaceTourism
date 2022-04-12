const btnBar = document.querySelector(".btn-bars")
const Sidebar = document.querySelector(".aside")

const closeBtn = document.querySelector('.close-btn')

btnBar.addEventListener("click", function() {
    if(Sidebar.classList.contains("show-aside")){
        Sidebar.classList.remove("show-aside");
    } else{
        Sidebar.classList.add('show-aside')
    }
})


    closeBtn.addEventListener("click", function() {
        Sidebar.classList.remove("show-aside");
    })

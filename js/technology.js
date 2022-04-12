const activeLinks = document.querySelectorAll(".height-of-list div")
activeLinks.forEach(div => {
    div.addEventListener('click', () => {
        resetLinks();
        div.classList.add("activeClass")
    })
})
function resetLinks() {
    activeLinks.forEach(div => {
        div.classList.remove('activeClass')
    })
}

const headName = document.querySelector('.content-name')
const contentInfo = document.querySelector('.content-info')
const pngImage = document.querySelector('.png')

const itemOfTech = document.querySelectorAll(".btns")


let items = [
    {
        name: "Launch vehicle",
        info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        img: '/starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
    },
    {
        name: "Space capsule",
        info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        img: '/starter-code/assets/technology/image-space-capsule-portrait.jpg'
    },
    {
        name: "Spaceport",
        info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        img: '/starter-code/assets/technology/image-spaceport-portrait.jpg'
    },
]
let currentItem = 0;
itemOfTech.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const eachBtn = e.currentTarget.classList;
        if(eachBtn.contains('num1')) {
            currentItem = 0;
            showItem();
        } else if (eachBtn.contains('num2')) {
            currentItem = 1;
            showItem();
        } else {
            currentItem = 2;
            showItem();
        }
    })
})


function showItem() {
    const item = items[currentItem];
    headName.textContent = item.name;
    contentInfo.textContent = item.info;
    pngImage.src = item.img;
}
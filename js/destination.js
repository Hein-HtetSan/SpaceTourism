var activeLinks = document.querySelectorAll(".list-group-content a")
activeLinks.forEach(a => {
    a.addEventListener('click', () => {
        resetLinks();
        a.classList.add("activeLink")
    })
})
function resetLinks() {
    activeLinks.forEach(a => {
        a.classList.remove('activeLink')
    })
}

const itemOfgalaxy = document.querySelectorAll(".btns")

const header = document.querySelector(".content-head")
const info = document.querySelector(".content-info")
const distance = document.querySelector(".distance-info")
const time = document.querySelector(".time-info")
const img = document.querySelector(".png")

const btn1_1 = document.querySelectorAll(".btn1-1")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")



let items = [
    {
        name: "Moon",
        info: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        time: "3 days",
        img: './starter-code/assets/destination/image-moon.png'
    },
    {
        name: "Mars",
        info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        time: "9 months",
        img: './starter-code/assets/destination/image-mars.png'
    },
    {
        name: "Europa",
        info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        time: "3 years",
        img: './starter-code/assets/destination/image-europa.png'

    },
    {
        name: "Titan",
        info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        time: "7 years",
        img: './starter-code/assets/destination/image-titan.png'
    },
]

let currentItem = 0

window.addEventListener("DOMcontentloaded", function(){
    console.log('working...')
    showitems()
})

itemOfgalaxy.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const eachitem = e.currentTarget.classList;
        if(eachitem.contains('moon')){
            currentItem = 0;
            showitems()
        } else if (eachitem.contains('mars')) {
            currentItem = 1;
            showitems()
        } else if (eachitem.contains('europa')){
            currentItem = 2;
            showitems()
        } else {
            currentItem = 3;
            showitems()
        }
    })
})
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > items.length - 1) {
        currentItem =0;
    }
    showitems();
}) 
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem =  items.length - 1;
    }
    showitems();
}) 



function showitems() {
    const item = items[currentItem]
    header.textContent = item.name;
    info.textContent = item.info;
    distance.textContent = item.distance;
    time.textContent = item.time;
    img.src = item.img;
}
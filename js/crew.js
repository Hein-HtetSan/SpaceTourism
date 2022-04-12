var activeLinks = document.querySelectorAll(".indicator-btns div")

    activeLinks.forEach(div => {
        div.addEventListener('click', () => {
            resetLinks();
            div.classList.add("activeone");
        })
    })
function resetLinks() {
    activeLinks.forEach(div => {
        div.classList.remove('activeone')
    })
}

const img = document.querySelector(".png")
const head = document.querySelector(".content-head")
const names = document.querySelector(".content-name")
const info = document.querySelector(".content-info")
const btnsofperson = document.querySelectorAll(".sub-btn")

const btn1_1 = document.querySelectorAll(".btn1-1")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let items = [
    {
        name: 'Anousheh Ansari',
        job: 'Flight Engineer',
        info: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        img: './starter-code/assets/crew/image-anousheh-ansari.png'
    },
    {
        name: 'Douglas Hurley',
        job: 'Commander',
        info: '  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        img: './starter-code/assets/crew/image-douglas-hurley.png'
    },
    {
        name: 'Victor Glover',
        job: 'Pilot',
        info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        img: './starter-code/assets/crew/image-victor-glover.png'
    },
    {
        name: 'Mission Specialist',
        job: 'Mark Shuttleworth',
        info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        img: './starter-code/assets/crew/image-mark-shuttleworth.png'
    },
]
let currentItem = 0;




window.addEventListener("DOMcontentloaded", function() {
    console.log("working...")
    showPerson()
})

btnsofperson.forEach(function(btn){
    btn.addEventListener("click", function(b){
        const target = b.currentTarget.classList;
        if(target.contains('btn1')){
            currentItem = 0;
            showPerson();
        } else if (target.contains('btn2')){
            currentItem = 1;
            showPerson();
        } else if (target.contains('btn3')){
            currentItem = 2;
            showPerson();
        } else {
            currentItem = 3;
            showPerson();
        }
    })
})

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > items.length - 1) {
        currentItem =0;
    }
    showPerson();
}) 
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem =  items.length - 1;
    }
    showPerson();
})





function showPerson() {
    const person = items[currentItem]
    img.src = person.img;
    head.textContent = person.job;
    names.textContent = person.name;
    info.textContent = person.info;
}
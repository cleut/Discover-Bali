// code by Rik Lomas @riklomas - SuperHi Javascript for Designers

// sets initial page number
let pageNumber = 0

// defines object items
const pages = [
    { copy: "Tegalalang Rice Terrace", bgImage: "url('/assets/Terrace.jpg')" },
    { copy: "Kelingking Beach", bgImage: "url('/assets/Beach.jpg')" },
    { copy: "Jalan Monkey Forest", bgImage: "url('/assets/Monkey.jpg')" },
    { copy: "Aling-Align Waterfall", bgImage: "url('/assets/Waterfall.jpg')" }
]

// selects elements on the page
const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2")
const bodyTag = document.querySelector("body")

// defines the next function, increases page number by 1 and runs the update section function
const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }

    updateSection()
}

// defines the previous function, decreases page number by 1 and runs the update section function
const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    updateSection()
}

// defines the random function and runs the update section function
const random = function () {
    pageNumber = Math.floor( Math.random() * pages.length )

    updateSection()
}

// updates the h2 and body selecting the correct object according to the page number
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    bodyTag.style.backgroundImage = pages[pageNumber].bgImage
}

// makes the next button work by clicking and executing the next function
nextTag.addEventListener("click", function () {
    next()
})

// makes the previous button work by clicking and executing the previous function
previousTag.addEventListener("click", function () {
    previous()
})

randomTag.addEventListener("click", function () {
    random()
})

// makes the arrow keys work by listening to a specific arrow event
document.addEventListener("keyup", function(event) {
    if (event.key == "ArrowRight") {
        next()
    }

    if (event.key == "ArrowLeft") {
        previous()
    }
})
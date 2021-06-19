// code by Rik Lomas @riklomas - SuperHi Javascript for Designers

let pageNumber = 0

const pages = [
    { copy: "Tegalalang Rice Terrace", bgImage: "url('/assets/Terrace.jpg')" },
    { copy: "Kelingking Beach", bgImage: "url('/assets/Beach.jpg')" },
    { copy: "Jalan Monkey Forest", bgImage: "url('/assets/Monkey.jpg')" },
    { copy: "Aling-Align Waterfall", bgImage: "url('/assets/Waterfall.jpg')" }
]

const nextTag = document.querySelector("footer img.next")
const previousTag = document.querySelector("footer img.prev")
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2")
const bodyTag = document.querySelector("body")

const next = function () {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }

    updateSection()
}

const previous = function () {
    pageNumber = pageNumber - 1

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    updateSection()
}

const random = function () {
    pageNumber = Math.floor( Math.random() * pages.length )

    updateSection()
}

const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy
    bodyTag.style.backgroundImage = pages[pageNumber].bgImage
}

nextTag.addEventListener("click", function () {
    next()
})

previousTag.addEventListener("click", function () {
    previous()
})

randomTag.addEventListener("click", function () {
    random()
})

document.addEventListener("keyup", function(event) {
    if (event.key == "ArrowRight") {
        next()
    }

    if (event.key == "ArrowLeft") {
        previous()
    }
})
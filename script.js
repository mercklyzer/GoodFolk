let live = document.querySelector(".live-container");
let life = document.querySelector(".life-container");
let of = document.querySelector(".of-container");
let good_folk = document.querySelector(".goodfolk-container");

window.addEventListener("load", () => {
    live.classList.add("change");
    life.classList.add("change");
    of.classList.add("change");
    good_folk.classList.add("change");
});


// cards script
let front_card = document.querySelector(".front-card");
let back_card = document.querySelector(".back-card");
// put front card to the back
Array.from(document.querySelectorAll(".price-btn")).forEach(item => {
    item.onclick = () =>{
        item.parentElement.parentElement.classList.toggle("change");
    }
});

Array.from(document.querySelectorAll(".back-btn")).forEach(item => {
    item.onclick = () =>{
        item.parentElement.parentElement.classList.toggle("change");
    }
});

//events when clicking the shirt picture
let popup = document.querySelector(".popup-shirt");

// first
document.getElementsByClassName("front-image first")[0].addEventListener("click", () =>{
    document.getElementsByClassName("shirt-image first")[0].classList.toggle("active");
    popup.classList.toggle("active");
});

// second
document.getElementsByClassName("front-image second")[0].addEventListener("click", () =>{
    document.getElementsByClassName("shirt-image second")[0].classList.toggle("active");
    popup.classList.toggle("active");
});

// third
document.getElementsByClassName("front-image third")[0].addEventListener("click", () =>{
    document.getElementsByClassName("shirt-image third")[0].classList.add("active");
    popup.classList.toggle("active");
});

let close_preview = document.querySelector(".exit-preview");
close_preview.onclick = () =>{
    popup.classList.toggle("active");
    Array.from(document.getElementsByClassName("shirt-image")).forEach(item =>{
        item.classList.remove("active");
    })
}

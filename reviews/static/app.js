//sets the various dom element and contents

let reviewModal = document.getElementById("#reviewModal");
let personImg = document.getElementById("personImg");
let personName = document.getElementById("personName");
let personRole = document.getElementById("role");
let personReview = document.getElementById("review");
let prevBtn = document.getElementById("previous");
let nextBtn = document.getElementById("next");
let surpriseBtn = document.getElementById("btnRandom");

// initialize the review counter
let reviewCount = 0;

// checks that the DOM content has been loaded and displays the index review

document.addEventListener("DOMContentLoaded", function () {

    //sets the various dom element and contents
    function loadReview(reviewCount) {
        personImg.src = reviewers[reviewCount].img;
        personName.innerText = reviewers[reviewCount].name;
        personRole.innerText = reviewers[reviewCount].role;
        personReview.innerText = reviewers[reviewCount].review;
    }

    // loads the index [0] review to the DOM
    loadReview(reviewCount);

    //add an event listener to the next button
    nextBtn.addEventListener("click", function () {
        if (reviewCount < reviewers.length - 1) {
            reviewCount += 1;
        } else reviewCount = 0;
        loadReview(reviewCount);
    })


    //add event listeer to the prev button

    prevBtn.addEventListener("click", function () {
        if (reviewCount < 1) {
            reviewCount = reviewers.length - 1;
        } else reviewCount -= 1;
        loadReview(reviewCount);
    })

    // add event listener to the surprise (random) button
    surpriseBtn.addEventListener("click", function () {
        let randReview = Math.floor(Math.random() * reviewers.length);
        reviewCount = randReview;
        loadReview(reviewCount);


    })



})









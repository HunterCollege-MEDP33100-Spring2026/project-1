const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("bgMusic");


let currentPage = 0;
let musicStarted = false;


nextBtn.addEventListener("click", function () {


  // Start music on the first click
  if (!musicStarted) {
    music.volume = 0.5;
    music.play();
    musicStarted = true;
  }


  // Move to next page
  if (currentPage < pages.length - 1) {


    pages[currentPage].classList.remove("active");


    currentPage++;


    pages[currentPage].classList.add("active");


    // Lower music volume on final page
    if (currentPage === pages.length - 1) {
      music.volume = 0.2;
    }
  }


});






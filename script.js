var myMusic = document.getElementById("cryingCat");



function playMusic() {
  myMusic.play();

  document.getElementById("letCry").style.display = "none";
  setTimeout(function () {
    document.getElementById("doYouSee").style.display = "inline-block";
  }, 10000);
}

function rockPiles() {
  myMusic.play();
  document.getElementById("underRocks").style.display = "none";
  setTimeout(function () {
    document.getElementById("removeRocks").style.display = "inline-block";
  }, 200);
}

function injuredCat() {
  document.getElementById("foundCat").style.display = ""
}

// rocks piles javascript

function dragElement(rockPileElement) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  rockPileElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    rockPileElement.style.top = (rockPileElement.offsetTop - pos2) + 'px';
    rockPileElement.style.left = (rockPileElement.offsetLeft - pos1) + 'px';
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}

dragElement(document.getElementById('cover'));
dragElement(document.getElementById('cover1'));
dragElement(document.getElementById('cover2'));
dragElement(document.getElementById('cover3'));
dragElement(document.getElementById('cover4'));
dragElement(document.getElementById('cover5'));
dragElement(document.getElementById('cover6'));
dragElement(document.getElementById('cover7'));
dragElement(document.getElementById('cover8'));
dragElement(document.getElementById('cover9'));
dragElement(document.getElementById('cover10'));




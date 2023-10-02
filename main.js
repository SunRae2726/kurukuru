
function changeWallpaper(wallpaper) {
    document.querySelector("body").style.background = "url('images/" + wallpaper + "') no-repeat center center fixed";
    document.getElementById("reset").style.color = '#FFFBD4';
    document.querySelector("body").style.backgroundSize = "cover";
}

var hidden = false;
function hide() {
    //ar x = document.getElementByClassName("everything");
   // alert("x:" + x);
    if (hidden) {
        document.getElementById("everything").style.visibility = 'visible';
        document.getElementById("charatitle").style.visibility = 'visible';
        document.getElementById("specialClick").style.color = '#F7C3FF';
        hidden = false;
    } else {
        document.getElementById("everything").style.visibility = "hidden";
        document.getElementById("charatitle").style.visibility = 'hidden';
        document.getElementById("specialClick").style.color = '#FFFBD4';
        hidden = true;
    }
  }

function resetWallpaper() {
    changeWallpaper("madoka.png");
    document.getElementById("reset").style.color = '#F7C3FF';
}

function generateKuru() {
    var img = document.createElement("img");
    img.src = "images/kururing.gif";
    img.id = "overkuru";
    document.body.appendChild(img);
    setTimeout(() => {
        document.body.removeChild(img);
    }, 3900)
}

var kuru = new Audio('sound/kurukuru.mp3');
var kururin = new Audio('sound/kururin.mp3');
var sound = 0;

function kurukuru() {
    if(sound == 0) {
        kuru.play();
        sound = 1;
    } else {
        kururin.play();
        sound = 0;
    }
    generateKuru();
}

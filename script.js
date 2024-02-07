var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");
const audio = document.getElementById("valentinesAudio");

button.addEventListener("click", () => {
  if (button.textContent === "Click mo to!") {
    button.textContent = "loading...";
    // Play the audio
    audio.play();
    button.textContent = "Enjoy Bwisit!";
    setTimeout(() => {
        button.remove();
      }, 3000);
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        button.style.display = "block";

        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["This is just a simple gift kaya" , "pag tyagaan mo nalang HAHAHAHAHA"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("This is just a simple gift kaya pag tyagaan mo nalang HAHAHAHAHA", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    //fades out the text by decreasing the opacity
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["This is just a simple gift kaya" , "pag tyagaan mo nalang HAHAHAHAHA"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("This is just a simple gift kaya pag tyagaan mo nalang HAHAHAHAHA", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.01;
    }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["3 days ko din ginawa to, maikli lang naman,", "Syempre gagamitin ko skill ko HAHAHA"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("3 days ko din ginawa to, maikli lang naman, Syempre gagamitin ko skill ko HAHAHA", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["3 days ko din ginawa to, maikli lang naman,", "Syempre gagamitin ko skill ko HAHAHA"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("3 days ko din ginawa to, maikli lang naman, Syempre gagamitin ko skill ko HAHAHA", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Gusto ko lang sabihin na Thank you Mommy,", "Di ako nagsisisi na ikaw ang naging bebe ko"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Gusto ko lang sabihin na Thank you Mommy, Di ako nagsisisi na ikaw ang naging bebe ko", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Gusto ko lang sabihin na Thank you Mommy,", "Di ako nagsisisi na ikaw ang naging bebe ko"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Gusto ko lang sabihin na Thank you Mommy, Di ako nagsisisi na ikaw ang naging bebe ko", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

         if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Ang unexpected na gagaan agad yung loob ko sayo,", "Tamang bardagulan lang tayo noon eh HAHAHA"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Ang unexpected na gagaan agad yung loob ko sayo, Tamang bardagulan lang tayo noon eh HAHAHA", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

         if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Ang unexpected na gagaan agad yung loob ko sayo,", "Tamang bardagulan lang tayo noon eh HAHAHA"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Ang unexpected na gagaan agad yung loob ko sayo, Tamang bardagulan lang tayo noon eh HAHAHA", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Pero dahil don mas nakilala kita,", "Mas nainditihan kong iisa tayo ng ugali"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Pero dahil don mas nakilala kita, Mas nainditihan kong iisa tayo ng ugali", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Pero dahil don mas nakilala kita,", "Mas nainditihan kong iisa tayo ng ugali"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Pero dahil don mas nakilala kita, Mas nainditihan kong iisa tayo ng ugali", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Kaya andito lang ako palagi naka support sayo,", "kahit sobra yung toyo mo sa katawan HAHAHA"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Kaya andito lang ako palagi naka support sayo, kahit sobra yung toyo mo sa katawan HAHAHA", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if (frameNumber >= 2750 && frameNumber < 99999) {
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
    
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["You are one of the best thing that", "has ever happened to me", "Iloveyouuu so much Bugsbunny ❤"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("You are one of the best thing that has ever happened to me Iloveyouuu so much Bugsbunny ❤", canvas.width / 2, (canvas.height/2 + 50));
        }
    
        secondOpacity = secondOpacity + 0.01;
    }
    

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day My Palagi ❤", canvas.width/2, (canvas.height/2 + 155));
        thirdOpacity = thirdOpacity + 0.01;

    }  

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);

 function myFunction(message) {
    alert("You click on: " + message);
    prompt("Your Name is: ", "What's your name")
}

function callIt(){
    alert("Load at: "+ Date());
    alert(burguers.sort());
    alert("The before list only had " + burguers.length + " type of burguers");

};

// function Enjoy(){
//     alert("You're going to see a few good Hamburguers from Argentina")
// }
function sniffer(message) {
    console.log("Something happend: " + message) 
}; 

var cat = "Mowgli"
var number = "32 44"
var new_number = parseInt(number) + 44

function runIt() {
    // var str = 'this text is blondes.com';
    // var result = str.indexOf("@"); 
    // console.log(result)

    var target = document.getElementById("burgaImage");
    var currentValue = target.innerHTML;

    console.log(currentValue);

    if(result != -1) {
        console.log("Result: " + result + "prueba !");
        target.innerHTML = "JAJAJA THIS IS FAKE";
    } else {
        console.log("Result: " + result);
        target.innerHTML = "APA QUE LOCO !";
    }
}

function doItAgain() {

    var loopcount = 100; 
    var target = document.getElementById("firstButton");

    while(loopcount > 0) {
        console.log(loopcount);
        target.innerHTML = loopcount;
        setTimeout(loopIteration, 1000);
        loopcount -= 1; 

    }
}

var burguerList = [
    'url("images/burguersList/GrandTasty.png")',
    'url("images/burguersList/420.png")',   
    'url("images/burguersList/ginobili.png")',
    'url("images/burguersList/chernobyl.png")',
    //'url("images/burguersList/tdn bourbon.png")',
    // 'url("images/burguersList/tdn2.png")',
    'url("images/burguersList/tdn4.png")',
    'url("images/burguersList/tdn3.png")',
    'url("images/burguersList/tdn5.png")',
    'url("images/burguersList/tdn6.png")',
    'url("images/burguersList/monster bourbon.png")'
]

var placesList = [
    "McDonald's",
    "Burguer Join",
    "Burguer Join",
    "La Pinta Bar",
    // "Tierra de Nadie",
    // "Tierra de Nadie",
    "Tierra de Nadie",
    "Tierra de Nadie",
    "Tierra de Nadie",
    "Tierra de Nadie",
    "Tierra de Nadie",
]

var burguerListTitles = [ //bottom + ...
    "Super Tasty Turbo Bacon Triple",   //red + verde + black + 1e7bc8
    "La 420",                           //White + 5ec5f1
    "La Ginóbili",                      //white + rgb(4, 4, 101) + black + 1e7bc8
    "La Chernobyl",                     //White + 5ec5f1
    // "TDN Burguer",
    // "TDN Burguer",
    "Wild Classic",         //white color + 1e7bc8
    "3 Hot Chilli Pepper", //white color + 5ec5f1
    "TDN Classic",      //white color + 5ec5f1
    "Big TDN",          //white color + 5ec5f1
    "Monster Bourbon", //white color + 5ec5f1
]

var properties = [
    ["#1e7bc8","#1e7bc8","white","white"],
    ["#5ec5f1","#5ec5f1","white","white"],
    ["#1e7bc8","#1e7bc8","white","white"],
    ["#5ec5f1","#5ec5f1","white","White"],
    ["#1e7bc8","#1e7bc8","white","White"],
    ["#5ec5f1","#5ec5f1","white","White"],
    ["#5ec5f1","#5ec5f1","#fb576f","White"],
    ["#5ec5f1","#5ec5f1","white","White"],
    ["#5ec5f1","#5ec5f1","white","White"],

]

var burgerListDescription = [
    `Hamburguesa en un pan mas grande,con triple carne 100% vacuna
    +bacon en tiras y triturado
    +salsa Tasty
    +cheddar
    +lechuga
    +tomate y cebolla`,
    `burger casera
    +panceta caramelizada
    +queso brie
    +puerro crocante
    +salsa de jalapeños, lima y mango
    +escarola fina
    +pan casero`,
    `triple con huevo
    +cheddar
    +panceta`,
    `Smash de 120 gr x 2
    +Cheddar x 1
    +Queso Dambo x 2
    +Provoleta a la plancha
    +Bacon -Pepinillos
    +Cebolla caramelizada
    +Cebolla crispy
    +incluye guarnicion de papas`,
    "Undescriptible",
    "Undescriptible",
    "Undescriptible",
    "Undescriptible",
    "Undescriptible",
    "Undescriptible",
    "Undescriptible"
];

var variable = true
var finishLoopOfBurguers = false
var cont = 0
var promo_code = ""

function slowWhileLoop(button_id, div_id, div_id2, div_id3, div_id4, div_id5) {
    finishLoopOfBurguers = false
    cont ++
    var audio1 = new Audio("audios/beerpour-91033.mp3");
      // Play the sound
    audio1.play();

    document.querySelector('.beer2').classList.add('poured');

    if(variable == true) {

        variable = false //prevents double run problem

        burguerList = burguerList.reverse();
        placesList = placesList.reverse();
        burguerListTitles = burguerListTitles.reverse();
        burgerListDescription = burgerListDescription.reverse();


        let i = 10;

        var fireworksContainer = document.getElementById(div_id5);
        var target = document.getElementById(button_id);
        var images = document.getElementById(div_id);
        var placeName = document.getElementById(div_id2);
        var burguerDescription = document.getElementById(div_id3);
        var burguertitles = document.getElementById(div_id4);

        target.style.color = '#fff';
        target.style.backgroundImage = 'linear-gradient(-180deg, #e24837 0%, #c81e1e 100%)';

        function loopIteration() {
        if (i >= 0) {
            if(i>0) {setTimeout(loopIteration, 1000)} else {setTimeout(loopIteration, 1000)}
            console.log(i);
            target.innerHTML = i;
            images.innerHTML = "Wait for it..."
            images.style.color = 'red'
            images.style.textAlign = 'center'
            images.style.verticalAlign = 'Center'
            images.style.fontSize = '30px'
            images.style.fontFamily = 'Sans'
            
            // placeName.innerHTML = placesLi   t[i];
            // burguertitles.innerHTML = burguerListTitles[i];
            // burguerDescription.innerHTML = burgerListDescription[i];
            i--;

            ; // Delay of 1000 milliseconds (1 second) unless counter is = 0
        } else {
            // When the loop finishes, reset the button to its original state
            var k = Math.floor(Math.random()*9);
            images.innerHTML = "<h1 style='color:"+properties[k][0]+"'>CONGRATULATIONS !!!</h1> <h1> </h1> <h1> </h1> <h1> </h1> <h1> </h1> <h2 style='color:"+
            properties[k][1]+"'>You got a: "+ burguerListTitles[k]+"</h2>" + "<h3 style='color:"+properties[k][2]+"'>get it at: "+placesList[k]+"</h3>"
            +"<h4 style='color:"+properties[k][3]+"'>Use this promo code: 7789Borterix</h4>" 
            // images.style.fontSize = '50px'
            // images.style.color = 'red'   
            // images.style.textAlign = 'center'
            images.style.backgroundSize = "cover";
            images.style.backgroundImage = burguerList[k];
            revertButtonToOriginalState(target);
            startFireworks(fireworksContainer); 
            console.log("else reached")
            variable = true;
        }
        }
        promo_code = "7789Borterix";
        loopIteration();

        if(i==0) { console.log("lalalalala")
        // 
        
        } else {}
    } 
    
  }

  function revertButtonToOriginalState(button) {
    button.innerHTML = "Click here !";
    button.style.color = '#FFFFFF';
    button.style.backgroundImage = 'linear-gradient(-180deg, #37b7e2 0%, #1086e7 100%)';
}
  
function startFireworks(div) {
    var numFireworks = 1000;
    var colors = ["red", "green", "blue"];
    var delay = 100;
    var innerDivs = []

    for (var i = 0; i < numFireworks; i++) {
      var x = Math.random() * window.innerWidth;
      var y = Math.random() * window.innerHeight*5  ;
      var color = colors[Math.floor(Math.random() * colors.length)];

      // Create the divFirework element
      var divFirework = document.createElement("div");
      divFirework.className = "firework";

      divFirework.style.position = "absolute";
      divFirework.style.top = y + "px";
      divFirework.style.left = x + "px";
      divFirework.style.background = color;
      divFirework.style.width = "10px";
      divFirework.style.height = "10px";
      div.appendChild(divFirework);

      innerDivs.push(divFirework);

      setTimeout(function() {
        divFirework.style.top = divFirework.style.top - 10 + "px";
      }, delay * (i + 1));
    }
    var audio = new Audio("audios/short-crowd-cheer-6713.mp3");
      // Play the sound
      audio.play();

    setTimeout(function() {
        // Loop through the innerDivs array and remove each element
        for (var i = 0; i < numFireworks; i++) {
        // Get the element from the array
        var divFirework = innerDivs[i];
        // Remove it from the container
        div.removeChild(divFirework);
        }
        }, 10000); // 10000 milliseconds = 10 seconds

    

      
    // setTimeout(removeFireworks, 10000)
  }


  function doItAgain2() {
    var target = document.getElementById("burgaImage");
    target.style.fontSize = "23px"

    for(i=10; i >=0 ; i--) {
        console.log("take a look of the index: "+i);
        target.innerHTML =  "loop number: " + i +  "<br>" + target.innerHTML;

    }

    var button = document.getElementById("firstButton");
    button.style.fontSize = "34px";
  }



  function doItAgain3() {
    let i = 0;

    var target = document.getElementById("SecondButton");
  
    function loopIteration() {
      if (i < burguers.length) {
        console.log(i);
        target.innerHTML = burguers[i];
        i++;
        setTimeout(loopIteration, 1000); // Delay of 1000 milliseconds (1 second)
      }    
    }
  
    loopIteration();
  }

var burguers = ['bourbon', 'normandia', 'chernobyl', 420, ["Big Mac", "Magnífica", "Big King", "Double 1/4"]]

burguers.push("super tasty", "Ginobili")

var new_text1 = "MMMM..."
var new_text2 = "...MMMM"


function appendNewText(text, target) {

    var para = document.createElement("h2"); 
    var node = document.createTextNode(text); 

    para.appendChild(node); 

    target.appendChild(para); 
}

function validateForm() {

    var nameFirst = document.getElementById("nameFirst");
    var value = nameFirst.value;

    if(value != "7789Borterix") {
        console.log("Will this fire?");
        var messageHolder = document.getElementById("target");
        messageHolder.style.color = "red";
        messageHolder.style.fontSize = "20px";
        messageHolder.style.marginLeft = "0px";
        messageHolder.innerHTML = "<h4 style='margin:auto; width:20%'>Put the right Code !!</h4>";
        nameFirst.select();
        // nameFirst.focus()
        return false
    }
}

var notRunning = true;

function getRandomColor() {

    var letters = "ABCDEF0123456789".split('');
    var color = "#";
    for(i = 0; i < 6; i++) {

        var caracter = letters[Math.floor(Math.random() * 16)];
        color += (caracter)
    }

    return color

}


function squareShow() {


    var canvas = document.getElementById("whiteBoard");
    var context = canvas.getContext("2d");

    var canvas2 = document.getElementById("whiteBoard2");
    var context2 = canvas2.getContext("2d");

    var verPos = Math.floor((Math.random() *199) + 1);
    var horPos = Math.floor((Math.random() * 199) + 1);
    
    var verPos2 = Math.floor((Math.random() * 199) + 1);
    var horPos2 = Math.floor((Math.random() * 199) + 1);

    var verPos3 = Math.floor((Math.random() * 199) + 1);
    var horPos3 = Math.floor((Math.random() * 199) + 1);
    
    var theColor = getRandomColor();

    var grd = context.createLinearGradient(0, 0, 10, 0);

    grd.addColorStop(0, theColor);
    grd.addColorStop(1, "white");

    context.fillStyle = grd;
    context.lineWidth = 5;
    context.strokeStyle = theColor
    context.moveTo(0, verPos); 
    context.lineTo(450,verPos);
    context.lineCap = "butt";
    context.stroke()

    context2.fillStyle = grd;
    context2.lineWidth = 5;
    context2.strokeStyle = theColor
    context2.moveTo(0, verPos); 
    context2.lineTo(300,verPos);
    context2.lineCap = "butt";
    context2.stroke()

    document.getElementById("displayColor")

   

    // context2.fillStyle = grd;
    // context2.strokeStyle = theColor

    // // context2.moveTo(horPos3, verPos3); 

    // context2.beginPath();
    // context2.arc(horPos3, verPos3, Math.random()*12, 0, 2 * Math.PI);
    // context2.stroke();
    
}


function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    document.querySelector('.bubbleContainer').appendChild(bubble);
  
    const randomSize = Math.floor(Math.random() * 20) + 10; // Random size between 10px and 40px
    const randomPosition = Math.random() * 80; // Random position between 0 and 80 (percentage from the bottom)
  
    bubble.style.width = `${randomSize}px`;
    bubble.style.height = `${randomSize}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.bottom = `${randomPosition}%`;
  
    // Remove the bubble when the animation ends
    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }
  
  function animateBubbles() {
    setInterval(createBubble, 1500); // Adjust the interval as needed
  }
  
  animateBubbles();
  
// Wait for the page to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the video element and the button
    const video = document.getElementById('video1');
    const playButton = document.getElementById('likeButton');
  
    // Create audio elements for sound1 and sound2
    const audio1 = new Audio('audios/ahhhh-37191.mp3');
    const audio2 = new Audio('audios/birds_singing-6888.mp3');
  
    // Concatenate sound1 and sound2 into a single function
    function playSoundsConcatenated() {
      audio1.play().then(() => {
        return new Promise((resolve) => {
          audio1.onended = resolve;
        });
      }).then(() => {
        return audio2.play();
      });
    }
  
    // Add a click event listener to the button
    playButton.addEventListener('click', function () {
      // Play the video
      video.play();
      // Play the concatenated sounds after a short delay (adjust the delay as needed)
      setTimeout(playSoundsConcatenated, 1000);
    });
  });
  
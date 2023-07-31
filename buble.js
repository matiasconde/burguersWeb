function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  document.querySelector('.container').appendChild(bubble);
  
  const randomSize = Math.floor(Math.random() * 10) ; // Random size between 10px and 20px
  const randomPosition = Math.floor(Math.random() * 100); // Random position between 0 and 80 (percentage from the bottom)
    
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


document.getElementById("body").onload=function() {
    console.log("hello world")
}
// '#whiteBoard2 .container'
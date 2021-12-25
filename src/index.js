let currentIndex = 0;

let interval;
let dx = 0;


const wrapper = document.getElementById("wrapper");
const images = document.getElementById("images");

const imageWidth = 500;
const imageCount = images.children.length;

const requiredTime = 10;
let animateSpeed = (imageWidth / requiredTime) /10;

images.style.width = `${imageCount * imageWidth}px`;

for (let i = 0; i < imageCount; i++) {
  const image = images.children[i];

  image.style.left = `${i * imageWidth}px`;
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


nextBtn.onclick = function(){
  right_slide();
}

let startAnimation;

function right_slide() {
  startAnimation = window.requestAnimationFrame(right_slide);

  if(dx >= imageWidth){
    window.cancelAnimationFrame(startAnimation);
    dx = 0;
    currentIndex = (currentIndex+1)%imageCount;
  }
  else{
    dx += animateSpeed;
    dx = Math.min(dx , imageWidth);
  }
  images.style.left = `-${(imageWidth*(currentIndex))+dx}px`;
}

// function highlightCurrentBox(){

// }

prevBtn.onclick = function () {
  dx = imageWidth;
  if(currentIndex === 0){
    currentIndex = imageCount-1 ;
    images.style.left = `-${(currentIndex * imageWidth)}px`;
    return 0;
  }
  else{
    currentIndex--;
  }
  
  interval = setInterval(() => {
    dx--;
    images.style.left = `-${(currentIndex * imageWidth)+dx}px`;

    if (dx <= 0){
      clearInterval(interval);
      dx = 0;
    }
  }, 1);
};
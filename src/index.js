const wrapper = document.getElementById("wrapper");
const images = document.getElementById("images");

const imageWidth = 500;
const imageCount = images.children.length;

images.style.width = `${imageCount * imageWidth}px`;

for (let i = 0; i < imageCount; i++) {
  const image = images.children[i];

  image.style.left = `${i * imageWidth}px`;
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

let interval;
let dx = 0;
nextBtn.onclick = function () {
  currentIndex++;
  if(currentIndex === imageCount){
    currentIndex=0;
    images.style.left = `0px`;
    return 0;
  }

  interval = setInterval(() => {
    dx++;
    images.style.left = `-${(imageWidth*(currentIndex-1))+dx}px`;

    if (dx >= imageWidth){
      clearInterval(interval);
      dx = 0;
    }
  }, 1);
};

prevBtn.onclick = function () {
  dx = imageWidth;
  if(currentIndex === 0){
    currentIndex = imageCount -1 ;
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
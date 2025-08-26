let image = document.getElementsByTagName("img")[0];
let button = document.getElementsByTagName("button")[0];
let imageCount;

let catPics = [
"cat_pics/cats_pic0.jpg",
"cat_pics/cats_pic1.jpg",
"cat_pics/cats_pic2.jpg", 
"cat_pics/cats_pic3.jpg",
"cat_pics/cats_pic4.jpg",
"cat_pics/cats_pic5.jpg",
"cat_pics/cats_pic6.jpg",
"cat_pics/cats_pic7.jpg",
"cat_pics/cats_pic8.jpg",
"cat_pics/cats_pic9.jpg",
"cat_pics/cats_pic10.jpg",
"cat_pics/cats_pic11.jpg",
"cat_pics/cats_pic12.jpg",
"cat_pics/cats_pic13.jpg"
];

window.addEventListener("load", function(){
  imageCount = Math.floor(Math.random() * catPics.length);
  setNewImage();
});

button.addEventListener("click", function(){
  imageCount++;
  if(imageCount === catPics.length){
    imageCount = 0;
  }
  setNewImage();
});

function setNewImage() {
  image.src = catPics[imageCount];
}
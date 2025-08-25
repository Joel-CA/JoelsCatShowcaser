let image = document.getElementsByTagName("img")[0];
let button = document.getElementsByTagName("button")[0];
let imageCount;

// Update these paths to match your uploaded image names in Object Storage
let catPics = [
"/api/objects/cat1.jpg",
"/api/objects/cat2.jpg", 
"/api/objects/cat3.jpg",
"/api/objects/cat4.jpg",
"/api/objects/cat5.jpg",
"/api/objects/cat6.jpg",
"/api/objects/cat7.jpg",
"/api/objects/cat8.jpg",
"/api/objects/cat9.jpg",
"/api/objects/cat10.jpg",
"/api/objects/cat11.jpg",
"/api/objects/cat12.jpg",
"/api/objects/cat13.jpg",
"/api/objects/cat14.jpg"
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
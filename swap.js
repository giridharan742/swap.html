const imageSources = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg',
'7.jpg','8.jpg','9.jpg','10.jpg',];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
// Change the background image every 1 seconds (1000 milliseconds)
setInterval(changeBackgroundImage, 1000);
for(let i=0; i<=10; i++){
console.log(Math.random()*10);
}
let insertPics = document.querySelector('.press'),
addtitionalContainer,
arrayWithImage = [
  'image/1.jpeg', 'image/2.jpeg', 'image/3.jpeg'
];

//function create html-element with class container and return it.
let addDiv = function(){
    addtitionalContainer = document.createElement('div');
    addtitionalContainer.classList.add('container');
    //console.log(addtitionalContainer);
    return addtitionalContainer;

}
// clear content HTML-element
let clearDiv = function(element){
  element.innerHTML = " ";
}

//function add image to div
let addPicsToDiv = function(element){
  //console.log('Hura!');
  for (let i = 0, len = arrayWithImage.length; i< len; i++) {
    console.log(arrayWithImage[i]);
    element.src = arrayWithImage[i];
    arrayWithImage.splice(i,1);
    console.dir(arrayWithImage);
    console.log(i);
    //return i;
    break;

  }


}

insertPics.addEventListener('click', (e) => {
  let pressElement = event.target;
  let outerElement = pressElement.previousElementSibling.firstElementChild;
  let indexElement = pressElement.nextElementSibling;
    clearDiv(outerElement);
    outerElement.appendChild(addDiv());
    //console.log(arrayWithImage);
    addPicsToDiv(outerElement);
    //indexElement.innerHTML = `Index of image ${i}`;

 // Todo...
});

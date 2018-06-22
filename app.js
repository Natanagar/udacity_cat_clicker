let insertPics = document.querySelector('.press'),
addtitionalContainer,
objectWithImage = {
  lastIndex: 0,
  arrayWithImage : [
  'image/1.jpeg', 'image/2.jpeg', 'image/3.jpeg'
  ]
};

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
  for (let i = objectWithImage.lastIndex; i < arrayWithImage.length; i++) {
    element.src = `${objectWithImage.arrayWithImage[i]}`;
    objectWithImage.lastIndex = i+1;
    break;
  };
}

insertPics.addEventListener('click', (e) => {
  let pressElement = event.target;
  let outerElement = pressElement.previousElementSibling.firstElementChild;
  let indexElement = pressElement.nextElementSibling;
    clearDiv(outerElement);
    outerElement.appendChild(addDiv());
    //console.log(objectWithImage);
    addPicsToDiv(outerElement);
    console.log(outerElement);
    //indexElement.innerHTML = `Index of image ${i}`;

 // Todo...
});

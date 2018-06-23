let insertPics = document.querySelector('.press'),
addtitionalContainer,
objectWithImage = {
  lastIndex: 0,
  arrayWithImage : [
  'image/1.jpg', 'image/2.jpg', 'image/3.jpg'
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
  for (let i = objectWithImage.lastIndex; i < objectWithImage.arrayWithImage.length; i++) {
    console.log(`${objectWithImage.arrayWithImage[i]}`);
    let image = document.createElement('img');
    image.src = `${objectWithImage.arrayWithImage[i]}`;
    image.classList.add('photo');
    image.alt = 'cat';
    //element.src = `${objectWithImage.arrayWithImage[i]}`;
    element.appendChild(image);
    objectWithImage.lastIndex = i+1;
    console.log(element);
    break;
  };
}

insertPics.addEventListener('click', (e) => {
  let pressElement = event.target;
  let outerElement = pressElement.previousElementSibling.firstElementChild;
  let indexElement = pressElement.nextElementSibling;
    clearDiv(outerElement);
    outerElement.appendChild(addDiv());
    console.log(outerElement);
    addPicsToDiv(outerElement);
    console.log(outerElement);
    //indexElement.innerHTML = `Index of image ${i}`;

 // Todo...
});

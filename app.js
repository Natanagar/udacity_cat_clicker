let insertPics = document.querySelector('.press'),
addtitionalContainer,
image,
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
let createImage = function(){
    image = document.createElement('img');
    image.src = `${objectWithImage.arrayWithImage[i]}`;
    console.log(`${objectWithImage.arrayWithImage[i]}`)
    image.classList.add('photo');
    image.alt = 'cat';
    return image;
}

//function add image to div
let addPicsToDiv = function(element){
  for (let i = objectWithImage.lastIndex; i < objectWithImage.arrayWithImage.length; i++) {
    console.log(`${objectWithImage.arrayWithImage[i]}`);
    createImage();
    //element.src = `${objectWithImage.arrayWithImage[i]}`;
    element.appendChild(image);
    objectWithImage.lastIndex = i+1;
    //console.log(element);
    break;
    return objectWithImage.lastIndex;
  };
}

insertPics.addEventListener('click', (e) => {
  let pressElement = event.target;
  let outerElement = pressElement.previousElementSibling.firstElementChild;
  let indexElement = pressElement.nextElementSibling;
    clearDiv(outerElement);
    outerElement.appendChild(addDiv());
    //console.log(outerElement);
    addPicsToDiv(outerElement);
    if(indexElement.firstElementChild){
      clearDiv(indexElement.firstElementChild);

    } else {
      let indexOfPics = document.createElement('div');
      indexOfPics.innerHTML = "`Number of pics ${objectWithImage.lastIndex}`";
      indexElement.appendChild(indexOfPics);

    }

 /// Todo...
});

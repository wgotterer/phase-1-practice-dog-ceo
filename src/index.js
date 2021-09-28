// document.addEventListener("DOMContentLoaded", function() {
//     fetchDog();
// });

// function fetchDog() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

//     fetch(imgUrl)
    
//     .then((resp) => resp.json())
//     .then(dog => renderDoggy(dog)) ///use console.log() to inspect "dog" first

// }

// function renderDoggy(dog){
//     const imagesHolder = document.querySelector("#dog-image-container");
//      dog.message.forEach(url =>{

//         const image = document.createElement('img');
//         img.src = url;
//         img.width = 200;

//         imagesHolder.appendChild(image);

    
//     })
// }



const init = () => {
// function init(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then( response => response.json())
        .then( data => addImages(data))

        fetch('https://dog.ceo/api/breeds/list/all')
        .then( response => response.json())
        .then( data => addBreeds(data))



}

function addImages(data){

    const imagesHolder = document.getElementById("dog-image-container");

    data.message.forEach(url => {
        
        const image = document.createElement('img');
        image.src = url;
        image.width = 200;
        image.height = 200;

        imagesHolder.appendChild(image);
    });
}
const breedDropdown = document.getElementById("breed-dropdown")
    console.log(breedDropdown)
function addBreeds(breeds){

    const breedsHolder = document.getElementById("dog-breeds");
    

    for( let breedKey in breeds.message){

        const li = document.createElement("li")
        li.innerHTML = breedKey;
        breedsHolder.appendChild(li)

    }

}

function changeColor(event){
    event.target.style.color = "red"
}






document.addEventListener('DOMContentLoaded', init)

// function addBreeds(breeds){

//     const breedsHolder = document.getElementById("dog-breeds");

//     for (let breedKey in breeds.message){

//         const li = document.createElement('li');
//         li.innerText = breedKey;

//         breedsHolder.appendChild(li);
//     }
// }

// function changeColor(event){
//     event.target.style.color = 'red';
// }


// function addBreeds(breeds){

//     const breedsHolder = document.getElementById("dog-breads");

//     for( let breedKey in breeds.message){

//         const li = document.createElement("li")
//         li.innerHTML = breedKey;
//         breedsHolder.appendChild(li)
//     }

// }

// function changeColor(event){
//     event.target.style.color = "red"
// }










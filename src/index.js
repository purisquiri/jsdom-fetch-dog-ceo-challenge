console.log("%c HI", "color: firebrick");
console.log("Before DOM Loaded : ");

document.addEventListener("DOMContentLoaded", () => {
  console.log("After DOM Loaded : ");

  fetchImg();
  fetchBreed();
});

function fetchImg() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((docPicsArray) => {
      //   console.log(docPicsArray);
      //   console.log(docPicsArray['message'])
      docPicsArray.message.forEach((pic) => renderImg(pic));
    });
}

function renderImg(pic) {
  let dogImg = document.createElement("img");
  dogImg.src = pic;
  dogImg.style.width = "250px";
  document.getElementById("dog-image-container").appendChild(dogImg);
  // console.log("dogsDiv =", dogsDiv);
}

function fetchBreed() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((breedList) => {
    Object.keys(breedList.message).forEach(breed => renderBreed(breed))
      
    });
}

function renderBreed(breed) {
    let li = document.createElement('li');
    li.innerText = breed;
    li.addEventListener('click', (event) =>
    event.target.style.color = "green")
    document.getElementById('dog-breeds').appendChild(li)
}


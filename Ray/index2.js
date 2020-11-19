console.log("%c HI", "color: firebrick");
console.log("Before DOM Loaded : ");

document.addEventListener("DOMContentLoaded", () => {
  console.log("After DOM Loaded : ");

  fetchImg();
  fetchBreed("a");
  filterDropdown();
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

function fetchBreed(initialLetter) {
  document.getElementById("dog-breeds").innerHTML = "";
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((breedList) => {
      let breeds;

      // if (!initialLetter) {
      //   breeds = Object.keys(breedList.message);
      // } else {
      //   breeds = Object.keys(breedList.message).filter((breed) => {
      //     return breed.slice(0, 1).toLowerCase() === initialLetter;
      //   });
      // }

      breeds = Object.keys(breedList.message).filter((breed) => {
        return breed.slice(0, 1).toLowerCase() === initialLetter;
      });

      breeds.forEach((breed) => renderBreed(breed));
    });
}

function renderBreed(breed) {
  let breedLi = document.createElement("li");
  breedLi.innerHTML = breed;
  breedLi.addEventListener("click", (event) => {
    event.target.style.color = "red";
  });

  document.getElementById("dog-breeds").appendChild(breedLi);
}

function filterDropdown() {
  let select = document.querySelector("select");

  select.addEventListener("change", (event) => {
    const initialLetter = event.target.value;
    fetchBreed(initialLetter);
  });
}

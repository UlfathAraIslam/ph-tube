function loadCategories() {
  // fetch data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // get a promise and convert it in json
    .then((res) => res.json())
    // send data to displayCategories
    .then((data) => displayCategories(data.categories));
}
function displayCategories(categories) {
  // get the container
  const categoryContainer = document.getElementById("category-container");

  // loop operation on array of object

  for (let category of categories) {

    // create element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm">${category.category}</button>
    `

    // append the element
    categoryContainer.append(categoryDiv)
  }
}
loadCategories();

const categoriesEl = document.getElementById("categories").children.length;
console.log(`Number of categories: ${categoriesEl}`);

const arrayTitlesCategoriesEl = document.querySelectorAll(".item");
arrayTitlesCategoriesEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});

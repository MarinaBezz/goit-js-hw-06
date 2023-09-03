const categoriesEl = document.getElementById("categories").children.length;
console.log(`Number of categories: ${categoriesEl}`);

const arrayTitlesCategoriesEl = document.querySelectorAll("h2");
arrayTitlesCategoriesEl.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});

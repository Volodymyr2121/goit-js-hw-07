const categories = document.querySelectorAll("#categories .item");
const numbersOfCategories = categories.length;

console.log('Numbers Of Categories:', numbersOfCategories)

categories.forEach(category => {
    const nameCategory = category.querySelector("h2").textContent;
    const numberElements = category.querySelectorAll("li").length;
console.log('Category:', nameCategory);
console.log('Elements:', numberElements);
});

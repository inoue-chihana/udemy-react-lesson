const h1element = document.querySelector("h1");
console.log(h1element);
console.log(h1element.textContent);
h1element.textContent = "Yeah";

const btnEl = document.querySelector("button");

const helloFn = (event) => {
  console.dir(event.target.textContent);
  console.log("Hello!");
};
btnEl.addEventListener("click", helloFn);
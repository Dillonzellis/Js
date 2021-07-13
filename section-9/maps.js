"use strict";

const rest = new Map();
rest.set("name", "dominoes");
rest.set(1, "cuba");
console.log(rest.set(2, "rico"));

rest
  .set("categories", ["italian", "pizzeria", "vegetarian", "organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);

console.log(rest.size);
// rest.clear();
const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr));
rest.set(document.querySelector("h1"), "heading");
console.log(rest);

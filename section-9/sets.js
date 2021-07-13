"use strict";

const ordersSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);

console.log(ordersSet);
console.log(new Set("dillon"));
console.log(ordersSet.size);
console.log(ordersSet.has("pizza"));
console.log(ordersSet.has("dank"));

ordersSet.add("garlic bread");
ordersSet.add("garlic bread");
console.log(ordersSet);

ordersSet.delete("risotto");
console.log(ordersSet);

// ordersSet.clear(); // empties entire set
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size
);

console.log(new Set("dillonellis").size);

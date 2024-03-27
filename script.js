console.log("My name is:");
console.log("ChatGPT");
console.log("→ My name is: Kanat");
console.log("Total cost: $(3 + 5)");
console.log(`Total cost: $${3 + 5}`);
alert("Total cost: $8");
console.log("Total cost: " + (599 + 295 / 100));
console.log(`Total cost: $${599 + 295 / 100}`);
alert(`Total cost: $${599 + 295 / 100}. Thank you, come again!`);
console.log("Items (4): $" + (2 * 2095 + 2 * 799 / 100));
console.log("Shipping & handling: $" + (499 + 499 / 100));
console.log("Total before tax: $" + (2 * 2095 + 2 * 799 + 499 + 499 / 100));
console.log(`Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 499 + 499) * 0.1) / 100}`);


const name = 'Simon';
console.log(`My name is: ${name}`);

const cost = 5 + 2 * 3 + 9;
console.log(`Cost of food: $${cost}`);

const tax = cost * 0.1;
const totalCost = cost + tax;
console.log(`Total cost: $${totalCost}`);
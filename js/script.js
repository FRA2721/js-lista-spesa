// programmer: Francesco Cimino;
// project: Lista della spesa con ciclo while;
// language: javascript;



// list-items
const listItems = ["Milk;", "Water;", "Bread;", "Orange juice;", "Blackberry;", "Pasta;", "Eggs;"];
const shoppingList = document.getElementById("shopping-list");

let i = 0;

// loop
while (i < listItems.length) {
    let item = `<li>${listItems[i]}</li>`
    shoppingList.innerHTML += item;
    i++;  
}
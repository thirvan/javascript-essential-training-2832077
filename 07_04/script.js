/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let table = [
    "laptop",
    "mouse",
    "bottle",
    "keyboard",
    "monitor",
    "pen",
    "paper",
    "watch",
];
console.log( "Initialised array:", table);

let last = table.pop();
console.log("Removed last item:", last);

console.log("Array after pop:", table);

table.unshift(last);
console.log("Add last item as first item");
console.log("Array after adding last item first:", table);


table.sort();
console.log("Sort items");
console.log("Table array:", table);

let searchItem = "bottl";
let found = table.find(item => item === searchItem);
if (found) {
    console.log(`"${searchItem}", item found`);
}
else {
    console.log(`"${searchItem}", item not found`);
}

searchItem = "monitor";
table.splice(table.indexOf(searchItem), 1)
console.log(table);
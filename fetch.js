// 1. JSON
const student = {
    name: "Rakib",
    age: 27,
    movies: ['king khan', 'Dhakar Mastam']
};
const studentJson = JSON.stringify(student);
// console.log(studentJson);
const studentJson2 = JSON.parse(studentJson);
// console.log(studentJson2);
// 2. Fetch
// 3. Keys and Values
// 4. for each for array for no return is needed then use map
// 5. for of loop for array like object.
// 6. for in loop for object
// 7. add or remove from an array

const products = [
    { name: 'laptop', price: 132000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 180000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3200, brand: 'casio', color: 'silver' },
    { name: 'keyboard', price: 42000, brand: 'royale kludge', color: 'white' },
    { name: 'mouse', price: 5000, brand: 'monka', color: 'black' },
    { name: 'router', price: 2800, brand: 'tenda', color: 'black' }
];
const newProduct = { name: 'webcam', price: 1200, brand: 'logitech', color: 'black' };
// copy products array and then add newProduct
const newProducts = [...products, newProduct];
// console.log(newProducts);

// create a new array without one specific item
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);
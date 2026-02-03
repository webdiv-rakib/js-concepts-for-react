const products = [
    { name: 'laptop', price: 132000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 180000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3200, brand: 'casio', color: 'silver' },
    { name: 'keyboard', price: 42000, brand: 'royale kludge', color: 'white' },
    { name: 'mouse', price: 5000, brand: 'monka', color: 'black' },
    { name: 'router', price: 2800, brand: 'tenda', color: 'black' }
];

const person = {
    name: 'rakib',
    profession: 'Traffic',
    age: 26,
    address: 'Dhaka'
}

// dot notation
const prof1 = person.name;
console.log(prof1);


// bracket notation
const prof2 = person["profession"];
console.log(prof2);
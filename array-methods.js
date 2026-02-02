const products = [
    { name: 'laptop', price: 132000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 180000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3200, brand: 'casio', color: 'silver' },
    { name: 'keyboard', price: 42000, brand: 'royale kludge', color: 'white' },
    { name: 'mouse', price: 5000, brand: 'monka', color: 'black' },
    { name: 'router', price: 2800, brand: 'tenda', color: 'black' }
];

const brands = products.map(product => product.brand);
// console.log(brands);

const names = products.map(name => name.name);
// console.log(names);

const prices = products.map(price => price.price);
// console.log(prices);

// products.forEach(product => console.log(product.color));
products.forEach(product => {

});

const cheap = products.filter(product => product.price < 6000);
console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

const lowPrice = products.find(p => p.price < 7000);
console.log(lowPrice);
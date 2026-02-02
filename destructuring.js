const numbers = [42, 65];
const x = numbers[0];
const y = numbers[1];
// console.log(x, y);
const [a, b] = [12, 15];
// console.log(a, b);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums
}
// console.log(boxify(1, 2));

const student = {
    name: "Rakib",
    age: 27,
    movies: ['king khan', 'Dhakar Mastam']
}
const [firstMovie, secondMovie] = student.movies;

const { name, age } = { name: 'alu', age: 14 };

const employee = {
    id: 'VS Code',
    designation: 'developer',
    machine: 'laptop',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'dhaka',
        drink: 'water'
    }
}

const { machine, id } = employee;
console.log(machine, id);
const { address, drink } = employee.specification;
console.log(address, drink);
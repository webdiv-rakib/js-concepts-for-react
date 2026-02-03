const money = 80
let food = money > 100 ? 'biryani' : 'no biryani';
// console.log(food);

// shortcut number to string conversion
const num1 = 52
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

// shortcut string to number conversion
const input = '420'
const inputNum = +input;
// console.log(inputNum);

const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// isActive && showUser();
isActive || showUser();;
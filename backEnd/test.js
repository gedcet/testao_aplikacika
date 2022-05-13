// const funck1 = (a, b) =>
// {
//     return [a, b]
// }

// let result = funck1()

// let a, b

// a = result[0]
// b = result[1]

// let [c, d] = funck1(15, 20)

// console.log(c, d)

// let scores = [0, 500, 400, 300];

// let [x, y, z, b1] = scores;

// console.log(x, y, z, b1); //500 400 300
///////////
let scores_ =
{
    pass: 70,
    abuoliai:
        [1, 2],
    avg: 50,
    fail: 30
};
//////
let { pass, fail, avg, abuoliai } = scores_;
console.log(pass, avg, fail, abuoliai); // 70 50 30
let [user, interface, roma, betkas, us, ru] = 'UIr uri';
console.log(user); // U
console.log(interface); // I
console.log(roma); // I
console.log(betkas); // I
console.log(us); // I
console.log(ru);
//////////
const allCollections = [10, 20, 30, 40, 50, 60];
const maxNumber = Math.max(...allCollections);
console.log(maxNumber) //60
///////////////
var me = 'Ihechikara';
var fullname = `My name is Abba ${me}`;
console.log(fullname);
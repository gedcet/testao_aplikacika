const funck1 = (a, b) =>
{
    return [a, b]
}

let result = funck1()

let a,b 

a = result[0]
b = result[1]

let [c,d] = funck1(15, 20)

console.log(c,d)
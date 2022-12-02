/*let multiply = function (x,y) {
    console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 4);
multiplyByTwo(5);
let multiplyByThree = multiply.bind(this, 2);
multiplyByThree(5);*/
let multiply = function (x) {
    return function(y) {
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(4);
multiplyByTwo(5);


var bool = false;
console.log(bool);
var text = 'Hello';
console.log(text);
var num = 21;
console.log(num);
var myArray = [21, 42, 53, 64];
console.log(myArray);
var myArray2 = [21, 43, 65, 97]; //generic: used to specifically declare the type of array
console.log(myArray2);
var myArray3 = [21, 'Thirteen', false]; //array of any datatypes
console.log(myArray3);
var a = [677, 'String']; //tuples: just like any array
console.log(a);
function numcheck() {
    return 91;
}
console.log(numcheck());
function numcheck2() {
    console.log(92);
}
numcheck2();
var cars;
(function (cars) {
    cars[cars["Suzuki"] = 0] = "Suzuki";
    cars[cars["Hyundai"] = 1] = "Hyundai";
    cars[cars["Honda"] = 2] = "Honda";
})(cars || (cars = {}));
; //this is enum
console.log(cars[1]);
console.log(cars['Honda']);
var data = {
    name: 'Jon',
    age: 29,
    hobbies: ['running', 'swimming', 'coding']
}; //this is an object
console.log(data);

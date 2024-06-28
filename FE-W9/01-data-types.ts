var bool : boolean = false;
console.log( bool );
var text : string = 'Hello';
console.log( text );
var num : number = 21;
console.log( num );

let myArray : number[] = [21, 42, 53, 64];
console.log( myArray );
let myArray2 : Array<number> = [21, 43, 65, 97]; //generic: used to specifically declare the type of array
console.log( myArray2 );
let myArray3 : Array<any> = [21, 'Thirteen', false]; //array of any datatypes
console.log( myArray3 );

const a : [number, string] = [677, 'String']; //tuples: just like any array
console.log( a );

function numcheck() : number {
    return 91;
}
console.log( numcheck() );

function numcheck2() : void {
    console.log( 92 );
}
numcheck2();

enum cars {'Suzuki', 'Hyundai', 'Honda'}; //this is enum
console.log( cars[1] );
console.log( cars['Honda'] ); 

let data: {name: string, age: number, hobbies: string[]} = {
    name: 'Jon',
    age: 29,
    hobbies: ['running', 'swimming', 'coding']
} //this is an object
console.log( data );

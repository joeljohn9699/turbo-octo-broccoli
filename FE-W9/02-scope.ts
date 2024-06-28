var global_num : number = 233; //global scope variable

function number() : void {
    console.log( global_num );

    var f_num : number = 456; //function scope variable . there is also block scope variable which comes inside a nested function 
}

number();
var global_variable: number;

class Pattern{
    height( height ) : number {
        for (let index = height; index > 0; index--) {
            for (let innerindex = 0; innerindex < index; innerindex++) {
                console.log( '*' );
                
            }
            console.log();
        }
        return height;
    }
}

var obj = new Pattern();
global_variable = obj.height(5);
console.log( global_variable );
var global_variable;
var Pattern = /** @class */ (function () {
    function Pattern() {
    }
    Pattern.prototype.height = function (height) {
        for (var index = height; index > 0; index--) {
            for (var innerindex = 0; innerindex < index; innerindex++) {
                console.log('*');
            }
            console.log();
        }
        return height;
    };
    return Pattern;
}());
var obj = new Pattern();
global_variable = obj.height(5);
console.log(global_variable);

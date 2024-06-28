var newHouse = {
    houseNumber: 201,
    area: 'Mumbai',
    pincode: 600101
};
console.log('Object House Details: House Number: ' + newHouse.houseNumber + ', Area : ' + newHouse.area + ', Pincode : ' + newHouse.pincode);
var House = /** @class */ (function () {
    function House(houseNumber, area, pincode) {
        this.houseNumber = houseNumber;
        this.area = area;
        this.pincode = pincode;
    }
    House.prototype.display = function () {
        console.log('Class House Details : ');
        console.log('House Number is : ' + this.houseNumber);
        console.log('Area is : ' + this.area);
        console.log('Pincode is : ' + this.pincode);
    };
    return House;
}());
var newHouse1 = new House(202, 'Bandra', 600102);
newHouse1.display();

interface IHouse {
    houseNumber : number;
    area : string;
    pincode : number;
}

let newHouse : IHouse = {
    houseNumber : 201,
    area : 'Mumbai',
    pincode : 600101
}
console.log( 'Object House Details: House Number: ' + newHouse.houseNumber + ', Area : ' + newHouse.area + ', Pincode : ' + newHouse.pincode);

class House implements IHouse {
    houseNumber: number;
    area: string;
    pincode: number;

    constructor( houseNumber : number, area : string, pincode : number){
        this.houseNumber = houseNumber;
        this.area = area;
        this.pincode = pincode;
    }

    display() : void {
        console.log( 'Class House Details : ');
        console.log( 'House Number is : ' + this.houseNumber);
        console.log( 'Area is : ' + this.area);
        console.log( 'Pincode is : ' + this.pincode);
    }
}

let newHouse1 = new House( 202, 'Bandra', 600102 );
newHouse1.display();

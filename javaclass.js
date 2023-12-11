class Car{
    name= "";
    color= "";

    constructor(carName, color){

        this.name = carName
        this.color = color

    }

    printCarName(){
        return "My car name is "+ this.name +" and the color is "+this.color
    }

    coding(lan){
        console.log("I am learning "+lan+" because my brother give me with brand new "+this.name +" and the color is "+this.color)
    }
}


const carObject1 = new Car("BMW","Red");
const carObject2 = new Car("Benz","Green");

console.log(carObject2.coding("C++"))





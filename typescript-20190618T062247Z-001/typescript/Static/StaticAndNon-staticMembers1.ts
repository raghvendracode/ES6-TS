

class Circle2 {
    static pi = 3.14;

    static calculateArea(radius:number) {
        return this.pi * radius * radius;
    }

    calculateCircumference1(radius:number):number { 
        return 2 * Circle.pi * radius;
    }
}

Circle2.calculateArea(5); // returns 78.5

let circleObj1 = new Circle2();
circleObj1.calculateCircumference1(5) // returns 31.4000000
//circleObj.calculateArea(); <-- cannot call this
//The class or constructor cannot be static in TypeScript


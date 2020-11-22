// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2
    }

    set circumference(newCircumference){
        this.radius = newCircumference / (Math.PI * 2);
    }

    set area(area){
        this._area = area;
    }

    get diameter(){
        return(this.radius + this.radius)
    }

    get circumference(){
        return(Math.PI * this.diameter)
    }

    get area(){
        return((this.radius**2) * Math.PI)
    }
}

var fruit1 = {
    name : "Papaya",
    display : function(amount,quantity){
        console.log(this.name)
        console.log("Total Price = ",amount * quantity)
    }
}
var fruit2 = {
    name : "Strawberry"
}
//call
fruit1.display.call(fruit2,50,8);

//apply
fruit1.display.apply(fruit2,[25,5]);

//bind
const data = fruit1.display.bind(fruit2,60,3);
data();
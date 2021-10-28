var myfunction = function () {
    console.log(this);
}

// myfunction(); //This will give out as window object.

//Inside Object literals, the this value will always refer to its own Object.


var myobj = {};

myobj.someMethod = function(){
    console.log(this);
}

//myobj.someMethod()
/* Here, our window Object didn’t invoke the function 
- our Object did, so this will refer to the Object that called it: */

// My Notes Examples.
//Implicit Binding
var me = {
    name:"Mohan",
    age:27,
    sayName: function(){
        console.log(this.name);
    }
}

//me.sayName();// give out put as Mohan here me refered as this inside sayName Fun.

//Explicit Binding  here we take function which is outsode object

var sayName = function() {
    console.log(this.name);
}

var Mohan ={
    name:"Mohan",
    age:27
}

sayName.call(Mohan);//by using call we can  call sayName function in context of Mohan object



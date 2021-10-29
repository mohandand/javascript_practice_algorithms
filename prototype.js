//Source : http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/

// let's create an alien object
var alien = {
    kind: 'alien'
  }
  
  // and a person object
  var person = {
    kind: 'person'
  }
  
  // and an object called 'zack'
  var zack = {};
  
  // assign alien as the prototype of zack
  zack.__proto__ = alien
  
  // zack is now linked to alien
  // it 'inherits' the properties of alien
  console.log(zack.kind); //=> ‘alien’
  
  // assign person as the prototype of zack
  zack.__proto__ = person
  
  // and now zack is linked to person
  console.log(zack.kind); //=> ‘person’
  

  /* As you can see the __proto__ property is very straightforward to understand and use. 
  Even if we shouldn’t use __proto__ in production code, I think that these examples
   give the best foundation to understand the JavaScript object model. */

   //You can check that one object is the prototype of another by doing:
   console.log(alien.isPrototypeOf(zack)) //=> true

   //Prototype lookups are dynamic

   //You can add properties to the prototype of an object at any time, the prototype chain lookup will find the new property as expected.
   
// 1
// Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.

let dog = {
    name: "Aflac",
     numLegs: 2, 
   };


// 2
// Print both properties of the dog object to your console.  

let dogSpot = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dogSpot.name, dogSpot.numLegs);


// 3
// Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

let dogS = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dogS.numLegs + " legs.";}
  };
  
  dogS.sayLegs();


// 4
// Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.

let cat = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This cat has " + this.numLegs + " legs.";}
  };
  
  cat.sayLegs();


// 5
// Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }


// 6
// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

let hound  = new Dog()
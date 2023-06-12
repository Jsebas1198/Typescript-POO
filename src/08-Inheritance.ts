//We  can create a class that will be inerited by another class
export class Animal {
  constructor(public name: string) {}
  move() {
    console.log(`${this.name} is moving`);
  }
}

//We create a class named as Dog,  that inherits from the Animal class
export class Dog extends Animal {
  //When we create a constructor for Dog, we have to call the constructor of the Animal and would be like this
  constructor(name: string, private _owner: string) {
    super(name);
  }
  bark() {
    console.log(`${this.name} is barking`);
  }

  get owner() {
    return this._owner;
  }
  set owner(newValue: string) {
    this._owner = newValue;
  }
}

//Here we can create an instance of  the Dog class
const dog = new Dog('Fido', 'Your name');

//The Dog class has the methods and properties of the Animal class
console.log(dog.move());

//The Dog class has its own bark method, so, it have the bark method and the move method that is inherited from the Animal
console.log(dog.bark());

console.log('Owner: ', dog.owner);
dog.owner = 'New name';

console.log('New owner: ', dog.owner);

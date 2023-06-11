//We want to read the values of the properties, but we dont want it to be modified outside the class
//In this case we use getters

export class MyDate {
  constructor(
    private year: number = 2001,
    private _month: number = 12, //To use the getter we rename the property
    private day: number = 1
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  //We create a getter like this
  get month() {
    return this._month;
  }

  //We can create a method, but it would be read like a property
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

//This would print the date with the valeus by default
const myDate = new MyDate();
console.log(myDate.printFormat());

//We can access the month value by the getter and it can't be modified
console.log(myDate.month);

console.log(myDate.isLeapYear);

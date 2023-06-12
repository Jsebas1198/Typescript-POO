//To let the modification of a property with some rules we can use the setter

export class MyDate {
  constructor(
    private year: number = 2001,
    private _month: number = 12,
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

  //We can let someone modify the value of a month only if it is between 1 and 12
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }
  }
}

//This would print the date with the valeus by default
const myDate = new MyDate();
console.log(myDate.printFormat());

myDate.month = 4;
console.log(myDate.month);

//this would throw an error
myDate.month = 78;
console.log('this console log should not be executed');

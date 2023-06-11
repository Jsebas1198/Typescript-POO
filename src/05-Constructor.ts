//By default the properties and methods are public

export class MyDate {
  //We can se the attributes to the class like this, it would be a shortcut for the constructor
  constructor(
    //We can set values to it by default
    private year: number = 2000,
    private month: number = 12,
    private day: number = 1
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  getMonth() {
    return this.month;
  }
}

//This would print the date with the valeus by default
const myDate = new MyDate();
console.log(myDate.printFormat());

//By default the properties and methods are public

export class MyDate {
  //This would be the properties of a class
  year: number;
  month: number;

  //Public is set by default, like this
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //Here we are creating a method
  //A method would be a funtion inside a class
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate.printFormat());

//If  it is public we can access its properties like this
console.log(myDate.day);

//We can also modify its value
myDate.day = 12;

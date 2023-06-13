//When we are creating a type for the parameters of a function, we can define it like this
// function getValue(value: string | number ) {
//   return value;
// }

//But the type of the parameter can be dynamic like this, by convention it is set to T, but it can have any name
function getValue<T>(value: T) {
  return value;
}

//An we can use the function like this
getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11, 1, 1]).forEach;

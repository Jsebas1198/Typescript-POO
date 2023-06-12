//he Mah library uses static stributes and methods like:
console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 2, 8, 1, 0, 3, 3, 3, 3));

//Here we  create our own class to undestand better how static works
class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce(
      (max, item) => (max >= item ? max : item),
      numbers[0]
    );
  }
}

// If we would not use static, we should create an instance of  the class => const math = new MyMath();

//But it is static, so we can access the arributes and methods without an instance
console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(12, 2, 1, 1112, 9));
const numbers = [12, 2, 1, 1112, 9, 3000];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1, -9, -8));

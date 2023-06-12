//We can create an interface for a class, so the class should implement its properties and methods craeted in the interface
//This kind of example can be found in repositories like TypeOrm

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

//To use the interface on the class we use the word "implements"

class PostgresDriver implements Driver {
  constructor(
    //We must implement this properties
    public database: string,
    public password: string,
    public port: number,

    //We can create a property for the class,
    private host: number
  ) {}

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    return true;
  }

  connect(): void {
    // code
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    // code
  }

  disconnect(): void {
    // code
  }

  isConnected(name: string): boolean {
    return true;
  }
}

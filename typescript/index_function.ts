 
type Rectangle={width:number,height:number}
 
let surface=(rectangle:Rectangle):number => rectangle.width*rectangle.height

let rec1={width:20,height:10}
console.log(surface(rec1));

type GreetingFunction = (name: string, age?: number) => string;
const sayHello:GreetingFunction = (name, age) => age ? `Hello, ${name}. You are ${age} years old.` 
                                                      : `Hello, ${name}!`

console.log(sayHello('rami',20));

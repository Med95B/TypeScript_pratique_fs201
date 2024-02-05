var surface = function (rectangle) { return rectangle.width * rectangle.height; };
var rec1 = { width: 20, height: 10 };
console.log(surface(rec1));
var sayHello = function (name, age) { return age ? "Hello, ".concat(name, ". You are ").concat(age, " years old.")
    : "Hello, ".concat(name, "!"); };
console.log(sayHello('rami', 20));

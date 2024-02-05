console.log(1+1);
console.log(5+5);
console.log('==================================================');
let x:BigInt = 1234567890123456789012345678901234567890n
console.log(x);
console.log('==================================================');
let cid:any = 123
let custId=<number>cid
let custId2=cid as number
console.log(cid);
console.log(custId);
console.log(custId2);
console.log('==================================================');
let var1:any=true
let var2=var1 as number
let var3=var1 as string
let var4=var2+1
let var5=var3+'aaaaa'
//var2=222
//var3='aaa'
console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log('==================================================');
console.log({a:123} == {a:123})
console.log({a:123} === {a:123})
import * as deepEqual from "deep-equal"
console.log(deepEqual({a:123},{a:123}))
console.log('==================================================');
let numbers: number[] = [1, 2, 3, 4, 'a']
console.log(numbers);
let strings: Array<string> = ["a", "b", "c"]
console.log(strings);
let tab=[1,3,"Apple",false]
console.log(tab);
let mix: (number | string)[] = [1, "a", 2, "b"]
let mix2:Array<string |number> = [1, "a", 2,2, "b"]
console.log(mix);
console.log(mix2);
let randomItems: any[] = [1, "hello", true, {}, []]
console.log(randomItems);
let person: [number, string, boolean] = [1, 'DEV', true]
console.log(person);
let matrix: number[][] = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
console.log(matrix);
let employees: [number, string][]= [[1, 'Ali'],[2, 'Ahmed'],[3, 'Sara']]
console.log(employees);
console.log('==================================================');
let personne: { name: string; age: number; } = {name: "Alice",age: 30}
console.log(personne);
type Utilisateur = { id: number ,name: string} 
const user1: Utilisateur = {id: 1,name: 'John'}
console.log(user1);
type Color = 'red'|'green'|'blue'
let myColor:Color='red'
//myColor='yellow'
console.log(myColor);
type tableau=[number,string]
let ar:tableau=[1,"aa"]
console.log(ar[0])
type obj={name:string,age:number}
const user:obj={name:"ahmed",age:35};
console.log(user.name)
console.log('==================================================');


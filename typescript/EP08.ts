//A========================================================
let getArrayLength = <T>(tab: T[]): number => tab.length;

type pers ={nom:string,age:number}


let pers11: pers = {
  nom: "ahmed",
  age: 20,
};

let pers22: pers = {
  nom: "ahmed",
  age: 20,
};

let pers33: pers = {
  nom: "ahmed",
  age: 20,
};

console.log(getArrayLength<string>(["aa", "bb", "cc"]));
console.log(getArrayLength<number>([1, 2, 3]));
console.log(getArrayLength<pers>([pers11,pers22,pers33]));
//B========================================================
let typeArray=<T>(tab:T[],type:string):T[]=>tab.filter(item=>typeof(item)===type)

console.log(typeArray([1,2,'1','2'],'string'));

//C========================================================
let unionArray=<T>(tab1:T[],tab2:T[]):T[]=>{

        let set=new Set([...tab1,...tab2]) 

            return Array.from(set)
           
   
}

console.log(unionArray([1,2,3,1,1],[1,1,2,4,5,6]))
//C========================================================
let intersectionArray=<T>(tab1:T[],tab2:T[])=>{

            let set1=new Set(tab1)
            let set2=new Set(tab2)

            console.log(set1);
            console.log(set2);

         return Array.from(set1).filter(item=>Array.from(set2).includes(item))
  

}

console.log(intersectionArray([1,1,2,2,3],[1,2,3,3,4,5,6]))
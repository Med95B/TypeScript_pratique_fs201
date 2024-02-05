//EP09==================================================
async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        return data;
    } catch (error:any) {
        throw new Error('Erreur de réseau: ' + error.message);
    }
}

import axios, { AxiosResponse, AxiosError } from 'axios';

async function getData(url: string): Promise<any> {
    try {
        const response: AxiosResponse = await axios.get(url);
        return response.data;
    } catch (error:any) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            throw new Error('Erreur Axios: ' + axiosError.message);
        } else {
            throw new Error('Erreur inattendue: ' + error.message);
        }
    }
}

interface Person {
    id: number;
    name: string;
}

async function fetchAndProcessData(url: string): Promise<Person> {
    try {
        const rawData: unknown = await fetchData(url);

        if (typeof rawData === 'object' && rawData !== null) {
            const person: Person = rawData as Person;
            return person;
        } else {
            throw new Error('Données récupérées incorrectes');
        }
    } catch (error:any) {
        throw new Error('Erreur lors du traitement des données: ' + error.message);
    }
}
//EP07=======================================================================================
interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}

class Garage {
    private listeVoitures: Voiture[];

    constructor() {
        this.listeVoitures = [];
    }

    addCar(voiture: Voiture): void {
        this.listeVoitures.push(voiture);
    }

    removeCar(marque: string, modele: string, annee: number): void {
        this.listeVoitures = this.listeVoitures.filter(car =>
            !(car.marque === marque && car.modele === modele && car.annee === annee)
        );
    }

    getDataCar(marque: string, modele: string, annee: number): Voiture | undefined {
        return this.listeVoitures.find(car =>
            car.marque === marque && car.modele === modele && car.annee === annee
        );
    }
}

const garage = new Garage();

const nouvelleVoiture: Voiture = { marque: 'Toyota', modele: 'Corolla', annee: 2022 };
garage.addCar(nouvelleVoiture);

const voitureRécupérée = garage.getDataCar('Toyota', 'Corolla', 2022);
console.log(voitureRécupérée); 

garage.removeCar('Toyota', 'Corolla', 2022);

class Personne {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class Personnes {
    private listePerso: Personne[];

    constructor() {
        this.listePerso = [];
    }

    addPersonne(personne: Personne): void {
        this.listePerso.push(personne);
    }

    getPersonne(id: number): Personne | undefined {
        return this.listePerso.find(personne => personne.id === id);
    }

    updatePersonne(id: number, updatedData: Partial<Personne>): void {
        const personneToUpdate = this.getPersonne(id);
        if (personneToUpdate) {
            Object.assign(personneToUpdate, updatedData);
        }
    }

    deletePersonne(id: number): void {
        this.listePerso = this.listePerso.filter(personne => personne.id !== id);
    }

    listePersonnes(): Personne[] {
        return this.listePerso;
    }
}

const personnes = new Personnes();
personnes.addPersonne(new Personne(1, 'Alice', 25));
personnes.addPersonne(new Personne(2, 'Bob', 30));
personnes.addPersonne(new Personne(3, 'Charlie', 22));
personnes.addPersonne(new Personne(4, 'David', 28));
personnes.addPersonne(new Personne(5, 'Emma', 35));

console.log(personnes.listePersonnes());

const personneId2 = personnes.getPersonne(2);
console.log(personneId2);

personnes.deletePersonne(4);
console.log(personnes.listePersonnes());

personnes.updatePersonne(5, { name: 'Eva', age: 40 });
console.log(personnes.listePersonnes());

//EP08=======================================================================================
function getArrayLength<T>(arr: T[]): number {
    return arr.length;
}

function filterByType<T>(arr: T[], type: string): T[] {
    return arr.filter(item => typeof item === type);
}

function unionArrays<T>(arr1: T[], arr2: T[]): T[] {
    const combinedArray = [...arr1, ...arr2];
    return Array.from(new Set(combinedArray));
}

function intersectionArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(item => arr2.includes(item));
}

function symmetricDifference<T>(arr1: T[], arr2: T[]): T[] {
    const diff1 = arr1.filter(item => !arr2.includes(item));
    const diff2 = arr2.filter(item => !arr1.includes(item));
    return [...diff1, ...diff2];
}

//EP05=======================================================================================
type Product = {
    name: string;
    category: string;
    price: number;
};

function addProperty(obj: any, key: string, value: any): void {
    obj[key] = value;
}

function removeProperty(obj: any, key: string): void {
    if (key in obj) {
        delete obj[key];
    }
}

function copyObject(obj: any): any {
    return { ...obj };
}

function findByKey(array: any[], key: string, value: any): any | undefined {
    return array.find(item => item[key] === value);
}

function filterStringProperties(obj: any): any {
    const filtered: any = {};
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            filtered[key] = obj[key];
        }
    }
    return filtered;
}

function filterObjectsByProperty(array: any[], key: string, value: any): any[] {
    return array.filter(item => item[key] === value);
}

function updatePropertyBasedOnAnother(array: any[], propToUpdate: string, conditionProp: string, conditionValue: any, newValue: any): void {
    array.forEach(item => {
        if (item[conditionProp] === conditionValue) {
            item[propToUpdate] = newValue;
        }
    });
}

function sumNumericPropertyValues(array: any[], key: string): number {
    return array.reduce((acc, item) => acc + (typeof item[key] === 'number' ? item[key] : 0), 0);
}

function extractPropertyValues(array: any[], key: string): any[] {
    return array.map(item => item[key]);
}

const Calculator = {
    operand1: 0,
    operand2: 0,
    add(): number {
        return this.operand1 + this.operand2;
    },
    subtract(): number {
        return this.operand1 - this.operand2;
    },
    multiply(): number {
        return this.operand1 * this.operand2;
    },
    divide(): number {
        if (this.operand2 !== 0) {
            return this.operand1 / this.operand2;
        } else {
            throw new Error("Division by zero is not allowed.");
        }
    },
};

//EP10============================================================================

const counterDisplay = document.getElementById('counterDisplay') as HTMLDivElement;
const incrementButton = document.getElementById('incrementButton') as HTMLButtonElement;
const decrementButton = document.getElementById('decrementButton') as HTMLButtonElement;
const resetButton = document.getElementById('resetButton') as HTMLButtonElement;

let counter = 0;

function updateDisplay() {
  counterDisplay.textContent = counter.toString();
}

function increment() {
  counter++;
  updateDisplay();
}

function decrement() {
  counter--;
  updateDisplay();
}

function reset() {
  counter = 0;
  updateDisplay();
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
resetButton.addEventListener('click', reset);

//EP06============================================================================
type User = {
    id: number;
    name: string;
    email: string;
  };
  
  const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  
  function displayUsers(userList: User[]): void {
    const userListElement = document.createElement("ul");
  
    userList.forEach((user) => {
      const userItem = document.createElement("li");
      userItem.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
      userListElement.appendChild(userItem);
    });
  
    const userListContainer = document.getElementById("userListContainer");
    if (userListContainer) {
      userListContainer.innerHTML = '';
      userListContainer.appendChild(userListElement);
    }
  }
  
displayUsers(users);
  
function addUser(event: Event): void {
    event.preventDefault();
    
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
  
    const newName = nameInput.value;
    const newEmail = emailInput.value;
  
    if (newName && newEmail) {
      const newUser: User = {
        id: users.length + 1, 
        name: newName,
        email: newEmail,
      };
  
      users.push(newUser);
      displayUsers(users);
      saveUsersToLocalStorage(users);
  
      nameInput.value = "";
      emailInput.value = "";
    }
  }
  
  const userForm = document.getElementById("userForm");
  if (userForm) {
    userForm.addEventListener("submit", addUser);
  }

  function saveUsersToLocalStorage(userList: User[]): void {
    localStorage.setItem("users", JSON.stringify(userList));
  }
   
  function loadUsersFromLocalStorage(): User[] {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      return JSON.parse(storedUsers) as User[];
    }
    return [];
  }

  function deleteUser(userId: number): void {
    let users: User[] = loadUsersFromLocalStorage();
    users = users.filter((user) => user.id !== userId);
    displayUsers(users);
    saveUsersToLocalStorage(users);
  }

  function createUserListItem(user: User): HTMLLIElement {
    const userItem = document.createElement("li");
    
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = user.name;
  
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.value = user.email;
  
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      

    });
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteUser(user.id);
    });
  
    userItem.appendChild(nameInput);
    userItem.appendChild(emailInput);
    userItem.appendChild(editButton);
    userItem.appendChild(deleteButton);
  
    return userItem;
  }

  function updateUserListItem(user: User, listItem: HTMLLIElement): void {
    const nameInput = listItem.querySelector("input[type='text']") as HTMLInputElement;
    const emailInput = listItem.querySelector("input[type='email']") as HTMLInputElement;
  
    nameInput.value = user.name;
    emailInput.value = user.email;
  }
  
  function editUser(userId: number, newName: string, newEmail: string): void {
  const userToUpdate = users.find((user) => user.id === userId);

  if (userToUpdate) {
    userToUpdate.name = newName;
    userToUpdate.email = newEmail;

    displayUsers(users);
    saveUsersToLocalStorage(users);
  }
}

const editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.addEventListener("click", () => {
  const listItem = editButton.parentElement as HTMLLIElement;
  const nameInput = listItem.querySelector("input[type='text']") as HTMLInputElement;
  const emailInput = listItem.querySelector("input[type='email']") as HTMLInputElement;

  const userId = ;
  const newName = nameInput.value;
  const newEmail = emailInput.value;

  editUser(userId, newName, newEmail);
});

//EP04============================================================================

function combine(arg1: string | number, arg2: string | number): string | number {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
      return arg1 + arg2;
    } else {
      return `${arg1}${arg2}`;
    }
  }
  
  type StringOrNumber = string | number;

  function determineType(arg: StringOrNumber): string {
    return typeof arg;
  }

  function createAdder(num: number): (otherNum: number) => number {
    return function (otherNum: number): number {
      return num + otherNum;
    };
  }

  function executeCallback(callback: (message: string) => void, message: string): void {
    callback(message);
  }
   
  type OperationCallback = (num1: number, num2: number) => number;

  function executeOperation(operation: OperationCallback, num1: number, num2: number): number {
    return operation(num1, num2);
  }

const addition: OperationCallback = (num1, num2) => num1 + num2;
const subtraction: OperationCallback = (num1, num2) => num1 - num2;
const multiplication: OperationCallback = (num1, num2) => num1 * num2;
const division: OperationCallback = (num1, num2) => num1 / num2;
const modulus: OperationCallback = (num1, num2) => num1 % num2;

console.log(executeOperation(addition, 5, 3)); 
console.log(executeOperation(subtraction, 8, 2)); 
console.log(executeOperation(multiplication, 4, 6)); 
console.log(executeOperation(division, 10, 2)); 
console.log(executeOperation(modulus, 7, 3)); 

function calculateArea(shape: 'circle', radius: number): number;
function calculateArea(shape: 'square', side: number): number;
function calculateArea(shape: 'rectangle', width: number, height: number): number;

function calculateArea(shape: string, arg1: number, arg2?: number): number {
  if (shape === 'circle') {
    return Math.PI * (arg1 ** 2);
  } else if (shape === 'square') {
    return arg1 ** 2;
  } else if (shape === 'rectangle') {
    return arg1 * arg2!;
  } else {
    throw new Error('Invalid shape provided');
  }
}

console.log(calculateArea('circle', 5)); 
console.log(calculateArea('square', 4)); 
console.log(calculateArea('rectangle', 3, 6)); 

function identity(firstName: string, lastName?: string): string {
    if (lastName) {
      return `${firstName} ${lastName}`;
    } else {
      return firstName;
    }
  }
  

  console.log(identity('John', 'Doe')); 
  console.log(identity('Alice')); 
  
  function padLeft(value: string, padding: number): string;
  function padLeft(value: string, padding: string): string;
  
  function padLeft(value: string, padding: number | string): string {
    if (typeof padding === 'number') {
      return ' '.repeat(padding) + value;
    } else {
      return padding + value;
    }
  }
  

  console.log(padLeft('Hello', 5)); 
  console.log(padLeft('World', '-')); 
  
//EP03============================================================================

function findDivisors(number: number): number[] {
    const divisors: number[] = [];
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors.push(i);
      }
    }
  
    return divisors;
  }
  
  console.log(findDivisors(20)); 

  function reverseArray(arr: number[]): number[] {
    return arr.reverse();
  }
  
  
  console.log(reverseArray([1, 2, 3, 4, 5])); 

  function findMaxNumber(arr: number[]): number {
    return Math.max(...arr);
  }
  

  console.log(findMaxNumber([10, 20, 5, 40])); 
  
  function filterByType<T>(arr: T[], type: string): T[] {
    return arr.filter((item) => typeof item === type);
  }
  
  console.log(filterByType([1, 'a', 2, 'b', 'c'], 'number')); 
  
  function flattenArray(arr: number[][]): number[] {
    return arr.flat();
  }
  
  console.log(flattenArray([[1, 2], [3, 4], [5, 6]]));
    
  function tupleToObject(tuple: [string, number]): { name: string; age: number } {
    const [name, age] = tuple;
    return { name, age };
  }
  
  console.log(tupleToObject(['John', 30])); 
  
  function combineWithoutDuplicates(...arrays: number[][]): number[] {
    const mergedArray = ([] as number[]).concat(...arrays);
    return Array.from(new Set(mergedArray));
  }
  
  console.log(combineWithoutDuplicates([1, 2, 3], [3, 4, 5], [5, 6, 7])); 
  
  function createUnorderedList(strings: string[]): void {
    const ulElement = document.createElement('ul');
  
    strings.forEach((str) => {
      const liElement = document.createElement('li');
      liElement.textContent = str;
      ulElement.appendChild(liElement);
    });
  
    document.body.appendChild(ulElement);
  }
   
  function updateUnorderedList(strings: string[]): void {
    const ulElement = document.querySelector('ul');
  
    if (ulElement) {
      ulElement.innerHTML = '';
  
      strings.forEach((str) => {
        const liElement = document.createElement('li');
        liElement.textContent = str;
        ulElement.appendChild(liElement);
      });
    }
  }

  function sortUnorderedList(order: 'ascending' | 'descending'): void {
    const ulElement = document.querySelector('ul');
  
    if (ulElement) {
      const items = Array.from(ulElement.getElementsByTagName('li'));
  
      items.sort((a, b) => {
        if (order === 'ascending') {
          return a.textContent!.localeCompare(b.textContent!);
        } else {
          return b.textContent!.localeCompare(a.textContent!);
        }
      });
  
      ulElement.innerHTML = '';
      items.forEach((item) => ulElement.appendChild(item));
    }
  }

  function filterListByKeyword(keyword: string): void {
    const ulElement = document.querySelector('ul');
  
    if (ulElement) {
      const items = Array.from(ulElement.getElementsByTagName('li'));
  
      items.forEach((item) => {
        const text = item.textContent!.toLowerCase();
        if (text.includes(keyword.toLowerCase())) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  }

//EP02=================================================================

function checkEvenOrOdd(number: number): string {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }
  
  console.log(checkEvenOrOdd(5)); 

  function findMax(num1: number, num2: number): number {
    return Math.max(num1, num2);
  }
    
  console.log(findMax(8, 15)); 

  function sumOfDigits(number: number): number {
    return number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  
  console.log(sumOfDigits(123)); 

  function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  console.log(generateRandomNumber(10, 20)); 

  function formatToCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }
  
  console.log(formatToCurrency(23.5)); 

  function findMissingInArithmeticSeq(sequence: number[]): number | undefined {
    const commonDifference = sequence[1] - sequence[0];
    for (let i = 0; i < sequence.length - 1; i++) {
      if (sequence[i + 1] - sequence[i] !== commonDifference) {
        return sequence[i] + commonDifference;
      }
    }
  }
  
  console.log(findMissingInArithmeticSeq([2, 4, 8])); 

  function integerToRoman(number: number): string {
    const romanNumerals: [number, string][] = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I'],
    ];
  
    let result = '';
  
    for (const [value, numeral] of romanNumerals) {
      while (number >= value) {
        result += numeral;
        number -= value;
      }
    }
  
    return result;
  }
  
  
  console.log(integerToRoman(55)); 

  function setupCounter(): void {
    let counter = localStorage.getItem('counter');
    const button = document.getElementById('counterButton') as HTMLButtonElement;
    
    if (!counter) {
      counter = '0';
      localStorage.setItem('counter', counter);
    }
  
    button.textContent = `Counter: ${counter}`;
  
    button.addEventListener('click', () => {
      counter = (parseInt(counter!) + 1).toString();
      localStorage.setItem('counter', counter);
      button.textContent = `Counter: ${counter}`;
    });
  
    const resetButton = document.getElementById('resetButton') as HTMLButtonElement;
    resetButton.addEventListener('click', () => {
      counter = '0';
      localStorage.setItem('counter', counter);
      button.textContent = `Counter: ${counter}`;
    });
  }
  
  document.addEventListener('DOMContentLoaded', setupCounter);
  
  function convertSecondsToTimer(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  
  console.log(convertSecondsToTimer(3600)); 

  <div id="timerDisplay">60:00</div>

  <script>
    function updateTimerDisplay(seconds) {
      const timerDisplay = document.getElementById('timerDisplay');
      timerDisplay.textContent = convertSecondsToTimer(seconds);
    }
  
    let secondsRemaining = 3600; s
    const interval = setInterval(() => {
      updateTimerDisplay(secondsRemaining);
      if (secondsRemaining <= 0) {
        clearInterval(interval);
        alert('Timer finished!');
      }
      secondsRemaining--;
    }, 1000);
  </script>
  
  <input type="number" id="inputTimerValue" placeholder="Enter timer value in seconds">
<button onclick="startTimer()">Start Timer</button>
<div id="customTimerDisplay"></div>

<script>
  function startTimer() {
    const inputTimerValue = document.getElementById('inputTimerValue') as HTMLInputElement;
    const customTimerDisplay = document.getElementById('customTimerDisplay');
    const seconds = parseInt(inputTimerValue.value);

    if (!isNaN(seconds)) {
      let secondsRemaining = seconds;
      const interval = setInterval(() => {
        const formattedTime = convertSecondsToTimer(secondsRemaining);
        customTimerDisplay.textContent = formattedTime;

        if (secondsRemaining <= 0) {
          clearInterval(interval);
          alert('Timer finished!');
        }
        secondsRemaining--;
      }, 1000);
    } else {
      customTimerDisplay.textContent = 'Please enter a valid number of seconds.';
    }
  }
</script>

//EP01==============================================================================
let firstName:string='mohamed'
let lastName:string='med'
let fullName:string=`${firstName} ${lastName}` 
let chaine:string='TypeScript is awesome!'
let longueur = (str:string):number =>str.replace(/ /g,'').length
let str:string='I love TypeScript!'
let str_replaced:string=str.replace('TypeScript','JavaScript')
let nbr_caracter=(str:string):number =>{ let count=0 ; for (let x of str.replace(/ /g,'')) { count+=1 } return count }
//console.log(nbr_caracter(str));
let str_reverse=(str:string):string=>{let str_inverse:string='';for(let i=str.length-1;i>=0;i--){str_inverse+=str[i]} return str_inverse} 
let cpt_voyelle=(str:string):number=>str.match(/[aeiouy]/gi)?str.match(/[aeiouy]/gi)!.length:0
//console.log(cpt_voyelle('MeeD'));
let occurrence_caracter=(str:string)=>{
    let _str=str.replace(/ /g,'').toLocaleUpperCase()
    let occurrences:{[x:string]:number}={}
    for(let x of _str){ 
        occurrences[x]=(occurrences[x]||0)+1
    }   
    let max_occur:number=1
    for (let x in occurrences){
        if(occurrences[x]>=max_occur){
            max_occur=occurrences[x]
        }
    }  
    let tab_souvent:string[]=[]
    for(let x in occurrences){
        if(occurrences[x]==max_occur){tab_souvent.push(x)}
    }
    return tab_souvent
}
//console.log(occurrence_caracter('yaaalliaiiikkk'))

let supprimer_espace = (str:string):string =>str.replace(/ /g,'')
let char:string='devFullStack devMobile'
let occur_sous_ensemble=(str:string,s_ens:string):number=>str.match(new RegExp(s_ens,'g'))?str.match(new RegExp(s_ens,'g'))!.length:0
         //str.split(s_ens).length-1
//console.log(occur_sous_ensemble(char,'dev'));
let capitaliser_titre=(str:string):string=>str.split(' ').map((mot)=>mot[0].toLocaleUpperCase()+mot.slice(1,mot.length)).join(' ')
let tronque_char=(str:string,longueur:number):string=>str.length>longueur?str.slice(0,longueur)+'...'
                                                                        :str
let slug=(str:string):string=>str.toLowerCase().split(' ').join('-')
//let slug=(str:string):string=>str.replace(/ /g,'-')
//console.log(slug(str));
let email:string='med@gmail.com'
let valide_email=(str:string)=>new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(str)?'email Valide':'email Invalide'


//console.log(valide_email(email));


  
  
  
  

  
  


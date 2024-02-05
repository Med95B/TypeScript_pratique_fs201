//A==================================================================
interface Voiture{
        marque:string
        modele:string
        annee:number
}
//B/C/D/E==================================================================
class Garage {
    
    voitures:Voiture[]

    constructor( voitures:Voiture[]){
            this.voitures=voitures
    }

    addCar(voiture:Voiture){
            this.voitures.push(voiture)
    }

    removeCar(voiture:Voiture){
            this.voitures.splice(this.voitures.indexOf(voiture),1)
    }

    getDataCar(marque:string,modele:string,annee:number){
        
                  return  this.voitures.find(voiture=>voiture.marque===marque
                                                    &&voiture.modele===modele
                                                    &&voiture.annee===annee)
                            ||'introuvable'
                                    
            }


}

let car1:Voiture={
    marque:'dacia',
    modele:'logan',
    annee:2020
}
let car2:Voiture={
    marque:'renault',
    modele:'megan',
    annee:2022
}
let car3:Voiture={
    marque:'mercedes',
    modele:'class a',
    annee:2023
}
let listVoitures=[car1,car2]

let garage1=new Garage(listVoitures)
console.log(garage1);

garage1.addCar(car3)
console.log(garage1);

garage1.removeCar(car1)
console.log(garage1);

console.log(garage1.getDataCar('renault','megan',2022))

//F/G=====================================================================

class Personne{

    id:number
    name:string
    age:number

        constructor(id:number,name:string,age:number){
                this.id=id
                this.name=name
                this.age=age
        }
}

//H/I=====================================================================

class Personnes{

    personnes:Personne[]

    constructor(personnes:Personne[]){
            this.personnes=personnes
    }

    addPersonne(person:Personne){
        this.personnes.push(person)
    }

    getPersonne(id:number):Personne|string{
        return this.personnes.find(pers=>pers.id==id) || 'personne introuvable'
    }

    updatePersonne(id:number,name:string,age:number){

            let index:number=this.personnes.findIndex(pers=>pers.id==id)  
            if(index!=-1){
                this.personnes[index]=new Personne(id,name,age)
            }
    }

    listePersonnes():Personne[]{
            return this.personnes
    }
}

let pers1=new Personne(1,'med',20)
let pers2=new Personne(2,'amin',22)
let pers3=new Personne(3,'ahmed',24)
let pers4=new Personne(1,'medmed',20)


let listPers=[pers1,pers2]

let personnes1=new Personnes(listPers)
console.log(personnes1);
personnes1.addPersonne(pers3)
console.log(personnes1);
console.log(personnes1.getPersonne(3));
personnes1.updatePersonne(1,'medmed',22)
console.log(personnes1);
console.log(personnes1.listePersonnes());


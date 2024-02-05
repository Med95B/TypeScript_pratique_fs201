//B/C/D/E==================================================================
var Garage = /** @class */ (function () {
    function Garage(voitures) {
        this.voitures = voitures;
    }
    Garage.prototype.addCar = function (voiture) {
        this.voitures.push(voiture);
    };
    Garage.prototype.removeCar = function (voiture) {
        this.voitures.splice(this.voitures.indexOf(voiture), 1);
    };
    Garage.prototype.getDataCar = function (marque, modele, annee) {
        return this.voitures.find(function (voiture) { return voiture.marque === marque
            && voiture.modele === modele
            && voiture.annee === annee; })
            || 'introuvable';
    };
    return Garage;
}());
var car1 = {
    marque: 'dacia',
    modele: 'logan',
    annee: 2020
};
var car2 = {
    marque: 'renault',
    modele: 'megan',
    annee: 2022
};
var car3 = {
    marque: 'mercedes',
    modele: 'class a',
    annee: 2023
};
var listVoitures = [car1, car2];
var garage1 = new Garage(listVoitures);
console.log(garage1);
garage1.addCar(car3);
console.log(garage1);
garage1.removeCar(car1);
console.log(garage1);
console.log(garage1.getDataCar('renault', 'megan', 2022));
//F/G=====================================================================
var Personne = /** @class */ (function () {
    function Personne(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return Personne;
}());
//H/I=====================================================================
var Personnes = /** @class */ (function () {
    function Personnes(personnes) {
        this.personnes = personnes;
    }
    Personnes.prototype.addPersonne = function (person) {
        this.personnes.push(person);
    };
    Personnes.prototype.getPersonne = function (id) {
        return this.personnes.find(function (pers) { return pers.id == id; }) || 'personne introuvable';
    };
    Personnes.prototype.updatePersonne = function (id, name, age) {
        var index = this.personnes.findIndex(function (pers) { return pers.id == id; });
        if (index != -1) {
            this.personnes[index] = new Personne(id, name, age);
        }
    };
    Personnes.prototype.listePersonnes = function () {
        return this.personnes;
    };
    return Personnes;
}());
var pers1 = new Personne(1, 'med', 20);
var pers2 = new Personne(2, 'amin', 22);
var pers3 = new Personne(3, 'ahmed', 24);
var pers4 = new Personne(1, 'medmed', 20);
var listPers = [pers1, pers2];
var personnes1 = new Personnes(listPers);
console.log(personnes1);
personnes1.addPersonne(pers3);
console.log(personnes1);
console.log(personnes1.getPersonne(3));
personnes1.updatePersonne(1, 'medmed', 22);
console.log(personnes1);
console.log(personnes1.listePersonnes());

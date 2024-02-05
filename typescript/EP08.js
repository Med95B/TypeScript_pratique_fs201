var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//A========================================================
var getArrayLength = function (tab) { return tab.length; };
var pers11 = {
    nom: "ahmed",
    age: 20,
};
var pers22 = {
    nom: "ahmed",
    age: 20,
};
var pers33 = {
    nom: "ahmed",
    age: 20,
};
console.log(getArrayLength(["aa", "bb", "cc"]));
console.log(getArrayLength([1, 2, 3]));
console.log(getArrayLength([pers11, pers22, pers33]));
//B========================================================
var typeArray = function (tab, type) { return tab.filter(function (item) { return typeof (item) === type; }); };
console.log(typeArray([1, 2, '1', '2'], 'string'));
//C========================================================
var unionArray = function (tab1, tab2) {
    var set = new Set(__spreadArray(__spreadArray([], tab1, true), tab2, true));
    return Array.from(set);
};
console.log(unionArray([1, 2, 3, 1, 1], [1, 1, 2, 4, 5, 6]));
//C========================================================
var intersectionArray = function (tab1, tab2) {
    var set1 = new Set(tab1);
    var set2 = new Set(tab2);
    console.log(set1);
    console.log(set2);
    return Array.from(set1).filter(function (item) { return Array.from(set2).includes(item); });
};
console.log(intersectionArray([1, 1, 2, 2, 3], [1, 2, 3, 3, 4, 5, 6]));

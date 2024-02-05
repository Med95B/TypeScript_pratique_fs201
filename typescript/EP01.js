//A=============================================================
var firstName = 'mohamed';
var lastName = 'med';
var fullName = "".concat(firstName, " ").concat(lastName);
//B==============================================================
var chaine = 'TypeScript is awesome!';
var longueur = function (str) { return str.replace(/ /g, '').length; };
//C==============================================================
var str = 'I love TypeScript!';
var str_replaced = str.replace('TypeScript', 'JavaScript');
//D==============================================================
var nbr_caracter = function (str) { var count = 0; for (var _i = 0, _a = str.replace(/ /ig, ''); _i < _a.length; _i++) {
    var x = _a[_i];
    count += 1;
} return count; };
//E==============================================================
var str_reverse = function (str) { var str_inverse = ''; for (var i = str.length - 1; i >= 0; i--) {
    str_inverse += str[i];
} return str_inverse; };
//F==============================================================
var cpt_voyelle = function (str) { return str.match(/[aeiouy]/g).length; };
//G==============================================================
var occurrence_caracter = function (str) {
    var _str = str.replace(/ /g, '').toLocaleUpperCase();
    var occurrences = {};
    for (var _i = 0, _str_1 = _str; _i < _str_1.length; _i++) {
        var x = _str_1[_i];
        occurrences[x] = (occurrences[x] || 0) + 1;
    }
    var max_occur = 1;
    for (var x in occurrences) {
        if (occurrences[x] >= max_occur) {
            max_occur = occurrences[x];
        }
    }
    var tab_souvent = [];
    for (var x in occurrences) {
        if (occurrences[x] == max_occur) {
            tab_souvent.push(x);
        }
    }
    return tab_souvent;
};
//console.log(occurrence_caracter('yaaalliaiiikkk'))
//H==============================================================
var supprimer_espace = function (str) { return str.replace(/ /g, ''); };
//I==============================================================
var char = 'devFullStack devMobile';
var occur_sous_ensemble = function (str, s_ens) { return str.match(new RegExp(s_ens, 'g')).length; };
//str.split(s_ens).length-1
//console.log(occur_sous_ensemble(char,'dev'));
//J==============================================================
var capitalier_titre = function (str) { return str.split(' ').map(function (mot) { return mot[0].toLocaleUpperCase() + mot.slice(1, mot.length); }).join(' '); };
//K==============================================================
var tronque_char = function (str, longueur) { return str.length > longueur ? str.slice(0, longueur) + '...'
    : str; };
//L==============================================================
var slug = function (str) { return str.toLowerCase().split(' ').join('-'); };
//let slug=(str:string):string=>str.replace(/ /g,'-')
//console.log(slug(str));
//M==============================================================
var email = 'med@gmail.com';
var valide_email = function (str) { return new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(str) ? 'email Valide' : 'email Invalide'; };
//console.log(valide_email(email));

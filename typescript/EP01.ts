//A=============================================================
let firstName:string='mohamed'
let lastName:string='med'
let fullName:string=`${firstName} ${lastName}` 
//B==============================================================
let chaine:string='TypeScript is awesome!'
let longueur = (str:string):number =>str.replace(/ /g,'').length
//C==============================================================
let str:string='I love TypeScript!'
let str_replaced:string=str.replace('TypeScript','JavaScript')
//D==============================================================
let nbr_caracter=(str:string):number =>{ let count=0 ; for (let x of str.replace(/ /ig,'')) { count+=1 } return count }
//E==============================================================
let str_reverse=(str:string):string=>{let str_inverse:string='';for(let i=str.length-1;i>=0;i--){str_inverse+=str[i]} return str_inverse} 
//F==============================================================
let cpt_voyelle=(str:string):number=>str.match(/[aeiouy]/g).length
//G==============================================================
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

//H==============================================================
let supprimer_espace = (str:string):string =>str.replace(/ /g,'')
//I==============================================================
let char:string='devFullStack devMobile'
let occur_sous_ensemble=(str:string,s_ens:string):number=>str.match(new RegExp(s_ens,'g')).length
         //str.split(s_ens).length-1
//console.log(occur_sous_ensemble(char,'dev'));
//J==============================================================
let capitalier_titre=(str:string):string=>str.split(' ').map((mot)=>mot[0].toLocaleUpperCase()+mot.slice(1,mot.length)).join(' ')
//K==============================================================
let tronque_char=(str:string,longueur:number):string=>str.length>longueur?str.slice(0,longueur)+'...'
                                                                        :str
//L==============================================================
let slug=(str:string):string=>str.toLowerCase().split(' ').join('-')
//let slug=(str:string):string=>str.replace(/ /g,'-')
//console.log(slug(str));
//M==============================================================
let email:string='med@gmail.com'
let valide_email=(str:string)=>new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/).test(str)?'email Valide':'email Invalide'


//console.log(valide_email(email));


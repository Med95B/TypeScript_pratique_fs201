
const list=document.querySelector<HTMLUListElement>("#list")
const form=document.querySelector<HTMLFormElement>("#task-form")
const input=document.querySelector<HTMLInputElement>("#task-input")

interface Tache{
    id:String
    titre:String,
    etat:boolean,
    dateCreation:Date,
}


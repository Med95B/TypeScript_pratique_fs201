export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function CountDec(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter - 1))
  setCounter(0)
}

let counter:number=0

export function updateDisplay(span:HTMLSpanElement){

  span.innerHTML=`Compteur : ${counter}`
}

export function incr(btn:HTMLButtonElement){

  btn.innerHTML='Incrementer'
  btn.addEventListener('click', () => {
            counter++
            updateDisplay(document.querySelector<HTMLSpanElement>('#countVal')!)
  })
  
}

export function decr(btn:HTMLButtonElement){

  btn.innerHTML='Decrementer'
  btn.addEventListener('click', () =>{
    counter--
    updateDisplay(document.querySelector<HTMLSpanElement>('#countVal')!)

  })
  
}

export function res(btn:HTMLButtonElement){

  btn.innerHTML='Renitialiser'
  btn.addEventListener('click', () =>{

    counter=0
    updateDisplay(document.querySelector<HTMLSpanElement>('#countVal')!)

  } )
  
}


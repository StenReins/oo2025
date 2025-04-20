class Calculator{
    calculationField = document.querySelector('#calculationField')!;

    
    add(event){
        if(event){
            this.calculationField.innerHTML += event.target.value;
        }
    };
    calculate(){
        if(this.calculationField?.innerHTML.length == 0){
            return ""
        }
        else{
            let result = parseInt(this.calculationField.innerHTML);
            return result
        }
    }
}

let calc = new Calculator()
let math_symbols = document.querySelectorAll('.math-symbol');
window.onload = function(){
    for(let i = 0; i<10; i++){
        document.querySelector(`#number-${i}`)?.addEventListener('click', calc.add);
    }
    for(let i = 0; i < math_symbols.length; i++){
        math_symbols[i].addEventListener('click', calc.add)
    }
    document.querySelector('#equals')?.addEventListener('submit', () => {
        document.querySelector('#calculationField')!.innerHTML = calc.calculate().toString()
    });
}
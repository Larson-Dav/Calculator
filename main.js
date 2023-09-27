console.log('GitHub Main Javascript File')

function Calculate(term1, operator, term2){
    if(operator == '+'){
        console.log(Add(term1, term2))
    } else if(operator == '-'){
        console.log(Sub(term1, term2))
    } else if(operator == '*'){
        console.log(Mul(term1, term2))
    } else if(operator == '/'){
        console.log(Div(term1, term2))
    } else {
        return 'Operator not recognized'
    }
}

function Add(param1, param2){
}

function Sub(param1, param2){
}

function Mul(param1, param2){
}

function Div(param1, param2){
}
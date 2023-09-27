console.log('GitHub Main Javascript File')

function Calculate(term1, operator, term2){
    const addition = '+',
          sustraction = '-',
          multiplication = '*',
          division = '/'
    if(operator == addition){
        console.log(Add(term1, term2))
    } else if(operator == sustraction){
        console.log(Sub(term1, term2))
    } else if(operator == multiplication){
        console.log(Mul(term1, term2))
    } else if(operator == division){
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
    return param1 * param2
    // done by Julien
}

function Div(param1, param2){
}
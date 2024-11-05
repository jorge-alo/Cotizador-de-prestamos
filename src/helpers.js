

export const CalcularTotal = (inputValue, meses) => {
    const inputInt = parseInt(inputValue)
    const plazoInt = parseInt(meses)

    let totalInteres = 0

    if(inputInt < 1000){
        totalInteres = inputInt * 0.25
    }else if(inputInt >= 1000 && inputInt < 5000){
        totalInteres = inputInt * 0.20
    }else if(inputInt >= 5000 && inputInt < 10000){
        totalInteres = inputInt * 0.15
    }else{
        totalInteres = inputInt * 0.10
    }

    let mesesInteres = 0
    if(plazoInt == 3){
        mesesInteres = inputInt * 0.05 
    }else if(plazoInt == 6){
        mesesInteres = inputInt * 0.10
    }else if(plazoInt == 12){
        mesesInteres = inputInt * 0.15
    }else if(plazoInt == 24){
        mesesInteres = inputInt * 0.20
    }

  return totalInteres + mesesInteres + inputInt;
}

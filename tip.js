function tipCalc(total, tipPercentage){
    let tipPerc = tipPercentage/100
    let tip = total*tipPerc
    return tip
}

module.exports = tipCalc
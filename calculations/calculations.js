


const sumFields = (inputOutput, textfieldMappings) => {

    const { inputArray } = inputOutput

    let sum = 0

    textfieldMappings.forEach(field => {
        const key = Object.keys(field)[0]
        if (inputArray.includes(key)) {
            const dirtyValue = field[key]
            const val = isNaN(parseInt(dirtyValue)) ? 0 : parseInt(dirtyValue)
            sum += val
        }
    })
    return sum.toFixed(2).toString()
}











const myColumns = [
    //col 1
    [
        { fieldName: 'form1[0].Page5[0].PartA[0].Column1[0].Line36Amount1[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column1[0].Line37Amount1[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column1[0].Line38Amount1[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column1[0].Line39Rate1[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column1[0].Line40Amount1[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column1[0].Line41Amount1[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column1[0].Line42Amount1[0]', value: '' },

    ],

    //col 2
    [
        { fieldName: 'form1[0].Page5[0].PartA[0].Column2[0].Line36Amount2[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column2[0].Line37Amount2[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column2[0].Line38Amount2[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column2[0].Line39Rate2[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column2[0].Line40Amount2[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column2[0].Line41Amount2[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column2[0].Line42Amount2[0]', value: '' },
    ],

    // col 3
    [
        { fieldName: 'form1[0].Page5[0].PartA[0].Column3[0].Line36Amount3[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column3[0].Line37Amount3[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column3[0].Line38Amount3[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column3[0].Line39Rate3[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column3[0].Line40Amount3[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column3[0].Line41Amount3[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column3[0].Line42Amount3[0]', value: '' },
    ],
    //col 4
    [
        { fieldName: 'form1[0].Page5[0].PartA[0].Column4[0].Line36Amount4[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column4[0].Line37Amount4[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column4[0].Line38Amount4[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column4[0].Line39Rate4[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column4[0].Line40Amount4[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column4[0].Line41Amount4[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column4[0].Line42Amount4[0]', value: '' },
    ],


    //col 5 
    [
        { fieldName: 'form1[0].Page5[0].PartA[0].Column5[0].Line36Amount5[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column5[0].Line37Amount5[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column5[0].Line38Amount5[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column5[0].Line39Rate5[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column5[0].Line40Amount5[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column5[0].Line41Amount5[0]', value: '' },
        { fieldName: 'form1[0].Page5[0].PartA[0].Column5[0].Line42Amount5[0]', value: '' },
    ]
]








const stepFive = (taxableIncome) => {
    // taxableIncome === line 26000


    const min = 49020
    const amountTwo = 98040
    const amountThree = 151978
    const max = 216511
    let column = 1
    let subtractValue = 0
    let percentage = 0.15
    let additionValue = 0
    if (taxableIncome < min) {
        column = 1
    } else if (taxableIncome > min && taxableIncome < amountTwo) {
        column = 2
        subtractValue = min
        percentage = 0.205
        additionValue = 7353
    } else if (taxableIncome > amountTwo && taxableIncome < amountThree) {
        column = 3
        subtractValue = amountTwo
        percentage = 0.26
        additionValue = 17402.1
    } else if (taxableIncome > amountThree && taxableIncome < max) {
        column = 4
        subtractValue = amountThree
        percentage = 0.29
        additionValue = 31425.98
    } else if (taxableIncome > max) {
        column = 5
        subtractValue = max
        percentage = 0.33
        additionValue = 50140.55
    }

    rowOne = taxableIncome
    rowTwo = subtractValue
    rowThree = taxableIncome - subtractValue
    rowFour = (percentage * 100).toString() + "%"
    rowFive = rowThree * percentage
    rowSix = additionValue
    rowSeven = rowFive + additionValue


    const resultValues = [rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix, rowSeven]

    myColumns[column - 1].forEach((row, index) => {
        if (index !== 3) {

            row.value = resultValues[index].toFixed(2).toString()
        } else {
            row.value = rowFour
        }
    })
    return myColumns[column - 1]









}

module.exports = {
    sumFields,
    stepFive
}


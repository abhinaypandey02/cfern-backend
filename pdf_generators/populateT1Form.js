const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');
const { createStepOneObjects } = require('../datamaps/stepOne')
const { sumFields, stepFive } = require('./../calculations/calculations')
const { sums } = require('./../calculations/sums')

const populateT1Form = async (inputFile, body) => {
  const stepFiveMappings = stepFive(52321)
  const pdfDoc = await PDFDocument.load(await readFile(inputFile));
  const form = pdfDoc.getForm();
  const fields = form.getFields()

  fields.forEach(field => {
    const fieldType = field.constructor.name
    // console.log(field.getName(), fieldType)
  })

  const getKeyValuePairsFromObject = (obj) => {
    const pdfFieldName = Object.keys(obj)[0]
    const parsedValue = parseInt(Object.values(obj)[0])
    if (isNaN(parsedValue)) {
      const value = Object.values(obj)[0]
      if (value === undefined) {
        const pdfFieldValue = 'ud'
        return [pdfFieldName, pdfFieldValue]
      } else if (!value) {
        const pdfFieldValue = 'ud'
        return [pdfFieldName, pdfFieldValue]
      }
      const pdfFieldValue = value
      return [pdfFieldName, pdfFieldValue]

    } else {
      const value = Object.values(obj)[0]
      const pdfFieldValue = value.toString()
      return [pdfFieldName, pdfFieldValue]
    }
  }

  try {
    const { textfieldMappings,
      checkboxMappings,
      dropdownMappings,
      radiobuttonMappings } = await createStepOneObjects(body)

    textfieldMappings.forEach(obj => {
      const [pdfFieldName, pdfFieldValue] = getKeyValuePairsFromObject(obj)
      const textField = form.getTextField(pdfFieldName)
      textField.setText(pdfFieldValue)


      // sums
      sums.forEach(sum => {
        if (sum.outputArray.includes(pdfFieldName)) {
          const calculationValue = sumFields(sum, textfieldMappings)
          textField.setText(calculationValue)
        }
      })
    })


    checkboxMappings.forEach(obj => {
      const [pdfFieldName, pdfFieldValue] = getKeyValuePairsFromObject(obj)
      const checkbox = form.getField(pdfFieldName)
      if (pdfFieldValue) {
        checkbox.check()
      }
    })


    dropdownMappings.forEach(obj => {
      const [pdfFieldName, pdfFieldValue] = getKeyValuePairsFromObject(obj)
      const dropdown = form.getField(pdfFieldName)
      dropdown.select(pdfFieldValue)
    })

    radiobuttonMappings.forEach(obj => {

      const [pdfFieldName, pdfFieldValue] = getKeyValuePairsFromObject(obj)
      const radiobutton = form.getField(pdfFieldName)
      radiobutton.select(pdfFieldValue)
    })

    stepFiveMappings.forEach(obj => {
      const textfield = form.getTextField(obj.fieldName)
      textfield.setText(obj.value)
    })



    const bytes = await pdfDoc.save()

    const amount = 0
    return { t1Form: bytes, amount: amount }


  } catch (err) {
    console.log(err)
  }

}

module.exports = {
  populateT1Form

}
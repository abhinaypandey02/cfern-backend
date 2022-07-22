const { readFile, writeFile } = require('fs/promises');
const { legacyT1Form } = require('./legacyT1form')
const { populateT1Form } = require('./populateT1Form')
const { populate428Form } = require('./populate428Form')
const { outputDirectory, templateDirectory } = require('../config')
const path = require('path')

const populateAllForms = async (body, res) => {
  try {
    const input1 = path.join(templateDirectory, 't1-unlocked.pdf')
    const input2 = path.join(templateDirectory, 'on428-unlocked.pdf')


    // const {t1Form, amount} = await legacyT1Form(input1, body, res)
    const { t1Form, amount } = await populateT1Form(input1, body, res)
    const on428Form = await populate428Form(input2, amount)


    const output1 = path.join(outputDirectory, 'newt1form.pdf')
    const output2 = path.join(outputDirectory, 'newon428.pdf')


    await writeFile(output1, t1Form)
    await writeFile(output2, on428Form)

    res.status(200).send([t1Form, on428Form]);

    return `written to ${output1} and ${output2}`
  } catch (err) {
    console.log(err)
    console.log('ERROR IN populateAllForms.js')
  }

}

module.exports = {
  populateAllForms
}









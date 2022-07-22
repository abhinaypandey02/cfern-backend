const express = require('express');
const cors = require('cors');
const app = express();
const { outputDirectory, templateDirectory } = require('./config')
const { writeFile } = require('fs/promises')
const path = require('path')


const { populateAllForms } = require('./pdf_generators/populateAllForms')
const { populateT1Form } = require('./pdf_generators/populateT1Form')


//middleware
const corsOptions = { origin: "*" }
app.use(cors(corsOptions))
app.use(express.json());


app.post('/updatePdf', async (req, res) => {
  await populateAllForms(
    req.body, // request body from next app
    res) // response object
    ;
});

app.post('/viewPdf', async (req, res) => {
  try {
    const testPdfOutput = path.join(outputDirectory, 'testpdf.pdf')
    const { t1Form } = await populateT1Form(path.join(templateDirectory, 't1-unlocked.pdf'), req.body)
    await writeFile(testPdfOutput, t1Form)
    console.log('file written')

    res.status(200).send('succes')
  } catch (err) {
    console.log(err)
  }
})


app.listen(4000, () => console.log('Server started on port 4000'));

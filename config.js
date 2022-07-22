const path = require('path')
const baseDirectory = __dirname

const outputDirectory = path.join(baseDirectory, 'pdfs/output')
const templateDirectory = path.join(baseDirectory, 'pdfs/templates')

module.exports = {
  baseDirectory,
  outputDirectory,
  templateDirectory
}

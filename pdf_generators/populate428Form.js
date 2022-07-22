const { PDFDocument } = require('pdf-lib');
const { readFile } = require('fs/promises');


const populate428Form = async (fileName, amount) => {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(fileName), {
      ignoreEncryption: true,
    });

    const form = pdfDoc.getForm();
    function setTextField(fieldName, amount) {

      form.getTextField(fieldName).setText(amount.toFixed(2).toString() + '   ');
    }
    const fields = form.getFields()
    fields.forEach(field => {
    })
    setTextField("form1[0].Page1[0].Page1[0].Line1[0].Amount[0]", amount)
    if (amount <= 45142) {
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column1[0].Line2[0].Amount[0]", amount)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column1[0].Line4[0].Amount[0]", amount)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column1[0].Line6[0].Amount[0]", amount * 5.05 / 100)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column1[0].Line8[0].Amount[0]", amount * 5.05 / 100)
    } else if (amount > 45142 && amount <= 90287) {
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column2[0].Line2[0].Amount[0]", amount)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column2[0].Line4[0].Amount[0]", amount - 45142)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column2[0].Line6[0].Amount[0]", (amount - 45142) * 9.15 / 100)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column2[0].Line8[0].Amount[0]", (amount - 45142) * 9.15 / 100 + 2279.67)
    } else if (amount > 90287 && amount <= 150000) {
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column4[0].Line2[0].Amount[0]", amount)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column4[0].Line4[0].Amount[0]", amount - 90287)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column4[0].Line6[0].Amount[0]", (amount - 90287) * 11.16 / 100)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column4[0].Line8[0].Amount[0]", (amount - 90287) * 11.16 / 100 + 6410.44)
    } else if (amount > 150000 && amount <= 220000) {
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column4[0].Line2[0].Amount[0]", amount)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column4[0].Line4[0].Amount[0]", amount - 150000)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column4[0].Line6[0].Amount[0]", (amount - 150000) * 12.16 / 100)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column4[0].Line8[0].Amount[0]", (amount - 150000) * 12.16 / 100 + 13074.41)
    } else {
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column5[0].Line2[0].Amount[0]", amount)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column5[0].Line4[0].Amount[0]", amount - 220000)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column5[0].Line6[0].Amount[0]", (amount - 220000) * 13.16 / 100)
      setTextField("form1[0].Page1[0].Page1[0].Chart[0].Column5[0].Line8[0].Amount[0]", (amount - 220000) * 13.16 / 100 + 21586.41)
    }
    const bytes = await pdfDoc.save()
    return bytes

  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  populate428Form
}
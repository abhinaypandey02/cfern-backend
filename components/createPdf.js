const { PDFDocument } = require('pdf-lib');
const { readFile } = require('fs/promises');

const createPdf = async (input, body, res) => {
	try {
		const pdfDoc = await PDFDocument.load(await readFile(input), {
			ignoreEncryption: true,
		});

		let {
			// * Step 1
			// identification
			firstName,
			lastName,
			mailingAddress,
			poBox,
			rr,
			city,
			prov,
			postalCode,
			email,
			sin,
			dob,
			dod,
			martialStatus,
			language,
			// Residence Information
			oldProvince,
			currentProvince,
			businessProvince,
			entryDate,
			departureDate,
			// spouse/partner information
			firstNameSpouse,
			sinSpouse,
			selfEmployedCheck,
			netIncomeSpouse,
			uccb11700,
			uccb21300,
			// elections information
			canadianCitizen,
			futureElector,
			// indian act
			indianActCheck,
			// foreign property
			foreignPropertyCheck,
			// 	// Boxes
			// 	box14: box14,
			// 	box16: box16,
			// 	field83,
			// 	box18: box18,
			// 	box55: box18,
			// 	box20: box20,
			// 	box75: box20,
			// 	box22: box22,
			// 	box42: box42,
			//  box43:	box43,
			// 	 box44:box44,
			// 	 box52:box52,
			// 	 box66:box66,
			// 	 box39:box39,
			// 	 box41:box39:,
			//  box77:box77,
			// 	 box87:box87,
			// 	field88: box87,
			// 	 box85:box85,
			// Boxes
			box14,
			box16,
			field83,
			box18,
			box55,
			box20,
			box75,
			box22,
			box42,
			box43,
			box44,
			box52,
			box66,
			box39,
			box41,
			box77,
			box87,
			box88,
			box85,
		} = body;

		// Modify doc, fill out the form...
		const fieldNames = pdfDoc.getForm().getFields();

		fieldNames.forEach((field, i) => {
			// console.log(field.getName(), i);
			// * Step 1
			// identification
			if (i === 8) {
				field.setText(firstName);
			}
			if (i === 9) {
				field.setText(lastName);
			}
			if (i === 10) {
				field.setText(mailingAddress);
			}
			if (i === 11) {
				field.setText(poBox);
			}
			if (i === 12) {
				field.setText(rr);
			}
			if (i === 13) {
				field.setText(city);
			}
			if (i === 14) {
				field.select(prov);
			}
			if (i === 15) {
				field.setText(postalCode);
			}
			if (i === 16) {
				field.setText(email);
			}
			if (i === 17) {
				field.setText(sin);
			}
			if (i === 18) {
				field.setText(dob);
			}
			if (i === 19) {
				field.setText(dod);
			}
			if (i === 20) {
				if (martialStatus === 'Married') {
					field.check();
				}
			}
			if (i === 21) {
				if (martialStatus === 'Living common-law') {
					field.check();
				}
			}
			if (i === 22) {
				if (martialStatus === 'Widowed') {
					field.check();
				}
			}
			if (i === 23) {
				if (martialStatus === 'Divorced') {
					field.check();
				}
			}
			if (i === 24) {
				if (martialStatus === 'Separated') {
					field.check();
				}
			}
			if (i === 25) {
				if (martialStatus === 'Single') {
					field.check();
				}
			}
			if (i === 26) {
				if (language === 'English') {
					field.select('1');
				} else if (language === 'French') {
					field.select('2');
				}
			}

			// * Residence Information
			if (i === 27) {
				field.select(oldProvince);
			}
			if (i === 28) {
				field.select(currentProvince);
			}
			if (i === 29) {
				field.select(businessProvince);
			}
			if (i === 30) {
				field.setText(entryDate);
			}
			if (i === 31) {
				field.setText(departureDate);
			}
			if (i == 32) {
				field.setText(firstNameSpouse);
			}
			if (i == 33) {
				field.setText(sinSpouse);
			}
			if (i == 34) {
				if (selfEmployedCheck === true) field.check(selfEmployedCheck);
			}
			if (i == 35) {
				field.setText(netIncomeSpouse);
			}
			if (i == 36) {
				field.setText(uccb11700);
			}
			if (i == 37) {
				field.setText(uccb21300);
			}
			if (i == 38) {
				if (canadianCitizen === true) field.check();
			}
			if (i == 39) {
				if (canadianCitizen === false) field.check();
			}
			if (i == 40) {
				if (futureElector === true) field.check();
			}
			if (i == 41) {
				if (futureElector === false) field.check();
			}
			if (i == 42) {
				if (indianActCheck === true) field.check();
			}
			if (i == 43) {
				if (foreignPropertyCheck === true) field.check();
			}
			if (i == 44) {
				if (foreignPropertyCheck === false) field.check();
			}
			if (i == 45) {
				field.setText(box14);
			}
			if (i == 47) {
				field.setText(box42);
			}
			if (i == 71) {
				field.setText(box66);
			}

			const fieldes18Sum =
				Number(box14) +
				// field2 +
				// field3 +
				// field4 +
				// field5 +
				// field6 +
				// field7 +
				// field8 +
				// field9 +
				// field10 +
				// field11 +
				// field12 +
				// field13 +
				// field14 +
				// field15 +
				// field16 +
				Number(box66);
			// field18;
			if (i == 73) {
				field.setText(fieldes18Sum.toString());
			}
			if (i == 86) {
				field.setText(fieldes18Sum.toString());
			}
			if (i == 92) {
				field.setText(fieldes18Sum.toString());
			}
			if (i == 93) {
				field.setText(fieldes18Sum.toString());
			}
			if (i == 94) {
				field.setText(box52);
			}

			if (i == 95) {
				field.setText(box20);
			}
			if (i == 99) {
				field.setText(box44);
			}
			if (i == 110) {
				if (box16 > 290.5) {
					return res.status(400).send('it should be less than 290.5');
				}
				field.setText(box16);
			}
			if (i == 112) {
				field.setText(box77);
			}
			const sum33to50 =
				Number(box20) + Number(box44) + Number(box16) + Number(box77);
			if (i == 117) {
				field.setText(sum33to50.toString());
			}
			if (i == 118) {
				field.setText(fieldes18Sum.toString());
			}
			const NetIncome = fieldes18Sum - sum33to50;

			if (i == 119) {
				// check if net income is negative
				if (NetIncome < 0) {
					field.setText('0');
				} else {
					field.setText(NetIncome.toString());
				}
			}
			if (i == 120) {
				field.setText('0');
			}
			const totalNet = NetIncome - 0;
			if (i == 121) {
				// check if net income is negative
				if (totalNet < 0) {
					field.setText('0');
				} else {
					field.setText(totalNet.toString());
				}
			}
			if (i == 122) {
				if (totalNet < 0) {
					field.setText('0');
				} else {
					field.setText(totalNet.toString());
				}
			}
			if (i == 123) {
				field.setText(box43);
			}
			if (i == 124) {
				field.setText(box39);
			}

			const sum56to64 = Number(box43) + Number(box39);

			if (i == 133) {
				field.setText(sum56to64.toString());
			}
			if (i == 134) {
				field.setText('0');
			}
			let taxable = totalNet - sum56to64;
			if (taxable < 0) {
				taxable = 0;
			}
			if (i == 135) {
				field.setText(taxable.toString());
			}

			// * Federal Tax First calculation

			if (taxable <= 49020) {
				if (i == 136) {
					if (taxable < 0) {
						field.setText('0');
					} else {
						field.setText(taxable.toString());
					}
				}

				let federalTaxA = taxable - 0;
				if (federalTaxA < 0) {
					federalTaxA = 0;
				}
				if (i == 138) {
					field.setText(taxable.toString());
				}

				federalTaxA = federalTaxA * 0.15;
				federalTaxA = Math.round(federalTaxA * 100) / 100;
				if (i == 140) {
					field.setText(federalTaxA.toString());
				}

				federalTaxA = federalTaxA + 0;
				if (i == 142) {
					field.setText(federalTaxA.toString());
				}
				// * Federal Tax Second calculation
			} else if (taxable > 49020 && taxable <= 98040) {
				if (i == 143) {
					if (taxable < 0) {
						field.setText('0');
					} else {
						field.setText(taxable.toString());
					}
				}

				let federalTaxA = taxable - 49020;
				if (federalTaxA < 0) {
					federalTaxA = 0;
				}
				if (i == 145) {
					field.setText(federalTaxA.toString());
				}

				federalTaxA = federalTaxA * 0.205;
				// only 2 decimal places
				federalTaxA = Math.round(federalTaxA * 100) / 100;
				if (i == 147) {
					field.setText(federalTaxA.toString());
				}

				federalTaxA = federalTaxA + 7353;
				if (i == 149) {
					field.setText(federalTaxA.toString());
				}
				// * Federal Tax Third calculation
			} else if (taxable > 98040 && taxable <= 151978) {
				if (i == 150) {
					if (taxable < 0) {
						field.setText('0');
					} else {
						field.setText(taxable.toString());
					}
				}

				let federalTaxA = taxable - 98040;
				if (federalTaxA < 0) {
					federalTaxA = 0;
				}
				if (i == 152) {
					field.setText(federalTaxA.toString());
				}

				federalTaxA = federalTaxA * 0.26;
				federalTaxA = Math.round(federalTaxA * 100) / 100;
				if (i == 154) {
					field.setText(federalTaxA.toString());
				}

				federalTaxA = federalTaxA + 17402.1;
				if (i == 156) {
					field.setText(federalTaxA.toString());
				}
				// * Federal Tax Fourth calculation
			} else if (taxable > 151978 && taxable <= 216511) {
				if (i == 157) {
					if (taxable < 0) {
						field.setText('0');
					} else {
						field.setText(taxable.toString());
					}
				}
				console.log(taxable);
				let federalTaxA = taxable - 151978;
				if (federalTaxA < 0) {
					federalTaxA = 0;
				}
				if (i == 159) {
					field.setText(federalTaxA.toString());
				}

				federalTaxA = federalTaxA * 0.29;
				federalTaxA = Math.round(federalTaxA * 100) / 100;
				if (i == 161) {
					field.setText(federalTaxA.toString());
				}

				federalTaxA = federalTaxA + 31425.98;
				if (i == 163) {
					field.setText(federalTaxA.toString());
				}
			}

			if (i == 181) {
				field.setText(field83);
			}
			if (i == 183) {
				field.setText(box18);
			}
			if (i == 252) {
				field.setText(box22);
			}
			// if (i == 183) {
			// 	field.setText(box18);
			// }

			if (i == 185) {
				field.setText(box87);
			}
			if (i == 186) {
				field.setText(box88);
			}
			if (i == 205) {
				field.setText(box85);
			}
		});

		const pdfBytes = await pdfDoc.save();
		res.send(pdfBytes);
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	createPdf,
};

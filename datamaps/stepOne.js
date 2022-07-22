const { sumFields } = require('./../calculations/calculations')
const { oneToEighteen } = require('./../calculations/sums')

const createStepOneObjects = async (body) => {

  console.log(body.sin.length)
  const mailAdress = `${body.postalCode} ${body.city} ${body.currentProvince}, ${body.streetNo} ${body.streetName} `
  const textfieldMappings =
    [
      // page 1 & 2 textfieldMappings 
      { "form1[0].Page1[0].Step1[0].Identification[0].ID_FirstNameInitial[0]": body.firstName },
      { "form1[0].Page1[0].Step1[0].Identification[0].ID_LastName[0]": body.lastName },
      { 'form1[0].Page1[0].Step1[0].Identification[0].ID_MailingAddress[0]': mailAdress },
      { "form1[0].Page1[0].Step1[0].Identification[0].ID_POBox[0]": '' },
      { "form1[0].Page1[0].Step1[0].Identification[0].ID_RuralRoute[0]": '' },
      { "form1[0].Page1[0].Step1[0].Identification[0].ID_City[0]": body.city },
      { "form1[0].Page1[0].Step1[0].Identification[0].PostalCode_Comb_BordersAll[0].PostalCode[0]": body.postalCode },
      { "form1[0].Page1[0].Step1[0].Identification[0].EmailAddress[0]": body.email },
      { "form1[0].Page1[0].Step1[0].Identification[0].SIN_Comb_BordersAll[0].SIN_Comb[0]": body.sin },
      { "form1[0].Page1[0].Step1[0].Identification[0].DateBirth_Comb_BordersAll[0].DateBirth_Comb[0]": body.dob },
      { "form1[0].Page1[0].Step1[0].Identification[0].DateDeath_Comb_BordersAll[0].DateDeath_Comb[0]": body.dod },
      { "form1[0].Page1[0].Step1[0].Residence_Info[0].Date_Entry[0].DateMMDD_Comb_BordersAll_Std[0].DateMMDD_Comb[0]": body.entryDate },
      { "form1[0].Page1[0].Step1[0].Residence_Info[0].Date_Departure[0].DateMMDD_Comb_BordersAll_Std[0].DateMMDD_Comb[0]": body.departureDate },
      { "form1[0].Page1[0].Step1[0].Info_Spouse_CLP[0].Spouse_First_Name[0]": body.firstNameSpouse },
      { "form1[0].Page1[0].Step1[0].Info_Spouse_CLP[0].SIN_Comb_BordersAll[0].SIN_Comb[0]": body.sinSpouse },
      { "form1[0].Page1[0].Step1[0].Info_Spouse_CLP[0].Line23600[0].Amount[0]": '' },
      { "form1[0].Page1[0].Step1[0].Info_Spouse_CLP[0].Line11700[0].Amount[0]": '' },
      { "form1[0].Page1[0].Step1[0].Info_Spouse_CLP[0].Line21300[0].Amount[0]": '' },



      // page 3 textfieldMappings
      { "form1[0].Page3[0].Step2[0].Line_10100_EmploymentIncome[0].Line_10100_Amount[0]": body.T4.box14 }, // line 1

      { "form1[0].Page3[0].Step2[0].Line_10105_Taxexemptamount[0].Line_10105_Amount[0]": '?' },
      { "form1[0].Page3[0].Step2[0].Line_10120_Commissions[0].Line_10120_Amount[0]": body.T4.box42 },
      { "form1[0].Page3[0].Step2[0].Line_10130_sf[0].Line_10130_Amount[0]": '?' },


      // has small number 2-4
      { "form1[0].Page3[0].Step2[0].Line_10400_OtherEmploymentIncome[0].Line_10400_Amount[0]": 'l 2' },
      { "form1[0].Page3[0].Step2[0].Line_11300_OldAgeSecurityPension[0].Line_11300_Amount[0]": 'l 3' },
      { "form1[0].Page3[0].Step2[0].Line_11400_CPP_QPP[0].Line_11400_Amount[0]": 'l 4' },


      { "form1[0].Page3[0].Step2[0].Line_11410_DisabilityBenefits[0].Line_11410_Amount[0]": '?' },

      // has small number 5-7
      { "form1[0].Page3[0].Step2[0].Line_11500_OtherPensions[0].Line_11500_Amount[0]": 'l 5' },
      { "form1[0].Page3[0].Step2[0].Line_11600_ElectedSplitPension[0].Line_11600_Amount[0]": 'l 6' },
      { "form1[0].Page3[0].Step2[0].Line_11700_UCCB[0].Line_11700_Amount[0]": 'l 7' },


      { "form1[0].Page3[0].Step2[0].Line_11701_UCCBDesignated[0].Line_11701_Amount[0]": 'l ?' },


      // has small number 8
      { "form1[0].Page3[0].Step2[0].Line_11900_EmploymentInsurance[0].Line_11900_Amount[0]": 'l 8' },


      { "form1[0].Page3[0].Step2[0].Line_11905_Employmentmaternity[0].Line_11905_Amount[0]": 'l 14' },

      // has small number 9
      { "form1[0].Page3[0].Step2[0].Line_12000_TaxableDividends[0].Amount[0]": 'l 9' },

      { "form1[0].Page3[0].Step2[0].Line_12010_OtherTaxableDividends[0].Line_12010_Amount[0]": '?' },

      // has small number 10-18
      { "form1[0].Page3[0].Step2[0].Line_12100_InvestmentIncome[0].Line_12100_Amount[0]": 'l 10' },
      { "form1[0].Page3[0].Step2[0].Line_12200_PartnershipIncome[0].Line_12200_Amount[0]": 'l 11' },
      { "form1[0].Page3[0].Step2[0].Line_12500_RDSP[0].Line_12500_Amount[0]": 'l 12' },
      // { "form1[0].Page3[0].Step2[0].Line_12599_12600_RentalIncome[0].Line_12599_Amount[0]": 'l 13' },
      { "form1[0].Page3[0].Step2[0].Line_12599_12600_RentalIncome[0].Line_12600_Amount[0]": 'l 13' },
      { "form1[0].Page3[0].Step2[0].Line_12700_TaxableCapitalGains[0].Line_12700_Amount[0]": 'l 14' },
      // { "form1[0].Page3[0].Step2[0].Line_12799_12800_SupportPayReceived[0].Line_12799_Amount[0]": 'l 15' },
      { "form1[0].Page3[0].Step2[0].Line_12799_12800_SupportPayReceived[0].Line_12800_Amount[0]": 'l 15' },
      { "form1[0].Page3[0].Step2[0].Line_12900_RRSPIncome[0].Line_12900_Amount[0]": 'l 16' },
      // { "form1[0].Page3[0].Step2[0].Line_13000_OtherIncome[0].Line_13000_Specify[0]": body.T4.box66 },
      { "form1[0].Page3[0].Step2[0].Line_13000_OtherIncome[0].Line_13000_Amount[0]": 'l 17' },
      { "form1[0].Page3[0].Step2[0].Line_13010_Taxablescholarship[0].Amount[0]": 'l 18' },
      { "form1[0].Page3[0].Step2[0].Line_19[0].Amount[0]": 'sum' },
      { "form1[0].Page3[0].Step2[0].Line20[0].Line_13499_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line20[0].Line_13500_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line21[0].Line_13699_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line21[0].Line_13700_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line22[0].Line_13899_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line22[0].Line_13900_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line23[0].Line_14099_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line23[0].Line_14100_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line24[0].Line_14299_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line24[0].Line_14300_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line_25[0].Amount1[0]": 251 },
      { "form1[0].Page3[0].Step2[0].Line_25[0].Amount2[0]": 252 },
      { "form1[0].Page3[0].Step2[0].Line_26[0].Amount1[0]": body.T4.box19 + body.T4.box25 },
      { "form1[0].Page3[0].Step2[0].Line_14400_WorkersCompBen[0].Line_14400_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line_14500_SocialAssistPay[0].Line_14500_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line_14600_NetFedSupplements[0].Line_14600_Amount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line_14700_AddLines[0].Line_14700_EqualsAmount[0]": 'na' },
      { "form1[0].Page3[0].Step2[0].Line_14700_AddLines[0].Line_14700_PlusAmount[0]": '' },
      { "form1[0].Page3[0].Step2[0].Line_15000_TotalIncome[0].Line_15000_Amount[0]": 333 },

      // page 4 

      { 'form1[0].Page4[0].Step3[0].Line_15000_TotalIncome_2[0].Line_15000_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_20600_PensionAdjustment[0].Line_20600_Amount[0]': body.T4.box52 },
      { 'form1[0].Page4[0].Step3[0].Line_20700_RPPDeduction[0].Line_20700_Amount[0]': body.T4.box20 }, // also box 75 mentioned
      { 'form1[0].Page4[0].Step3[0].Line_20800_RRSPDeduction[0].Line_20800_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_20810_PRPP[0].Line_20810_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_21000_SplitPensionDeduction[0].Line_21000_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_21200_Dues[0].Line_21200_Amount[0]': body.T4.box2 },
      { 'form1[0].Page4[0].Step3[0].Line_21300_UCCBRepayment[0].Line_21300_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_21400_ChildCareExpenses[0].Line_21400_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_21500_DisabilityDeduction[0].Line_21500_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line40[0].Line_21699_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line40[0].Line_21700_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_21900_MovingExpenses[0].Line_21900_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line42[0].Line_21999_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line42[0].Line_22000_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_22100_CarryingChargesInterest[0].Line_22100_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_22200_CPP_QPP_Contributions[0].Line_22200_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_22215_DeductionCPP_QPP[0].Line_22215_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_22400_XplorationDevExpenses[0].Line_22400_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_22900_OtherEmployExpenses[0].Line_22900_Amount[0]': body.T4.box77 },
      { 'form1[0].Page4[0].Step3[0].Line_23100_ClergyResDeduction[0].Line_23100_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_23200_OtherDeductions[0].Line_23200_Specify[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_23200_OtherDeductions[0].Line_23200_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line23210[0].Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_23300_AddLines[0].Line_23300_Amount1[0]': '' }, // see calc
      { 'form1[0].Page4[0].Step3[0].Line_23300_AddLines[0].Line_23300_Amount2[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_23400_NetBeforeAdjust[0].Line_23400_Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_23500[0].Amount[0]': '' },
      { 'form1[0].Page4[0].Step3[0].Line_23600_NetIncome[0].Line_23600_Amount[0]': '' },


      //page 5
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_23600_NetIncome_2[0].Line_15000_Amount[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_24400_MilitaryPoliceDeduction[0].Line_24400_Amount[0]': body.T4.box43 },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_24900_SecurityDeductions[0].Line_24900_Amount[0]': body.T4.box39 }, // also box 41 also mentioned
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25000_OtherPayDeductions[0].Line_25000_Amount[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25100_PartnershipLosses[0].Line_25100_Amount[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25200_NoncapitalLosses[0].Line_25200_Amount[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25300_NetCapitalLosses[0].Line_25300_Amount[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25400_CapitalGainsDeduction[0].Line_25400_Amount[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25500_NorthernDeductions[0].Line_25500_Amount[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25600_AdditionalDeductions[0].Line_25600_Specify[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25600_AdditionalDeductions[0].Line_25600_Amount[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25700_AddLines[0].Line_25700_Amount1[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25700_AddLines[0].Line_25700_Amount2[0]': '' },
      { 'form1[0].Page5[0].Step4_TaxableIncome[0].Line_26000_TaxableIncome[0].Line_26000_Amount[0]': '' },
      //page 5 calculation
      //col 1
      { 'form1[0].Page5[0].PartA[0].Column1[0].Line36Amount1[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column1[0].Line37Amount1[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column1[0].Line38Amount1[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column1[0].Line39Rate1[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column1[0].Line40Amount1[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column1[0].Line41Amount1[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column1[0].Line42Amount1[0]': '' },

      //col 2
      { 'form1[0].Page5[0].PartA[0].Column2[0].Line36Amount2[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column2[0].Line37Amount2[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column2[0].Line38Amount2[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column2[0].Line39Rate2[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column2[0].Line40Amount2[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column2[0].Line41Amount2[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column2[0].Line42Amount2[0]': '' },

      // col 3
      { 'form1[0].Page5[0].PartA[0].Column3[0].Line36Amount3[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column3[0].Line37Amount3[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column3[0].Line38Amount3[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column3[0].Line39Rate3[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column3[0].Line40Amount3[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column3[0].Line41Amount3[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column3[0].Line42Amount3[0]': '' },

      //col 4
      { 'form1[0].Page5[0].PartA[0].Column4[0].Line36Amount4[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column4[0].Line37Amount4[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column4[0].Line38Amount4[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column4[0].Line39Rate4[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column4[0].Line40Amount4[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column4[0].Line41Amount4[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column4[0].Line42Amount4[0]': '' },


      //col 5 
      { 'form1[0].Page5[0].PartA[0].Column5[0].Line36Amount5[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column5[0].Line37Amount5[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column5[0].Line38Amount5[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column5[0].Line39Rate5[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column5[0].Line40Amount5[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column5[0].Line41Amount5[0]': '' },
      { 'form1[0].Page5[0].PartA[0].Column5[0].Line42Amount5[0]': ' ' },


      //part B
      { 'form1[0].Page5[0].PartB[0].Line74[0].Line1_Amount[0]': 'part b' },
      { 'form1[0].Page5[0].PartB[0].Line30100_Sub[0].Line2_Amount[0]': '' },
      { 'form1[0].Page5[0].PartB[0].Line30300_Sub[0].Line3_Amount[0]': '' },
      { 'form1[0].Page5[0].PartB[0].Line30400_Sub[0].Line4_Amount[0]': '' },
      { 'form1[0].Page5[0].PartB[0].Line30425_sub[0].Line4_Amount[0]': '' },
      { 'form1[0].Page5[0].PartB[0].Line30450_Sub[0].Line6_Amount[0]': '' },
      { 'form1[0].Page5[0].PartB[0].Line30500[0].Line7_ChildrenNum[0]': '' },
      { 'form1[0].Page5[0].PartB[0].Line30500[0].Line7_Amount[0]': '' },
      { 'form1[0].Page5[0].PartB[0].Line_78[0].Line30_Amount[0]': '' },


      //page 6
      { 'form1[0].Page6[0].PartB[0].Line_79[0].Line43Amount[0]': body.T4.box22 },
      { 'form1[0].Page6[0].PartB[0].CPP_QPP_Sub[0].Line30800_Sub[0].Line8_Amount[0]': body.T4.box16 },
      { 'form1[0].Page6[0].PartB[0].CPP_QPP_Sub[0].Line31000_Sub[0].Line9_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].EIPremiums_Sub[0].Line31200_Sub[0].Line10_Amount[0]': body.T4.box18 }, // box 55 mentioned see calculation log in notes
      { 'form1[0].Page6[0].PartB[0].Line31217_Sub[0].Line11_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31220_Sub[0].Line12_Amount[0]': body.T4.box87 },
      { 'form1[0].Page6[0].PartB[0].Line31240_Sub[0].Line13_Amount[0]': body.T4.box87 },
      { 'form1[0].Page6[0].PartB[0].Line31260_Sub[0].Line14_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31270_Sub[0].Line15_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31285_sub[0].Line16_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31300_Sub[0].Line17_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31350_Sub[0].Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line93[0].Amount1[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line93[0].Amount2[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31400_Sub[0].Line18_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line95[0].Amount1[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31600_Sub[0].Line19_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31800_Sub[0].Line20_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line98[0].Amount1[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31900_Sub[0].Line21_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line32300_Sub[0].Line22_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line32400_Sub[0].Line23_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line32600_Sub[0].Line24_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line103[0].Amount1[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Medical_expenses[0].Line104[0].Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Medical_expenses[0].Line105[0].Amount1[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Medical_expenses[0].Line105[0].Amount2[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Medical_expenses[0].Line26_Sub[0].Line26_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Medical_expenses[0].Line27_Sub[0].Line27_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Medical_expenses[0].Line33199_Sub[0].Line28_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line33200_Sub[0].Line29_Amount1[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line33200_Sub[0].Line29_Amount2[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line33500_Sub[0].Line30_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line31_Sub[0].Line31_Rate[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line33800_Sub[0].Line32_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line34900_Sub[0].Line33_Amount[0]': '' },
      { 'form1[0].Page6[0].PartB[0].Line35000_Sub[0].Line34_Amount[0]': '' },

      //page 7
      { 'form1[0].Page7[0].PartC[0].Line108_sub[0].Line43Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line40424_Sub[0].Line44Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line40400_Sub[0].Line45Amount1[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line35000_sub[0].Line46Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line40425_Sub[0].Line47Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line40427_Sub[0].Line48Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line114_sub[0].Line49Amount1[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line114_sub[0].Line49Amount2[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line122[0].Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line123[0].Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line124[0].Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line40500_sub[0].Line51Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line40600_sub[0].Line52Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line127[0].Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line128[0].Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line129[0].Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line130[0].Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line131[0].F40900[0].Amount[0]': '' },
      { 'form1[0].Page7[0].PartC[0].Line131[0].Amount[0]': '' },


      // page 8
      { 'form1[0].Page8[0].Step6[0].Line_45700_GST_HST_Rebate[0].Line_45700_Amount[0]': '' },
      { 'form1[0].Page8[0].Step6[0].EligibleEducatorSchoolSypplyTaxCredit[0].F46800[0].Amount[0]': '' },
      { 'form1[0].Page8[0].Step6[0].EligibleEducatorSchoolSypplyTaxCredit[0].Amount[0]': body.T4.box16 },
      { 'form1[0].Page8[0].Step6[0].Line_47555_TaxPaid[0].Line_47600_Amount[0]': '' },
      { 'form1[0].Page8[0].Step6[0].Line158a[0].Specify[0]': '' },
      { 'form1[0].Page8[0].Step6[0].Line158a[0].Amount[0]': '' },
      { 'form1[0].Page8[0].Step6[0].Line_47600_TaxPaid[0].Line_47600_Amount[0]': '' },
      { 'form1[0].Page8[0].Step6[0].Line_47900_ProvTerrCredits[0].Line_47900_Amount[0]': '' },
      { 'form1[0].Page8[0].Step6[0].Line_48200_AddLines[0].Line_48200_Amount1[0]': '' },
      { 'form1[0].Page8[0].Step6[0].Line_48200_AddLines[0].Line_48200_Amount2[0]': '' },
      { 'form1[0].Page8[0].Step6[0].Line_162[0].Refund_or_BalanceOwing_Amount[0]': '' },
      { 'form1[0].Page8[0].Step6[0].Line48400_48500[0].Line48400[0].Line_48400_Amount[0]': '' },
      { 'form1[0].Page8[0].Step6[0].Line48400_48500[0].Line48500[0].Line_48500_Amount[0]': '' },
      { 'form1[0].Page8[0].ONOpportunitiesFund2[0].Line_1[0].Amount[0]': '' },
      { 'form1[0].Page8[0].ONOpportunitiesFund2[0].Line_2[0].Amount[0]': '' },
      { 'form1[0].Page8[0].ONOpportunitiesFund2[0].Line_3[0].Amount[0]': '' },
      { 'form1[0].Page8[0].Certification[0].Telephone[0]': '' },
      { 'form1[0].Page8[0].Certification[0].Date[0]': '' },
      // { 'form1[0].Page8[0].Line_49000_IfFeeWasCharged[0].Line49000_CheckBoxGroup[0].Line49000_CheckBox_EN[0]': '' },
      // { 'form1[0].Page8[0].Line_49000_IfFeeWasCharged[0].Line49000_CheckBoxGroup[0].Line49000_CheckBox_EN[1]': '' },
      { 'form1[0].Page8[0].Line_49000_IfFeeWasCharged[0].EFileNumber_Comb[0].EFile[0]': 'X' },
      { 'form1[0].Page8[0].Line_49000_IfFeeWasCharged[0].NameOfPreparer[0]': 'Y' },
      { 'form1[0].Page8[0].Line_49000_IfFeeWasCharged[0].TelephoneOfPreparer[0]': 'Z' },


    ]



  // NOTES   && CALCULATIONS  
  // calulations




  const checkboxMappings = [
    // page 1 & 2 checkboxMappings
    { 'form1[0].Page1[0].Step1[0].Identification[0].MaritalStatus_Checkbox[0].MaritalStatus[0]': body.maritalStatus === 0 },
    { 'form1[0].Page1[0].Step1[0].Identification[0].MaritalStatus_Checkbox[0].MaritalStatus[1]': body.maritalStatus === 1 },
    { 'form1[0].Page1[0].Step1[0].Identification[0].MaritalStatus_Checkbox[0].MaritalStatus[2]': body.maritalStatus === 2 },
    { 'form1[0].Page1[0].Step1[0].Identification[0].MaritalStatus_Checkbox[0].MaritalStatus[3]': body.maritalStatus === 3 },
    { 'form1[0].Page1[0].Step1[0].Identification[0].MaritalStatus_Checkbox[0].MaritalStatus[4]': body.maritalStatus === 4 },
    { 'form1[0].Page1[0].Step1[0].Identification[0].MaritalStatus_Checkbox[0].MaritalStatus[5]': body.maritalStatus === 5 },
    { 'form1[0].Page1[0].Step1[0].Info_Spouse_CLP[0].Self-employment[0].Checkbox[0]': body.selfEmployedCheck },
    { 'form1[0].Page2[0].ElectionsCanada[0].LineA[0].Option1[0].A_CheckBox[0]': body.canadianCitizen },
    { 'form1[0].Page2[0].ElectionsCanada[0].LineA[0].Option2[0].A_CheckBox[0]': !body.canadianCitizen },
    { 'form1[0].Page2[0].ElectionsCanada[0].LineB[0].Option1[0].B_Authorize_CheckBox[0]': false },
    { 'form1[0].Page2[0].ElectionsCanada[0].LineB[0].Option2[0].B_Authorize_CheckBox[0]': false },
    { 'form1[0].Page2[0].Tax_exempt[0].Exempt[0].Spouse_SelfEmployed[0]': false },
    { 'form1[0].Page2[0].Foreign_property[0].Line26600[0].Option1[0].ForeignProperty_CheckBox[0]': body.foreignPropertyCheck },
    { 'form1[0].Page2[0].Foreign_property[0].Line26600[0].Option2[0].ForeignProperty_CheckBox[0]': !body.foreignPropertyCheck },
    { 'form1[0].Page2[0].Tax_exempt[0].Exempt[0].Spouse_SelfEmployed[0]': body.indianAct },
  ]



  const dropdownMappings = [
    // page 1 & 2 dropdownMappings
    { 'form1[0].Page1[0].Step1[0].Identification[0].Prov_DropDown[0]': body.oldProvince },
    { 'form1[0].Page1[0].Step1[0].Residence_Info[0].Prov_DropDown-Residence[0]': body.currentProvince },
    { 'form1[0].Page1[0].Step1[0].Residence_Info[0].Prov_DropDown[0]': body.currentProvince },
    { 'form1[0].Page1[0].Step1[0].Residence_Info[0].Prov_DropDown-Business[0]': body.businessProvince }

  ]

  const radiobuttonMappings = [
    // page 1 & 2 radiobuttonMappings
    {
      'form1[0].Page1[0].Step1[0].Identification[0].Your_Language[0].RadioButtonlanguaget[0]':
        body.language.toLowerCase() === "english" ? '1' : '2'
    },
  ]

  const allMappings = { textfieldMappings, checkboxMappings, dropdownMappings, radiobuttonMappings }

  return allMappings
}


module.exports = {
  createStepOneObjects
}
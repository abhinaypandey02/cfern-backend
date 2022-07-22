
const oneToEighteen = {
    inputArray: [
        "form1[0].Page3[0].Step2[0].Line_10100_EmploymentIncome[0].Line_10100_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_10400_OtherEmploymentIncome[0].Line_10400_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_11300_OldAgeSecurityPension[0].Line_11300_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_11400_CPP_QPP[0].Line_11400_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_11500_OtherPensions[0].Line_11500_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_11600_ElectedSplitPension[0].Line_11600_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_11700_UCCB[0].Line_11700_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_11900_EmploymentInsurance[0].Line_11900_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_12000_TaxableDividends[0].Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_12100_InvestmentIncome[0].Line_12100_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_12200_PartnershipIncome[0].Line_12200_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_12500_RDSP[0].Line_12500_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_12599_12600_RentalIncome[0].Line_12600_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_12700_TaxableCapitalGains[0].Line_12700_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_12799_12800_SupportPayReceived[0].Line_12800_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_12900_RRSPIncome[0].Line_12900_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_13000_OtherIncome[0].Line_13000_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_13010_Taxablescholarship[0].Amount[0]",
    ],
    outputArray: [
        'form1[0].Page3[0].Step2[0].Line_19[0].Amount[0]',
    ]
}


const twentyTwoToTwentyFour =
{
    inputArray: [

        "form1[0].Page3[0].Step2[0].Line20[0].Line_13500_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line21[0].Line_13700_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line22[0].Line_13900_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line23[0].Line_14100_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line24[0].Line_14300_Amount[0]"
    ],
    outputArray: [
        "form1[0].Page3[0].Step2[0].Line_25[0].Amount1[0]",
    ]
}



const nineteenAndTwentyFive = {
    inputArray: [
        'form1[0].Page3[0].Step2[0].Line_19[0].Amount[0]',
        "form1[0].Page3[0].Step2[0].Line_25[0].Amount1[0]"

    ], outputArray: [
        "form1[0].Page3[0].Step2[0].Line_26[0].Amount1[0]",
    ]

}


const twentySevenToTwentyNine =
{
    inputArray: [

        "form1[0].Page3[0].Step2[0].Line_14400_WorkersCompBen[0].Line_14400_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_14500_SocialAssistPay[0].Line_14500_Amount[0]",
        "form1[0].Page3[0].Step2[0].Line_14600_NetFedSupplements[0].Line_14600_Amount[0]",

    ],
    outputArray: [
        "form1[0].Page3[0].Step2[0].Line_14700_AddLines[0].Line_14700_EqualsAmount[0]",
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25000_OtherPayDeductions[0].Line_25000_Amount[0]'
    ]
}

const twentySixAndThirty =
{
    inputArray: [

        "form1[0].Page3[0].Step2[0].Line_26[0].Amount1[0]",
        "form1[0].Page3[0].Step2[0].Line_14700_AddLines[0].Line_14700_EqualsAmount[0]"
    ],
    outputArray: [
        "form1[0].Page3[0].Step2[0].Line_15000_TotalIncome[0].Line_15000_Amount[0]",
        'form1[0].Page4[0].Step3[0].Line_15000_TotalIncome_2[0].Line_15000_Amount[0]'
    ]
}

// const eighteenAndFiftyFive =
// {
//     inputArray: [

//         "form1[0].Page3[0].Step2[0].Line_13010_Taxablescholarship[0].Amount[0]",
//     ],
//     outputArray: [

//        'form1[0].Page6[0].PartB[0].EIPremiums_Sub[0].Line31200_Sub[0].Line10_Amount[0]'
//     ]
// }


const thirtyThreeToFifty = {
    inputArray: [

        'form1[0].Page4[0].Step3[0].Line_20700_RPPDeduction[0].Line_20700_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line_20800_RRSPDeduction[0].Line_20800_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line_21000_SplitPensionDeduction[0].Line_21000_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line_21200_Dues[0].Line_21200_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line_21300_UCCBRepayment[0].Line_21300_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line_21400_ChildCareExpenses[0].Line_21400_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line_21500_DisabilityDeduction[0].Line_21500_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line40[0].Line_21700_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line_21900_MovingExpenses[0].Line_21900_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line42[0].Line_22000_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line_23100_ClergyResDeduction[0].Line_23100_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line_23200_OtherDeductions[0].Line_23200_Amount[0]',
        'form1[0].Page4[0].Step3[0].Line23210[0].Amount[0]',
    ],
    outputArray: [
        'form1[0].Page4[0].Step3[0].Line_23300_AddLines[0].Line_23300_Amount1[0]',
    ]
}





const fiftySixToSixtyFour = {
    inputArray: [
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_24400_MilitaryPoliceDeduction[0].Line_24400_Amount[0]',
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_24900_SecurityDeductions[0].Line_24900_Amount[0]',
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25000_OtherPayDeductions[0].Line_25000_Amount[0]',
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25100_PartnershipLosses[0].Line_25100_Amount[0]',
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25200_NoncapitalLosses[0].Line_25200_Amount[0]',
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25300_NetCapitalLosses[0].Line_25300_Amount[0]',
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25400_CapitalGainsDeduction[0].Line_25400_Amount[0]',
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25500_NorthernDeductions[0].Line_25500_Amount[0]',
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25600_AdditionalDeductions[0].Line_25600_Amount[0]',
    ],
    outputArray: [
        'form1[0].Page5[0].Step4_TaxableIncome[0].Line_25700_AddLines[0].Line_25700_Amount1[0]'
    ]

}



module.exports = {
    sums: [
        oneToEighteen,
        nineteenAndTwentyFive,
        twentyTwoToTwentyFour,
        twentySevenToTwentyNine,
        twentySixAndThirty,

        thirtyThreeToFifty,
        fiftySixToSixtyFour,
    ]

}
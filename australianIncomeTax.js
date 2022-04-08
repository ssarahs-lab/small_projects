// This is a function to calculate Australian Income Tax on any number - for AppScripts in Google Sheets

// To use: go to your document, then in the file menu > Extensions > App Script
// Instructions are also in the README of this repository
// Delete the function myFunction, including the {}
// Copy/paste the code below (including all the last bracket) into the textbox

// To use in the Sheet, type =australianIncomeTax(your-cell-number) and use as you would for any other SUM, AVERAGE formulas, etc 

function australianIncomeTax(taxableIncome) {

    if (taxableIncome < 18201){
        return tax = 0
    }

    else if (taxableIncome >= 18201 & taxableIncome < 45001){
        return tax = (taxableIncome-18200)*0.19
    }

    else if (taxableIncome >= 45001 & taxableIncome < 120001){
        return tax = 5092 + (taxableIncome-45000)*0.325
    }

    else if (taxableIncome >= 120001 & taxableIncome < 180001){
        return tax = 29467 + (taxableIncome-120000)*0.37
    }

    else if (taxableIncome >= 180001){
        return tax = 51667 + (taxableIncome-51667)*0.45
    }

    //made by Sarah S - https://github.com/ssarahs-lab

}


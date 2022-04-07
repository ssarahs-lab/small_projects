function monthlyRepayments(loanAmount){

    let annualRate = 0.06
    let loanDuration = 5
    let paymentsPerYear = 12

    let monthlyRate
    let numberOfRepayments = loanDuration * paymentsPerYear

    monthlyRate = annualRate/paymentsPerYear

    repaymentAmount = loanAmount/(((1+monthlyRate)^numberOfRepayments)-1) / (monthlyRate*(1+monthlyRate)^numberOfRepayments)

return repaymentAmount

}
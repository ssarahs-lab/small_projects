function monthlyRepayments(loanAmount, R){

    
    let loanDuration = 5
    let paymentsPerYear = 12

    let monthlyRate
    let n = loanDuration * paymentsPerYear

    monthlyRate = annualRate/paymentsPerYear
    onePlusRate = 1+monthlyRate

    
    repaymentAmount = (loanAmount*R) / [1 - (1 + R)^(-n)]

return repaymentAmount

}

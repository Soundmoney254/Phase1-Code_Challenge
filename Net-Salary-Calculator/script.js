
const submitButton = document.querySelector('#submit-button');
const clearButton = document.querySelector('#clear-button')
//Create an Event Listener for the submit button
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    calculateDeduction();
  });
;
clearButton.addEventListener('click', function() {
    document.getElementById("PAYE").textContent = '';
    document.getElementById("NHIF").textContent = '';
    document.getElementById("NSSF").textContent = '';
    document.getElementById("Total_Deductions").textContent = '';
    document.getElementById("Net_Salary").textContent = '';
    document.getElementById("grossPay").value = '';
  });
//Calculate Deductions
function calculateDeduction() {
const grossPay = document.getElementById("grossPay").value;
    let nhifDeduction = 0;
    if (grossPay < 6000) {
      nhifDeduction = 150;
    } else if (grossPay < 8000) {
      nhifDeduction = 300;
    } else if (grossPay < 12000) {
      nhifDeduction = 400;
    } else if (grossPay < 15000) {
      nhifDeduction = 500;
    } else if (grossPay < 20000) {
      nhifDeduction = 600;
    } else if (grossPay < 25000) {
      nhifDeduction = 750;
    } else if (grossPay < 30000) {
      nhifDeduction = 850;
    } else if (grossPay < 35000) {
      nhifDeduction = 900;
    } else if (grossPay < 40000) {
      nhifDeduction = 950;
    } else if (grossPay < 45000) {
      nhifDeduction = 1000;
    } else if (grossPay < 50000) {
      nhifDeduction = 1100;
    } else if (grossPay < 60000) {
      nhifDeduction = 1200;
    } else if (grossPay < 70000) {
      nhifDeduction = 1300;
    } else if (grossPay < 80000) {
      nhifDeduction = 1400;
    } else if (grossPay < 90000) {
      nhifDeduction = 1500;
    } else if (grossPay < 100000) {
      nhifDeduction = 1600;
    } else {
      nhifDeduction = 1700;
    }
// calculate PAYE tax deduction
  let payeDeduction = 0;
  if (grossPay <= 24000) {
    payeDeduction = grossPay * 0.1;
  } else if (grossPay <= 32333) {
    payeDeduction = 2400 + (grossPay - 24000) * 0.25;
  } else {
    payeDeduction = 5708.25 + (grossPay - 32333) * 0.3;
  }
// get the value of selected radio button for NSSF tier
 const nssfTier1 = document.getElementById("nssf_tier1").checked;
 const nssfTier2 = document.getElementById("nssf_tier2").checked;

 // calculate NSSF deduction based on selected tier and gross pay
 let nssfDeduction = 0;
 if (nssfTier1) {
   nssfDeduction = Math.min(grossPay * 0.06, 6000);
 } else if (nssfTier2) {
   nssfDeduction = Math.min(Math.max(grossPay * 0.06, 6001), 18000);
 }

//update the NHIF, PAYE and Total Deductions cells with the calculated values
    document.getElementById("PAYE").textContent = payeDeduction.toFixed(2);
    document.getElementById("NHIF").textContent = nhifDeduction.toFixed(2);
    document.getElementById("NSSF").textContent = nssfDeduction.toFixed(2);
    const totalDeductions = nhifDeduction + payeDeduction +nssfDeduction;
    document.getElementById("Total_Deductions").textContent = totalDeductions;
    const netSalary = grossPay-totalDeductions;
    document.getElementById("Net_Salary").textContent = netSalary
}


  
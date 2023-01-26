

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      updateMonthly();
    });
  }
});

// captures current UI input
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}
// sets initial default inputs and runs updateMonthly
function setupIntialValues() {
  document.getElementById("loan-amount").value = 200000;
  document.getElementById("loan-years").value = 20;
  document.getElementById("loan-rate").value = 5;
  updateMonthly();
}

// runs calculateMonthlyPayment() with current values; returns new monthly paymnet.
function update() {
  let monthlyPayment = calculateMonthlyPayment(getCurrentUIValues());
  return monthlyPayment
}

// calculates monthly payment
function calculateMonthlyPayment(value) {
  let principle = value["amount"];
  let interest = (value["rate"]/100) / 12;
  let numOfPayments = value["years"] * 12;
  let payment = (principle * interest) / (1 - (1 + interest)**(-numOfPayments));
  let cleanPayment = payment.toFixed(2);
  console.log(cleanPayment)
  return cleanPayment;
}

// updates the UI based on update()
function updateMonthly() {
  document.getElementById("monthly-payment").innerText = update()
}

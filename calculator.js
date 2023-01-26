

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

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment

//Sets initial values
function setupIntialValues() {
  document.getElementById("loan-amount").value = 300000;
  document.getElementById("loan-years").value = 30;
  document.getElementById("loan-rate").value = .05;
  updateMonthly();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let monthlyPayment = calculateMonthlyPayment(getCurrentUIValues());
  return monthlyPayment
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.



function calculateMonthlyPayment(value) {
  let principle = value["amount"];
  let interest = value["rate"] / 12;
  let numOfPayments = value["years"] * 12;
  let payment = (principle * interest) / (1 - (1 + interest)**-numOfPayments);
  let cleanPayment = payment.toFixed(2);
  console.log(cleanPayment)
  return cleanPayment;
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly() {
  document.getElementById("monthly-payment").innerText = update()
}

// https://calculator.swiftutors.com/efficiency-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const efficiencyRatioRadio = document.getElementById('efficiencyRatioRadio');
const nonInterestExpensesRadio = document.getElementById('nonInterestExpensesRadio');
const revenueRadio = document.getElementById('revenueRadio');

let efficiencyRatio;
let nonInterestExpenses = v1;
let revenue = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

efficiencyRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Non-interest Expenses';
  variable2.textContent = 'Revenue';
  nonInterestExpenses = v1;
  revenue = v2;
  result.textContent = '';
});

nonInterestExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Efficiency Ratio';
  variable2.textContent = 'Revenue';
  efficiencyRatio = v1;
  revenue = v2;
  result.textContent = '';
});

revenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Efficiency Ratio';
  variable2.textContent = 'Non-interest Expenses';
  efficiencyRatio = v1;
  nonInterestExpenses = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(efficiencyRatioRadio.checked)
    result.textContent = `Efficiency Ratio = ${computeEfficiencyRatio().toFixed(2)}`;

  else if(nonInterestExpensesRadio.checked)
    result.textContent = `Non-interest Expenses = ${computeNonInterestExpenses().toFixed(2)}`;

  else if(revenueRadio.checked)
    result.textContent = `Revenue = ${computeRevenue().toFixed(2)}`;
})

// calculation

function computeEfficiencyRatio() {
  return (Number(nonInterestExpenses.value) / Number(revenue.value)) * 100;
}

function computeNonInterestExpenses() {
  return (Number(efficiencyRatio.value) / 100) * Number(revenue.value);
}

function computeRevenue() {
  return Number(nonInterestExpenses.value) / (Number(efficiencyRatio.value) / 100);
}
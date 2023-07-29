function calcular() {
  const profitMargin = parseFloat(document.getElementById('profitMargin').value) || 0;
  const exchangeRate = parseFloat(document.getElementById('exchangeRate').value) || 0;
  const quantities = parseInt(document.getElementById('quantities').value) || 0;
  const measurementUnits = document.getElementById('measurementUnits').value;
  const description = document.getElementById('description').value;
  const totalPrice = parseFloat(document.getElementById('totalPrice').value) || 0;
  const customsDuty = parseFloat(document.getElementById('customsDuty').value) || 0;
  const selectiveTax = parseFloat(document.getElementById('selectiveTax').value) || 0;
  const vat = parseFloat(document.getElementById('vat').value) || 0;
  const transportCost = parseFloat(document.getElementById('transportCost').value) || 0;
  const warehouseCost = parseFloat(document.getElementById('warehouseCost').value) || 0;
  const customsAgencyCost = parseFloat(document.getElementById('customsAgencyCost').value) || 0;
  const insuranceCost = parseFloat(document.getElementById('insuranceCost').value) || 0;
  const freightCost = parseFloat(document.getElementById('freightCost').value) || 0;

  // Calculations
  const fobValue = totalPrice;
  const cifUSDValue = fobValue + (fobValue * customsDuty / 100);
  const cifCordobasValue = cifUSDValue * exchangeRate;
  const totalFOB = fobValue * quantities;
  const totalParticipation = ((fobValue * quantities) / totalFOB) * 100;
  const totalFreight = freightCost * quantities;
  const totalInsurance = insuranceCost * quantities;
  const totalInternationCosts = totalFreight + totalInsurance + transportCost + warehouseCost + customsAgencyCost;
  const totalCIF = cifCordobasValue * quantities;
  const totalCostWithoutTaxes = totalCIF + totalInternationCosts;
  const unitCost = totalCostWithoutTaxes / quantities;
  const suggestedSalePrice = unitCost + (unitCost * profitMargin / 100);

  // Update the results on the page
  document.getElementById('fobValue').textContent = `$${fobValue.toFixed(2)}`;
  document.getElementById('cifUSDValue').textContent = `$${cifUSDValue.toFixed(2)}`;
  document.getElementById('cifCordobasValue').textContent = `C$${cifCordobasValue.toFixed(2)}`;
  document.getElementById('totalFOB').textContent = `$${totalFOB.toFixed(2)}`;
  document.getElementById('totalParticipation').textContent = `${totalParticipation.toFixed(2)}%`;
  document.getElementById('totalFreight').textContent = `$${totalFreight.toFixed(2)}`;
  document.getElementById('totalInsurance').textContent = `$${totalInsurance.toFixed(2)}`;
  document.getElementById('totalCIF').textContent = `C$${totalCIF.toFixed(2)}`;
  document.getElementById('totalInternationCosts').textContent = `$${totalInternationCosts.toFixed(2)}`;
  document.getElementById('totalCostWithoutTaxes').textContent = `$${totalCostWithoutTaxes.toFixed(2)}`;
  document.getElementById('unitCost').textContent = `$${unitCost.toFixed(2)}`;
  document.getElementById('suggestedSalePrice').textContent = `$${suggestedSalePrice.toFixed(2)}`;

  // Show the results section
  document.getElementById('resultsSection').style.display = 'block';
}

// Dark Mode Toggle
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
                                                                         }

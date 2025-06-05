// calc.js
const bonusRates = [
  2.5, 3, 3.5, 3.5, 3.5, 3.5, 3,
  3, 3, 3, 3, 2.5, 3, 3, 2.5,
  5, 4, 4.5, 4, 25
];

/* -- Premium per year --------------------------------------- */
function calcPremium(year, modelPremium, ppt) {
  return year <= ppt ? modelPremium : 0;
}

/* -- Bonus amount ------------------------------------------- */
function calcBonusAmount(year, sumAssured) {
  const rate = bonusRates[year - 1] || 0;
  // bonus केवल तभी, जब Sum Assured मिल रहा हो
  return year === 18 ? (sumAssured * rate) / 100 : 0;
}

/* -- Total benefit ------------------------------------------ */
function calcTotalBenefit(year, sumAssured, bonusAmount, pt) {
  const maturity = year === pt ? sumAssured : 0;
  return maturity + bonusAmount;
}

/* -- Net cashflow ------------------------------------------- */
function calcNetCashflow(premium, benefit) {
  return benefit - premium;
}

/* -- मुख्य टेबल-बिल्डर -------------------------------------- */
function buildIllustrationTable({
  sumAssured,
  modelPremium,
  pt,
  ppt
}) {
  const rows = [];

  for (let year = 1; year <= 20; year++) {
    const premium      = calcPremium(year, modelPremium, ppt);
    const bonusAmount  = calcBonusAmount(year, sumAssured);
    const totalBenefit = calcTotalBenefit(year, sumAssured, bonusAmount, pt);
    const netCashflow  = calcNetCashflow(premium, totalBenefit);

    rows.push({
      policyYear: year,
      premium,
      sumAssured: year === pt ? sumAssured : 0,
      bonusRate: `${bonusRates[year - 1]}%`,
      bonusAmount,
      totalBenefit,
      netCashflow
    });
  }
  return rows;
}

module.exports = { buildIllustrationTable };

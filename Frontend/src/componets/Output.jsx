const Output = ({ data }) => {
  const rows = data?.rows || [];

  return (
    <div>
      <div className="container">
      <h2 >Policy Illustration Table</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Policy Year</th>
            <th>Premium</th>
            <th>Sum Assured</th>
            <th>Bonus Rate</th>
            <th>Bonus Amount</th>
            <th>Total Benefit</th>
            <th>Net Cashflows</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.policyYear}</td>
              <td>{row.premium}</td>
              <td>{row.sumAssured}</td>
              <td>{row.bonusRate}</td>
              <td>{row.bonusAmount}</td>
              <td>{row.totalBenefit}</td>
              <td>{row.netCashflow}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Output;

class Payroll {
    calculate_employee_pay(baseSalary, hoursWorked) {
      const hourlyRate = baseSalary / 40; // Assuming base salary is for 40 hours
      let grossPay;
  
      // Step 1: Calculate gross pay with overtime
      if (hoursWorked <= 40) {
        grossPay = hourlyRate * hoursWorked;
      } else {
        const regularPay = hourlyRate * 40;
        const overtimePay = (hoursWorked - 40) * hourlyRate * 1.5;
        grossPay = regularPay + overtimePay;
      }
  
      // Step 2: Deduct 6.2% social security
      const socialSecurity = grossPay * 0.062;
      const taxableIncome = grossPay - socialSecurity;
  
      // Step 3: Apply progressive tax
      let tax = 0;
      if (taxableIncome <= 500) {
        tax = taxableIncome * 0.10;
      } else if (taxableIncome <= 1000) {
        tax = (500 * 0.10) + ((taxableIncome - 500) * 0.20);
      } else {
        tax = (500 * 0.10) + (500 * 0.20) + ((taxableIncome - 1000) * 0.30);
      }

  
      // Step 4: Net pay after tax and social security
      const netPay = grossPay - socialSecurity - tax;
  
      // Return detailed breakdown
      return {
        grossPay: grossPay.toFixed(2),
        socialSecurity: socialSecurity.toFixed(2),
        tax: tax.toFixed(2),
        netPay: netPay.toFixed(2)
      };
    }
  }
  
  // Example usage:
  const payroll = new Payroll();
  const result = payroll.calculate_employee_pay(800, 45); // base salary for 40 hours, worked 45 hours
  
  console.log("Payroll Breakdown:");
  console.log("Gross Pay: $", result.grossPay);
  console.log("Social Security Deduction: $", result.socialSecurity);
  console.log("Tax Deducted: $", result.tax);
  console.log("Net Pay: $", result.netPay);
  
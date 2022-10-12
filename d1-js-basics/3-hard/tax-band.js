/* 
The provided function will be tested using multiple salarys.  Inside the function code-block, 
your challenge is to write the logic to calculate the amount of take-home pay after taxes have
been deducted.
Here are the tax bands. Rates are marginal.  Marginal bands mean you only pay the specified tax rate on that portion of salary. 
For example, if your salary puts you in the 40% tax bracket, then you only pay 40% tax on the segment of earnings in that income tax band. 
For the lower part of your earnings, you'll still pay the appropriate 20% or 0%.

Example £15,000.00 =>  £12,570.00 isn't taxed, then the remaining £2,430.00 is taxed at 20%

||------------------------------||------------||
||   Tax Band                   ||   Tax Rate ||
||------------------------------||------------||
||   £0         => £12,570.00   ||     0%     ||
||   £12,570.01 => £50,270.00   ||    20%     ||
||   £50,270.01 => £150,000.00  ||    40%     ||
||   £150,000.00 => To the moon!||    45%     ||
||============================================||
*/

// Problem: calculate amount of take home tax.
// So split salary into bands.
// for each band, you want to return the tax paid on it.





const taxBand = (salary) => {
	
	let netIncome = 0;
	let tax = 0;

	switch(true) {
		case salary <= 12570:
			console.log(salary);
			return salary;

		case salary <= 50270:
			netIncome = salary;
			netIncome += ((salary - 12570) * 0.2);
			console.log(netIncome);
			return netIncome;

		case salary <= 150000:
			netIncome = salary;
			netIncome += (37700 * 0.2) - ((salary - 50270) * 0.4);
			console.log(netIncome);
			return netIncome;

		case salary > 150000:
			netIncome = salary;
			netIncome += (37700 * 0.2) - (99630 * 0.4) - ((salary - 150000) * 0.45);
			return netIncome;
	}

}

module.exports = { taxBand };

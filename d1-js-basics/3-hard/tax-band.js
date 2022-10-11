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

const taxBand = (salary, deducted) => {
	// You have a total salary:
	// You want to calculate tax for each band
	// 		if salary > band1 ==> check band2
	// 		if salary > band2 ==> check band3
	// 		if salary > band3 ==> check band4
	// 			calculate the tax percentage for this band, store in a variable called deducted	
	//			find difference of salary and band4
	// 			repeat process until last else case, then return salary - deducted;

	if (salary >= 150000) {
		let difference = salary - 150000;
		deducted += difference * 0.45;
		taxBand(salary - difference);
	} else if (salary >= 50270) {
		let difference = salary - 50270;
		deducted += difference * 0.4;
		taxBand(salary - difference);
	} else if (salary >= 12570) {
		let difference = salary - 12570;
		deducted += difference * 0.2;
		taxBand(salary - difference);
	} else {
		return salary - deducted;
	}
}

300
200

con;

module.exports = { taxBand };


var chart = c3.generate({
bindto: '#how-u-rich-us',
data: {
	// iris data from R
	columns: [

		['Tata Coffee', 0.44],
		['Adity Birla Money', 2.32],
		['TVsMotor Company', 25.35],
		['Hathway Cable & Datacomm', 0.28],
		['TATA Motors', 20.94],
		['Force Motors', 50.67],
	],
	type : 'pie',
},
legend: {
show: true,
position: 'right'
}
});
const CUR_BYN = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';
const BYR_DATA = 'http://www.nbrb.by/API/ExRates/Currencies';


var UAH = document.getElementById('uah');
var EURO = document.getElementById('eur');
var USD = document.getElementById('usd');
var YUAN = document.getElementById('yuan');
var RUB = document.getElementById('rub');

var UAH_COST = document.getElementById('uah_cost');
var EURO_COST = document.getElementById('eur_cost');
var USD_COST = document.getElementById('usd_cost');
var YUAN_COST = document.getElementById('yuan_cost');
var RUB_COST = document.getElementById('rub_cost');

var UAH_COST1 = document.getElementById('uah_cost1');
var EURO_COST1 = document.getElementById('eur_cost1');
var USD_COST1 = document.getElementById('usd_cost1');
var YUAN_COST1 = document.getElementById('yuan_cost1');
var RUB_COST1 = document.getElementById('rub_cost1');

var UAH_COST2 = document.getElementById('uah_cost2');
var EURO_COST2 = document.getElementById('eur_cost2');
var USD_COST2 = document.getElementById('usd_cost2');
var YUAN_COST2 = document.getElementById('yuan_cost2');
var RUB_COST2 = document.getElementById('rub_cost2');

var UAH_COST3 = document.getElementById('uah_cost3');
var EURO_COST3 = document.getElementById('eur_cost3');
var USD_COST3 = document.getElementById('usd_cost3');
var YUAN_COST3 = document.getElementById('yuan_cost3');
var RUB_COST3 = document.getElementById('rub_cost3');

var usd;
var eur;
var uah;
var yuan;
var rub;

function getData(URL, placeName, placeCost, num, dif){
	fetch(URL).then(response => {
		response.json().then(data => {
			placeName.innerHTML = (data[num].Cur_Name);
			placeCost.innerHTML = (data[num].Cur_OfficialRate - dif);
			usd = data[4].Cur_OfficialRate;
			eur = data[5].Cur_OfficialRate;
			uah = data[2].Cur_OfficialRate;
			rub = data[16].Cur_OfficialRate;
			yuan = data[11].Cur_OfficialRate;
		});
	});
};

getData(CUR_BYN, USD, USD_COST, 4, 0);
getData(CUR_BYN, EURO, EURO_COST, 5, 0);
getData(CUR_BYN, UAH, UAH_COST, 2, 0);
getData(CUR_BYN, RUB, RUB_COST, 16, 0);
getData(CUR_BYN, YUAN, YUAN_COST, 11, 0);

getData(CUR_BYN, USD, USD_COST1, 4, 0.16);
getData(CUR_BYN, EURO, EURO_COST1, 5, 0.05);
getData(CUR_BYN, UAH, UAH_COST1, 2, 0.0513);
getData(CUR_BYN, RUB, RUB_COST1, 16, 0.913);
getData(CUR_BYN, YUAN, YUAN_COST1, 11, 0.616);

getData(CUR_BYN, USD, USD_COST2, 4, -0.21);
getData(CUR_BYN, EURO, EURO_COST2, 5, 0.15);
getData(CUR_BYN, UAH, UAH_COST2, 2, -0.0723);
getData(CUR_BYN, RUB, RUB_COST2, 16, 0.597);
getData(CUR_BYN, YUAN, YUAN_COST2, 11, 0.681);

getData(CUR_BYN, USD, USD_COST3, 4, -0.217);
getData(CUR_BYN, EURO, EURO_COST3, 5, -0.235);
getData(CUR_BYN, UAH, UAH_COST3, 2, 0.023);
getData(CUR_BYN, RUB, RUB_COST3, 16, -0.315);
getData(CUR_BYN, YUAN, YUAN_COST3, 11, -0.187);

var button = document.getElementById('btn');
var out = document.getElementById('output');
var converted = 0;


button.addEventListener('click', function(){
	var n = document.getElementById("select").selectedIndex;
	var inp = document.getElementById('inputConv').value;
	if (n == 0) {
		converted = inp * usd;
	}
	else if (n == 1) {
		converted = inp * eur;
	}
	else if (n == 2) {
		converted = inp * (rub / 100);
	}
	else if (n == 3) {
		converted = inp * (uah / 100);
	}
	else if (n == 4) {
		converted = inp * (yuan / 10);
	}
	out.innerHTML = (converted);
	console.log(converted);
});

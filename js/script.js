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


function getData(URL, placeName, placeCost, num, dif){
	fetch(URL).then(response => {
		response.json().then(data => {
			placeName.innerHTML = (data[num].Cur_Name);
			placeCost.innerHTML = (data[num].Cur_OfficialRate - dif);
		});
	});
}

getData(CUR_BYN, USD, USD_COST, 4, 0);
getData(CUR_BYN, EURO, EURO_COST, 5, 0);
getData(CUR_BYN, UAH, UAH_COST, 2, 0);
getData(CUR_BYN, RUB, RUB_COST, 16, 0);
getData(CUR_BYN, YUAN, YUAN_COST, 11, 0);

getData(CUR_BYN, USD, USD_COST, 4, 0);
getData(CUR_BYN, EURO, EURO_COST, 5, 0);
getData(CUR_BYN, UAH, UAH_COST, 2, 0);
getData(CUR_BYN, RUB, RUB_COST, 16, 0);
getData(CUR_BYN, YUAN, YUAN_COST, 11, 0);

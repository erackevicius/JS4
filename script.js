/*
Užduotis:

Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for looparba for/of loop pagal tokį šabloną:
Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².
*/

/*Irakas 82.7 z/km2;
Iranas 48 z/km2;
Kuveitas 200.2 z/km2;
Afganistanas 48.08 z/km2;
Pakistanas */



"use strict";
var plotasvienam = [
	{}
]

var salis = [	
	{pavadinimas: "Irakas", plotas: "438317", gyventojai: "40.222503"},
	{pavadinimas: "Iranas", plotas: "1648195", gyventojai: "84.708805"},
	{pavadinimas: "Kuveitas", plotas: "17820", gyventojai: "4.420110"},
	{pavadinimas: "Afganistanas", plotas: "652864", gyventojai: "32.890171"},
	{pavadinimas: "Pakistanas", plotas: "881913", gyventojai: "225.199937"}
]
for (var i of salis){
	console.log(i.pavadinimas, i.plotas, i.gyventojai);
}

for (var i of salis){
	console.log("Šalis: " + i.pavadinimas + ", joje gyvena " + i.gyventojai + " mln. gyventojų. Valstybės plotas: " + i.plotas + " km², plotas tenkantis vienam gyventojui: " + (((1000000 * i.plotas) / i.gyventojai).toFixed(2)) + " m².");
}
"use strict"


const vizitka = 1000,
      korporativ = 2000,
      leiding = 1500,
      magazin = 2500;

let type = prompt ("Выберите тип сайта \n\ 1-Сайт визитка \n\ 2-Корпоративный \n\ 3-Лейдинг-пейдж \n\ 4-Интернет магазин");
console.log (type);

if (type === "1") {
    type = vizitka;
}
else if (type === "2") {
    type = korporativ;
}
else if (type === "3") {
    type = leiding;
}
else if (type === "4") {
    type = magazin;
}
else{type = 0}


console.log (type);


const color = 500,
      ch_b = 200,
      kartinka = 400;

let design = prompt ("Выберите дизайн сайта \n\ 1-Цветной \n\ 2-Черно-белый \n\ 3-Картинки");
console.log (design);

if (design === "1") {
    design = color;
}
else if (design === "2") {
    design = ch_b;
}
else if (design === "3") {
    design = kartinka;
}
else{design = 0}

console.log (design);

const pk = 5000,
      mobail = 3000,
      pk_mobail = 7000;    

let adaptability = prompt ("Выберите адаптивность сайта \n\ 1-ПК \n\ 2-Мобильный \n\ 3-ПК+Мобильный");
console.log (adaptability);

if (adaptability === "1") {
    adaptability = pk;
}
else if (adaptability === "2") {
    adaptability = mobail;
}
else if (adaptability === "3") {
    adaptability = pk_mobail;
}
else{adaptability = 0}

console.log (adaptability);


const minim = 8000,
      srednee = 6000,
      maxsim = 4000,
      nane = 1000;

let timing = prompt ("Введите сроки дней \n\ (1-30 дней)");
console.log (timing);

if (timing == 1 || timing > 1 && timing < 10 || timing == 10) {
    timing = minim;
}
else if (timing == 11 || timing > 11 && timing < 19 || timing == 19) {
    timing = srednee;
}
else if (timing == 20 || timing > 20 && timing < 30 || timing == 30) {
    timing = maxsim;
}
else if (timing > 30){
    timing = nane;
}
else{timing === 0}

console.log (timing);







let total = (type + design + adaptability + timing)
console.log (total);

alert (total)
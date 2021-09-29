"use strict"

var range = document.querySelector('#range'),
    rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = range.value;
range.onchange = function(){
    var rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = range.value;
}
function printinfo(){
const vizitka = 1000,
      korporativ = 2000,
      leiding = 1500,
      magazin = 2500;

let type = document.getElementById('type').value;
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

let design = document.getElementById('design').value;
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

let adaptability = document.getElementById('adaptability').value;
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

let timing = document.getElementById('range').value;
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
var
    out = document.querySelector('#out');



let total = (type + design + adaptability + timing)
console.log (total);

out.innerHTML = total;

};

/*$(window).scroll(()=> {
    let scrollDistance = $(window).scrollTop();

    $(".listi").each((i, el) => {

        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
});
*/


$('a[href="#obo_mne"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 100 + "px"});
});

$('a[href="#chto_y_ymeu"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 100 + "px"});
});

$('a[href="#keis"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 0 + "px"});
});

$('a[href="#raschet_ctoimosti"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 0 + "px"});
});

$('a[href="#statistika"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 150 + "px"});
});

$('a[href="#otzivi"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 100 + "px"});
});



/*
 let options = {threshold: [1]};
 let observer = new IntersectionObserver(onEntry, option);
 let elements = $('#out_1');
 elements.each((i,el) => {
     observer.observe(el);
 });
 function onEntry(entry){
     entry.forEach(change => {
         if (change.Intersecting){
             change.target.classList.add('#out_1');
         }
     });
 };*/

 $(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight(); 
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 4200
            });

            show = false;
        }
    });

});



$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });

  
  
$(document).ready(function(){
    showStartModal();
});

function showStartModal(){
    setTimeout(function(){
        $('#exampleModal').modal('show');
    }, 10000);
}
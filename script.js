function llamar(){
    let botonera=document.getElementById("botonera");
    botonera.classList.toggle("botonera-open");

    let menu=document.getElementById("menu");
    menu.querySelector('.menu .cerrar').classList.toggle("fa-times");
}

//DIV DESPLEGABLE (ACORDIÓN)

const accordion = document.getElementsByClassName
('contentBx');

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

//SLIDER

let slider = document.querySelector(".slider")
let sliderIndividual = document.querySelectorAll(".slider-section")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 10000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s"
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

//Galeria
let num=3;
function adelante(){
    num ++;
    if (num>3)
    num=1;

    let img=document.getElementById('img');
        img.src="img/"+"banner0"+num+".png";
}

function atras(){
    num --;
    if (num<1)
    num=3;

    let img=document.getElementById('img');
        img.src="img/"+"banner0"+num+".png";
}
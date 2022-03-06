const carouselSlide2 = document.querySelector('.carousel2');
const carouselCont2 = document.querySelector('.carousel-container2');
const carouselImg2 = document.querySelectorAll('.carousel2 img');
const eclipseNav2 = document.querySelectorAll('.eclipse-nav2 ul li');

//counter

let counter2 = 1;
const size2 = carouselImg2[0].clientWidth;

carouselSlide2.style.transform = 'translateX(' + (-size * counter) + 'px)';

setInterval(function(){
    if(counter2 >= 3){
        counter2 = 0;
    }
    if(counter2 == 0){
        eclipseNav2[0].style.backgroundColor = "white";
        eclipseNav2[1].style.backgroundColor = "grey";
        eclipseNav2[2].style.backgroundColor = "grey";
        document.getElementById('carousel-text2').innerHTML = "Opening speech as project manager";
    }
    else if(counter2 == 1){
        eclipseNav2[1].style.backgroundColor = "white";
        eclipseNav2[0].style.backgroundColor = "grey";
        eclipseNav2[2].style.backgroundColor = "grey";
        document.getElementById('carousel-text2').innerHTML = "Committee certificate as project manager";
    }
    else if(counter2 == 2){
        eclipseNav2[2].style.backgroundColor = "white";
        eclipseNav2[0].style.backgroundColor = "grey";
        eclipseNav2[1].style.backgroundColor = "grey";
        document.getElementById('carousel-text2').innerHTML = "Final day of the Event";
    }
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2++;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
}, 5000)

eclipseNav2[0].addEventListener('click', ()=>{
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2 = 1;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    eclipseNav2[0].style.backgroundColor = "white";
    eclipseNav2[1].style.backgroundColor = "grey";
    eclipseNav2[2].style.backgroundColor = "grey";
    document.getElementById('carousel-text2').innerHTML = "Opening speech as project manager";
})

eclipseNav2[1].addEventListener('click', ()=>{
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2 = 2;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    eclipseNav2[1].style.backgroundColor = "white";
    eclipseNav2[0].style.backgroundColor = "grey";
    eclipseNav2[2].style.backgroundColor = "grey";
    document.getElementById('carousel-text2').innerHTML = "Committee certificate as project manager";
})


eclipseNav2[2].addEventListener('click', ()=>{
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2 = 3;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    eclipseNav2[2].style.backgroundColor = "white";
    eclipseNav2[0].style.backgroundColor = "grey";
    eclipseNav2[1].style.backgroundColor = "grey";
    document.getElementById('carousel-text2').innerHTML = "Final day of the Event";
})
const carouselSlide = document.querySelector('.carousel');
const carouselCont = document.querySelector('.carousel-container');
const carouselImg = document.querySelectorAll('.carousel img');
const eclipseNav = document.querySelectorAll('.eclipse-nav ul li');

//counter

let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

setInterval(function(){
    if(counter >= 3){
        counter = 0;
    }
    if(counter == 0){
        eclipseNav[0].style.backgroundColor = "white";
        eclipseNav[1].style.backgroundColor = "grey";
        eclipseNav[2].style.backgroundColor = "grey";
        document.getElementById('carousel-text').innerHTML = "Art and Sport division intro for Freshman";
    }
    else if(counter == 1){
        eclipseNav[1].style.backgroundColor = "white";
        eclipseNav[0].style.backgroundColor = "grey";
        eclipseNav[2].style.backgroundColor = "grey";
        document.getElementById('carousel-text').innerHTML = "Art and Sport division last meeting";
    }
    else if(counter == 2){
        eclipseNav[2].style.backgroundColor = "white";
        eclipseNav[0].style.backgroundColor = "grey";
        eclipseNav[1].style.backgroundColor = "grey";
        document.getElementById('carousel-text').innerHTML = "Speaker at PM Training for new HIMA Members";
    }
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 5000)

eclipseNav[0].addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter = 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    eclipseNav[0].style.backgroundColor = "white";
    eclipseNav[1].style.backgroundColor = "grey";
    eclipseNav[2].style.backgroundColor = "grey";
    document.getElementById('carousel-text').innerHTML = "Art and Sport division intro for Freshman";
    console.log("size" + size);
})

eclipseNav[1].addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter = 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    eclipseNav[1].style.backgroundColor = "white";
    eclipseNav[0].style.backgroundColor = "grey";
    eclipseNav[2].style.backgroundColor = "grey";
    document.getElementById('carousel-text').innerHTML = "Art and Sport division last meeting";
})


eclipseNav[2].addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter = 3;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    eclipseNav[2].style.backgroundColor = "white";
    eclipseNav[0].style.backgroundColor = "grey";
    eclipseNav[1].style.backgroundColor = "grey";
    document.getElementById('carousel-text').innerHTML = "Speaker at PM Training for new HIMA Members";
})
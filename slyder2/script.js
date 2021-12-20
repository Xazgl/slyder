const next = document.getElementById('Next') // кнопка далее

const prev = document.getElementById('Prewiev') // кнопка прошлые 

const slyder_container = document.querySelector('.slyder-container') // слайдер-контенер

const slуder = document.querySelector('.slyder') // слайдер 

const slyderLength = slуder.children.length //длина слайдера 

const slyder_el = document.querySelectorAll('.slider-el') // элементы слайдера 

let step = 0;




  next.addEventListener('click',function() {
      console.log(1)
      step = step + 50
      
        slуder.style.transform = `translateX(-${step}px)`;
       
        //slуder.style.transform = translateX(-step + 'px');    
  })







prev.addEventListener('click',function(event) {
    console.log(1)
    step = step+50
        slуder.style.transform = `translateX(${step}px)`;
        //slуder.style.transform = translateX(-step + 'px'); 

  })






/*

Tprev.addEventListener('click', (event) => {
   fetch('/api/test').then(response => {
       
   })
})

*/
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


const btnMenu = document.querySelector('.nav--botaomobile');
const navLink = document.querySelector('.menu__nav__link');
//const main = document.querySelector('#principal');


function handleClick({target}){
  target.classList.toggle('ativo');
  navLink.classList.toggle('ativo');
  document.body.classList.toggle('ativo');
  //main.classList.toggle('ativo')
}

window.addEventListener('resize', debounce(function(e) {
  let tamanhoWidth = e.target.innerWidth;
  if(tamanhoWidth > 768){
    btnMenu.classList.remove('ativo');
    navLink.classList.remove('ativo');
    document.body.classList.remove('ativo');
    //main.classList.remove('ativo')
  }
}, 200));

btnMenu.addEventListener('click', handleClick);

//Js animação ao Scroll
const alvo = document.querySelectorAll('[data-anime]');
const classDeAnimacao = 'animate';

function animeScroll(){
  const topoDaPagina = window.pageYOffset + ((window.innerHeight * 3) / 4);
  
  alvo.forEach((elemento) => {
    if((topoDaPagina) > elemento.offsetTop){
      elemento.classList.add(classDeAnimacao);
    }
    else{
      elemento.classList.remove(classDeAnimacao);
    }
  })
}

animeScroll();

if(alvo.length){
  window.addEventListener('scroll', debounce(function(){
    animeScroll(); 
  }, 100));
}

const btnMenu = document.querySelector('.nav--botaomobile');
const navLink = document.querySelector('.menu__nav__link');
const main = document.querySelector('#principal');

function handleClick({target}){
  target.classList.toggle('ativo');
  navLink.classList.toggle('ativo');
  document.body.classList.toggle('ativo');
  main.classList.toggle('ativo')
}

window.addEventListener('resize', function(e) {
  let tamanhoWidth = e.target.innerWidth;
  if(tamanhoWidth > 768){
    btnMenu.classList.remove('ativo');
    navLink.classList.remove('ativo');
    document.body.classList.remove('ativo');
    main.classList.remove('ativo')
  }
});

btnMenu.addEventListener('click', handleClick);
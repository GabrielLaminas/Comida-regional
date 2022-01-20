const btnMenu = document.querySelector('.nav--botaomobile');

function handleClick({target}){
  target.classList.toggle('ativo');
}

window.addEventListener('resize', function(e) {
  let tamanhoWidth = e.target.innerWidth;
  if(tamanhoWidth > 768){
    btnMenu.classList.remove('ativo');
  }
});

btnMenu.addEventListener('click', handleClick);
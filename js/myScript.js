const btn = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const burgerLine = document.querySelector('.burger-line');
const burgerLinelstchld = document.querySelector('.burger-line:last-child');


btn.addEventListener('click', (event) => {
  nav.classList.toggle('active');
  burgerLine.classList.toggle('burger-line-active');
  burgerLinelstchld.classList.toggle('burger-line-active-lcd');
  event.target.classList.toggle('close');
});
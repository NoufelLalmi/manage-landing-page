

const ham = document.getElementById("ham-icon");
const close = document.getElementById("close-icon");
const nav = document.getElementById("menu");

ham.addEventListener('click' , ()=> {
  ham.classList.toggle('hidden')
  close.classList.toggle('hidden')
  // nav.classList.toggle('flex')
  nav.classList.toggle('hidden')

})
close.addEventListener('click' , ()=> {
  ham.classList.toggle('hidden')
  close.classList.toggle('hidden')
  // nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
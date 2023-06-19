let imagenes=document.querySelectorAll('.galeria__img');
let modal=document.querySelector('#modal');
let imagen=document.querySelector('#modal_img');
let boton=document.querySelector('#modal_boton');
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click',function(e){
modal.classList.toggle("modal--open");
    let src=e.target.src;
imagen.setAttribute("src",src);
})
}
boton.addEventListener('click',function() {
  modal.classList.toggle("modal--open");
} )

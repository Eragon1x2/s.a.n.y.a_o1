
const a = document.querySelector('#modalbth');
const close = document.querySelector('#closemodalbth');
const modal_hed = document.querySelector('.header_modile');
const modal = document.querySelector('.modal');
a.addEventListener('click', (e) => {
        modal.style.display = 'block';
        modal_hed.style.display = 'none';
})
close.addEventListener('click', (e) => {
        modal.style.display = 'none';
        modal_hed.style.display = 'block';
})
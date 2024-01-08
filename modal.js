const modalOpenButton = document.getElementById('modalOpenButton');
const modalCloseButton = document.getElementById('modalCloseButton');
const modal = document.getElementById('modalContainer');

modalOpenButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

function nonehidden()
{
  modal.classList.remove('hidden');
  document.getElementById("body").style.overflow = "hidden";
  document.getElementById("html").style.overflow = "hidden";
}

function sethidden()
{
  modal.classList.add('hidden');
}

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});


function scrollDisable(){
  $('html, body').add('scrollblock');
}
function scrollAble(){
  $('html, body').remove('scrollblock');
}
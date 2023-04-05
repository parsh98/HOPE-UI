$('.sub-menu ul').hide();
$('.sub-menu a').click(function () {
  $(this).parent('.sub-menu').children('ul').slideToggle('100');
  $(this).find('.right').toggleClass('fa-caret-up fa-caret-down');
});

function showSidebar() {
  const x = document.querySelector('.side-bar');
  const y = document.querySelector('.gp');
  const a = document.querySelector('.crd');
  const b = document.querySelector('.rnd');
  const c = document.querySelector('.mn-chrt');

  x.classList.toggle('hide-side-bar');
  y.classList.toggle('gp2');
  a.classList.toggle('crd2');
  b.classList.toggle('rnd2');
  c.classList.toggle('mn-chrt2');
}

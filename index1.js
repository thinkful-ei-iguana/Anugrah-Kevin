/*$(function() {
$('.thumbnail').on('click', e => {
  console.log(e.target);
  const selectedImage = $(event.currentTarget);
  const selectedSource = $(selectedImage)
  const otherImage = $('.thumbnail').not(selectedImage);
  const pressedBool = $(selectedImage).attr('aria-pressed') === 'true';
  //SOMETHING HERE TO MAKE THE PROCESS KEYBOARD ACCESSIBLE//
  //$(selectedImage).addClass('hero');//
  $('div.hero').empty();
  $(selectedImage).clone().appendTo('div.hero').attr(img);
  //$(selectedImage).addClass('hero');//
  });
});*/

$(function () {
  $('.thumbnail').on('click', e => {
    e.preventDefault();
    let thumbSrcAttr = $(event.currentTarget).find('img').attr('src');
    let thumbAltAttr = $(event.currentTarget).find('img').attr('alt');
    $('.hero img').attr('src', thumbSrcAttr);
    $('.hero img').attr('alt', thumbAltAttr);
  });
});
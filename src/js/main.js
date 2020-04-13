window.addEventListener('load', function () {
  const logItWorks = () => {
    console.log('It works!');
  }
  logItWorks();
});


$(document).on('click', '.unSubscribeTraining', function () {
  // var unsubscribed = $("#unsubscribedLabel").text();

  // $(this).text(unsubscribed); 

  $(this).toggleClass('subscribe-btn');
  $(this).text($(this).text() == 'unsubscribed' ? 'unsubscribe' : 'unsubscribed');
  // $(this).removeClass('subscribe-btn').text("subscribe");
  //button syling
  $('.unsubscribeTrainingId').append('<input type="hidden" name="unSubscribeTrainingIds[]" value="' + $(this).attr('data-id') + '"/>');

});



$(document).ready(function () {
  startTween();
});

function startTween() {
  TweenLite.to($("#imagesection"), 2, { x: 290, y: 200 });
}




 
//    what we do section
$('.main').click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
  });
  // giving feedback to the customer
  $("button").click(function (Ivine) {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    Ivine.preventDefault();
  });
  //    reset my form button
  $("button").on('click', function () {
    $('form').each(function () {
      this.reset();
    });
  });
  //portifolio section 
  $(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });

  $(document).ready(function(){
    $('.icons').click(function () {
        $(this).children('.toggle').slideToggle(400);
        $(this).children('.show').toggle();
      });
      });
// giving feedback to the customer

























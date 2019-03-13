//Анимация кнопки в регистрационной форме see later
/*var container = document.querySelector('.registration-form-submit-container');
var checkmark = document.querySelector('svg');
var className = "animate";




function RegistrationSubmit(){
	var FormElement = document.getElementById('form');
	var inputs = document.getElementsByClassName('.registration-form__input');
	var submit = document.getElementById('send');
	var mark = false;
	for (var i = 0; i < inputs.length; i++) {
		var elem = inputs[i];
		if (elem.getAttribute('requied') === '') {
			mark = true;
			elem[i].focus();
		} 
	};

	if (!mark) {
		FormElement.submit();		
	}*/

  /*if (!checkmark.classList.contains(className)) {
    checkmark.classList.add(className);
    
    setTimeout(function(){      
        checkmark.classList.remove(className);
    }, 1700);  
  } 
};*/


	
function SendReview() {
	var ModalReview = document.getElementById('ModalReview');
	var WriteReview = document.getElementById('WriteReview');
	var name = document.getElementById('WriteName');
	var text = document.getElementById('WriteText');
	var reviewName = document.getElementById('ReviewName');
	reviewName.innerHTML = '';
	reviewName.innerHTML += name.value;
	var reviewText = document.getElementById('ReviewText');
	reviewText.innerHTML = '';
	reviewText.innerHTML += "<p>" + text.value + "</p>";
	ModalReview.style.display = 'none';
	WriteReview.style.display = 'none';
};

$( function() {
	 $( "#datepicker" ).datepicker();
 } );

$(document).ready(function(){
	var open = document.querySelector('.header__nav-icon');
	var menu = document.querySelector('.header-nav');
	 open.onclick = function() {
      menu.classList.toggle('header-nav_open');
    };
});

$(window).ready(function(){
	$('.variable-width').slick({
		 dots: true,
		 infinite: true,
		 speed: 300,
		 slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		 arrows: true
		});
	
	$().fancybox({
		 selector : '[data-fancybox="gallery"]',
		 loop     : true
	});

});




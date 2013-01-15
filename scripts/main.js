$(document).ready(function(){
setOrientationListener();
});

function setOrientationListener(){	
	rotationInterval = setInterval( function(){ updateOrientation(); }, 500 );
}

function updateOrientation(){	
	if($('body').width() < 1024){  /*Landscape  funçao remove e add só apanhar a partir da classe pai*/
		$('.seccaoInicio,.seccaoShout').removeClass('landscape').addClass('portrait');
	}else{
		$('.seccaoInicio,.seccaoShout').removeClass('portrait').addClass('landscape');			
	}
}

function carregar(event) {
 if (event.target.id == 1) {   
  $('.contentor').animate({'margin-left': '0%'}, 900);  
  $("#barraMenu").animate({"left":"19"}, 900);
 }
  if (event.target.id == 2) {  
  $('.contentor').animate({'margin-left': '-100%'}, 900);
  $("#barraMenu").animate({"left":"110"}, 900);
 }
   
   if (event.target.id == 3) {  
  $('.contentor').animate({'margin-left': '-200%'}, 900);
    $("#barraMenu").animate({"left":"210"}, 900);
 }    
  };



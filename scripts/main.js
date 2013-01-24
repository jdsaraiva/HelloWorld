$(document).ready(function(){
setOrientationListener();
tablets.draggable('disable');
body.draggable('disable');
contentor.draggable('disable');
});

function setOrientationListener(){	
	rotationInterval = setInterval( function(){ updateOrientation(); }, 500 );
}

function updateOrientation(){	
	if($('body').width() < 1024){  /*Landscape  funçao remove e add só apanhar a partir da classe pai*/
		$('.seccaoInicio,.seccaoShout,.itemMenu').removeClass('landscape').addClass('portrait');   // Portrait
		$("#destaque1").attr("src","imgs/destaque1.png");
		$("#mapa").attr("src","imgs/mapa.png");
	}else{
		$('.seccaoInicio,.seccaoShout,.itemMenu').removeClass('portrait').addClass('landscape');  // Landscape	
		$("#destaque1").attr("src","imgs/destaque1Landscape.png");
		$("#mapa").attr("src","imgs/mapaLandscape.png");

	}
}

function carregar(event) {
 if (event.target.id == 1) {   
  $('.contentor').animate({'margin-left': '0%'}, 900);  
  $(".barraMenu").animate({"left":"19"}, 900);
 }
  if (event.target.id == 2) {  
  $('.contentor').animate({'margin-left': '-100%'}, 900);
  $(".barraMenu").animate({"left":"110"}, 900);
 }
   
   if (event.target.id == 3) {  
  $('.contentor').animate({'margin-left': '-200%'}, 900);
    $(".barraMenu").animate({"left":"210"}, 900);
 }    
  };



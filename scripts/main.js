$(document).ready(function(){
setOrientationListener();
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
  $(".barraMenu").animate({"left":"19"}, 900);
      $(".seccaoInicio").fadeIn(100); 
      $(".seccaoShout").fadeOut(100);
	  $(".seccaoMapa").fadeOut(100);
 }
  if (event.target.id == 2) {  
  $(".barraMenu").animate({"left":"110"}, 900);
      $(".seccaoInicio").fadeOut(100); 
      $(".seccaoShout").fadeIn(100);
	  $(".seccaoMapa").fadeOut(100);
 }
   
   if (event.target.id == 3) {  
    $(".barraMenu").animate({"left":"210"}, 900);
	  $(".seccaoInicio").fadeOut(100); 
      $(".seccaoShout").fadeOut(100);
	  $(".seccaoMapa").fadeIn(100);
 }    
  };



var map;
$(document).ready(function(){
setOrientationListener();

$('.QRIcon').toggle(function() {
   $(".QRContent").css("display","block");

}, function() {
   $(".QRContent").css("display","none");

});


			
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
	
        var mapOptions = {
          center: new google.maps.LatLng(40.277672, -7.508388),
          zoom: 20,
          mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
 }    
  };



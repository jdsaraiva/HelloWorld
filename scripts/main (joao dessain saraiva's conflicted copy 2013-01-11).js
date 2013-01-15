$(document).ready(function(){
setOrientationListener();

	$('menuPrincipal').on('touchstart', function(){
	alert("FAfwa");
	});


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







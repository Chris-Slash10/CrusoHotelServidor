// JavaScript Document
function subirDatos(nombre,email,tel)
{
	$.ajax({
    type: "POST",
    url: "http://igitsoft.com/pgtest.php",
    data: 'nom ='+nom+'&mai='+email+'&tel='+tel
  }).done(function( msg ) {
     navigator.notification.confirm('Datos subidos correctamente', function(btn){
		switch(btn){
			         case 1: navigator.notification.vibrate(500);
					         break;
					 case 2: navigator.notification.beep(2);
					         break;
					 
			       } 
    },'Confirmacion','Vibrar,Beep,Cancelar');
  });
}

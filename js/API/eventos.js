//Eventos
$(document).ready(function() {
	//Comprueba si el dispositivo esta listo para usar las caracteristicas 
	//del smarthphone con phonegap
	document.addEventListener("deviceready",function(){
		window.location.href= "#login";
		//Usa la camara y toma una foto
		$('#regFoto').tap(function(){
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}
			})//Aqui termina la El evento para la camara
	//Envia el registro
	$('#regSend').click(function(){
		var nom = $('#regNomb').val();
        var mail = $('#regEmail').val();
        var tel = $('#regTel').val();
		
		if(nom != '' && mail != '' && tel != ''){
		subirDatos(nom,mail,tel);
		//	navigator.notification.alert(nom+'\n'+mail+'\n'+tel,null,'Hotel','Bienvenido');
			}else{
				navigator.notification.alert('Todos los campos son requeridos',null,'Hotel','Bienvenido');}
			
		});// Termina la funcion enviar registro
	},false);//Termina el EventListener
});

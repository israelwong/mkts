// JavaScript Document
requerido=new RegExp(/[^.*]/);
letras=new RegExp(/^[a-z ._-]+$/i);
numero=new RegExp(/^[-+]?\d+$/);
alfanumerico=new RegExp(/^[a-z0-9 ._-]+$/i);
entero=new RegExp(/^[-+]?\d+$/);
flotanta=new RegExp(/^[-+]?\d*\.?\d+$/);
fecha=new RegExp(/^((((0[13578])|([13578])|(1[02]))[\/](([1-9])|([0-2][0-9])|(3[01])))|(((0[469])|([469])|(11))[\/](([1-9])|([0-2][0-9])|(30)))|((2|02)[\/](([1-9])|([0-2][0-9]))))[\/]\d{4}$|^\d{4}$/);
mail=new RegExp(/^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i);
telefono=new RegExp(/^[\d\s ().-]+$/);		
url=new RegExp(/^(http|https|ftp)\:\/\/[a-z0-9\-\.]+\.[a-z]{2,3}(:[a-z0-9]*)?\/?([a-z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*$/i);
	
		
function es_requerido(val){
	return this.requerido.test(val);
}

function es_letras(val){
	return this.letras.test(val);
}

function es_numerico(val){
	return this.numero.test(val);
}

function es_alfanumerico(val){
	return this.alfanumerico.test(val);
}

function es_entero(val){
	return this.entero.test(val);	
}

function es_flotante(val){
	return this.flotante.test(val);	
}

function es_fecha(val){
	return this.fecha.test(val);	
}
	
function es_email(val){	
	return this.mail.test(val);
}

function es_telefono(val){
	return this.telefono.test(val);
}

function es_url(val){
	return this.url.text(val);	
}

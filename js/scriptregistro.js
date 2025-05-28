function validardatos(){
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
	var telefono=document.getElementById("telefono").value;
	var email=document.getElementById("email").value;

	if(nombre===""){
		alert("No ha digitado el nombre");
		return false;
	}else if (apellido===""){
		alert("No ha digitado el apellido");
		return false; 
	}else if(telefono===""){
		alert("No ha digitado el telefono");
		return false;
	}else if(email===""){
		alert("No ha digitado el email");
		return false;
	}


}
function mostrar()
{var edad
 var estadoCivil;
	edad=parseInt(document.getElementById('txtIdEdad').value);
	estadoCivil=document.getElementById('estadoCivil').value;

if(edad<18&&estadoCivil!="Soltero"){
	alert("usted es muy pequeño para no ser soltero")
}
	


}//FIN DE LA FUNCIÓN
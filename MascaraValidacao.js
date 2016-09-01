function mascaraPlaca(placa, event){
var pl = placa.value; // recebe o valor de placa
regexNumericos = /\d/; // regex para todos valores numericos
regexLetras = /\D/; // regex para todos valores letras
regexNumLetra =/[a-zA-Z0-9]/; // regex para numeros e letras
var resultado = pl;
var posicao = pl.length-1 ;
var key = event.keyCode; // pegar codigo da tecla digitada
 //AAA-9999 AAAA-999
 // apaga tudo que for digitado caso seja algo diferente de numero ou letra
 if(!regexNumLetra.test(pl)){
	resultado=pl.substr(0,pl.length-1);
 }
 //verifico se o digito atual é numerico e se a string digitada é menor que 4 , 
 //pois os 3 primeiros digitos da placa precisam ser numeros
if(regexNumericos.test(pl.substr(posicao)) && pl.length < 4){
	resultado=pl.replace(regexNumericos,"");
}
//verifico o digito atual se é letra e se a string é maior que 5 pois os
//digitos a partir do 6 caracter precisam ser numeros 
if(regexLetras.test(pl.substr(posicao)) && pl.length > 5){
	resultado=pl.substr(0,pl.length-1);
}
//verifico se o 4 digito é Numerico e se o atual é uma letra para este caso de placa AAA-9999 
//entao todas as teclas digitadas a partir do 4 caracter serão numeros
if(	regexNumericos.test(pl.substr(4)) && regexLetras.test(pl.substr(posicao))){
	resultado=pl.substr(0,pl.length-1);
}
//verifico se o 4 caracter é letra e se a string tem o tamanho 5 pra o caso de AAAA-999
if(regexLetras.test(pl.substr(4)) && pl.length == 5){
	resultado = pl.replace("-","");//apagar o "-" da placa do tipos AAA-9999
	resultado=resultado.substr(0,pl.length-1);
	resultado = resultado.concat("-");//inserir o "-" para a 4 posição de string 
}
//reposicionr o "-" para quando se apaga digitos 
if(regexLetras.test(pl.substr(2)) && pl.length == 3 && key!=8){
	resultado = pl.concat("-");
}

//quando o tamanho da string for 5 ou 4  e o ultimo digito for numero inserir  "-"
if((pl.length == 5 || pl.length == 4)&& regexNumericos.test(pl.substr(pl.length-1))){
	pl = pl.replace("-","");
	resultado = pl.substr(0,pl.length-1).concat("-").concat(pl.substr(pl.length-1));
}
//quando se cola um valor de placa
if(key==86){
	exp = /[A-Z]{3}\d{4}/ ; //AAA-9999
	exp1 = /[A-Z]{4}\d{3}/ ; //AAAA-999
	pl = pl.replace("-",""); // apaga todos os "-"
	 var executou = false;
	 //verifica o tipo de placa e insere o "-"
	 if(exp.test(pl)){  
			resultado =pl.substr(0,3)+"-"+pl.substr(3,4);
			executou = true;
		//verifica o tipo de placa e insere o "-"	
		}else if( exp1.test(placa.value)){
			resultado =pl.substr(0,4)+"-"+pl.substr(4,5);
			executou = true;
		}else if(executou == false){
		resultado ="";
			
	}
}
	document.getElementById('placa').value=resultado ;
}

function validaPlaca(placa, event){
	var regex = /[a-zA-Z]{3}[a-zA-Z0-9]{1}\d{3}/;
}
// mascara para placas sem o - formatos AAA9999 e AAAA999
function maskPlaca(placa, event){
var pl = placa.value;
var regexNumericos = /\d/;
var regexLetras = /\D/;
var regexNumLetra =/[a-zA-Z0-9]/;
var resultado = pl;
var posicao = pl.length-1 ;
var key = event.keyCode;
 
 //verifica se existe caracter diferente de numero ou letra
 if(!regexNumLetra.test(pl)){
	resultado=pl.substr(0,pl.length-1);
 }
//verifica os 3 primeiros digitos são numericos 
if(regexNumericos.test(pl.substr(posicao)) && pl.length < 4){
	resultado=pl.replace(regexNumericos,"");
}
//verifica se os 4 primeiros digitos sao letras
if(regexLetras.test(pl.substr(posicao)) && pl.length > 4){
	resultado=pl.substr(0,pl.length-1);
	 
}
//verifica se o quarto digito é numerico e se o ultimo digitado é letra
if(	regexNumericos.test(pl.substr(4)) && regexLetras.test(pl.substr(posicao))){
	resultado=pl.substr(0,pl.length-1);
}

//verifica se o quarto digito é letra e se o tamanho da string é 5 
if(regexLetras.test(pl.substr(4)) && pl.length == 5){
	resultado=resultado.substr(0,pl.length-1);
}


if(key==86){
	exp = /[A-Z]{3}\d{4}/ ;
	 exp1 = /[A-Z]{4}\d{3}/ ;
	 pl = pl.replace("-","");
	 var executou = false;
	 if(exp.test(pl)){
			
			resultado =pl.substr(0,3)+"-"+pl.substr(3,4);
				executou = true;
		}else if( exp1.test(placa.value)){
			resultado =pl.substr(0,4)+"-"+pl.substr(4,5);
			executou = true;
		}else if(executou == false){
		resultado ="";
			
	}
}

	document.getElementById('placa').value=resultado ;
}

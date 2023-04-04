var btn = document.getElementById("btn");
var lista = document.getElementById("lista");
var cont = 1;

btn.addEventListener("click", function(){
	if (cont <= 10){
		var novoItem = document.createElement("li");
		novoItem.innerText = "item " + cont;
		lista.appendChild(novoItem);
		cont++;
		if (cont == 11){
			btn.innerText = "Limpar";
		}
	}else{
		lista.innerHTML = "";
		cont = 1;
		btn.innerText = "Adicionar item";
	}
});
const inputan = document.getElementById("inputan")

function nilai(number) {
	inputan.value += number;
}
function hapusSemua(){
	inputan.value = "";
}
function delet(){
	inputan.value = inputan.value.slice(0, -1);
}
function hasil(){
	try{
		inputan.value = eval(inputan.value.replace('%','/100'));
	}catch{
		inputan.value =  "ERROR";
	}
}
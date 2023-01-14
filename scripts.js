const form = document.getElementById("form");
	form.addEventListener("submit", calcularRollo);

function calcularRollo(event){
	event.preventDefault();
	document.getElementById("result").style.display="grid";

	const alto = getInputNumberValue("diameter.one");
	const ancho = getInputNumberValue("diameter.two");
	const largo = getInputNumberValue("long");

	const result = alto * ancho * largo / 12;


	const finalResult = document.getElementById('result');

	const layoutFinal = result.toFixed(2);
	const convertToPM = (result / 424).toFixed(4);

	finalResult.innerHTML = `${layoutFinal} pm <br>=<br> ${convertToPM} m³`;
}


function getInputNumberValue(id) {
		return Number(document.getElementById(id).value);

	}

function getSelectedValue(id) {
		const select = document.getElementById(id);
		return select.options[select.selectedIndex].value;
	}

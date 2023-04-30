let result = document.getElementById('result');

function getResult(num) {
	result.value += num;
}

function clearResult() {
	result.value = "";
}

function backspace() {
	result.value = result.value.slice(0, -1);
}

function calculate() {
	result.value = eval(result.value);
}

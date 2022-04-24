
function reset() {
    document.getElementById('output').value = "";
}

function btnInput(value) {
    document.getElementById('output').value += value;
}

function result() {
    if (document.getElementById('output').value != "") {
        document.getElementById('output').value = eval(document.getElementById('output').value);
    }
}

function btnSymbol(value) {
    if (document.getElementById('output').value != "") {
        document.getElementById('output').value += value;
    }
}
let wasmInstance;

fetch('simple.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes))
    .then(results => {
        wasmInstance = results.instance;
    })
    .catch(console.error);

function addNumbers() {
    let a = document.getElementById("numbera").value;
    let b = document.getElementById("numberb").value;

    const result = wasmInstance.exports.add(a, b);
    document.getElementById('result').textContent = `${a} + ${b} = ${result}`;
}


function subtractNumbers() {
    let a = document.getElementById("numbera").value;
    let b = document.getElementById("numberb").value;

    const result = wasmInstance.exports.subtract(a, b);
    document.getElementById('result').textContent = `${a} - ${b} = ${result}`;
}

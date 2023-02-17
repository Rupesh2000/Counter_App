var data = 0;

document.getElementById("counting").innetText=data;

function increment() {
    data = data + 1;
    data = data < 0 ? 0 : data;

    if(data < 0) {
        data = 0;
    } else {
        data;
    }

    document.getElementById("counting").innerText = data;
}

function reset() {
    data = 0;
    document.getElementById("counting").innerText = data;
}

function decrement() {
    data = data - 1;
    data = data < 0 ? 0 : data;
    document.getElementById("counting").innerText = data;
}
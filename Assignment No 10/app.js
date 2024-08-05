function cut(button){
    let row=button.parentNode.parentNode;
    row.parentNode.removeChild(row)
}

let counter=0;

function increase(){
    counter++
    document.getElementById("counter").innerHTML = counter
}

function decrease(){
    counter--
    document.getElementById("counter").innerHTML = counter
}

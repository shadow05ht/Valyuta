function myFunctiond() {
    let m = +prompt("Manat:");
    let dollar = m/1.7;
    let netice = "Valyuta məzənnələrinə görə " + m + " manat " + dollar + " dollardır . "
    document.getElementById("dollar").innerHTML = netice
}
function myFunctiona() {
    let m = +prompt("Manat:");
    let avro = m/1.8;
    let netice = "Valyuta məzənnələrinə görə " + m + " manat " + avro + " avrodur . "
    document.getElementById("euro").innerHTML = netice
}
function myFunctionr() {
    let m = +prompt("Manat:")
    let rubl = m/0.01;
    let netice = "Valyuta məzənnələrinə görə " + m + " manat " + rubl + " rubldur . " 
    document.getElementById("rubl").innerHTML = netice;
}
function myFunctionl() {
    let m = +prompt("Manat:")
    let lire = m/0.06;
    let netice = "Valyuta məzənnələrinə görə " + m + " manat " + lire + " lirədir . "  
    document.getElementById("lire").innerHTML = netice;
}
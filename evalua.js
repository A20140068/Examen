var nombre = prompt("¿Cual es tu nombre?");
alert("Bienvenido al cuestionario sobre Turismo "+nombre);
var res1 = prompt("¿En qué departamento se encuentra el lago Titicaca? \nA: Tacna \nB: Puno \nC: Cusco");
if (res1 == "B"){
    res1 = 25;
}else if(res1 == "A"){
    res1 = 0;
}else if (res1 == "C"){
    res1 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}

var res2 = prompt("¿Desde qué parte del Perú se pueden avistar ballenas jorobadas? \nA: Lima e Ica \nB: Arequipa y Tacna \nC: Piura y Tumbes");
if (res2 == "C"){
    res2 = 25;
}else if(res2 == "A"){
    res2 = 0;
}else if (res2 == "B"){
    res2 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}

var res3 = prompt("Plato típico de la Selva peruana \nA: Tacacho con cecina \nB: Arroz con pollo\nC: Lomo saltado");
if (res3 == "A"){
    res3 = 25;
}else if(res3 == "C"){
    res2 = 0;
}else if (res3 == "B"){
    res3 = 0;
}else{
    alert(nombre+", esa no es una opción válida")
}
var total = res1 + res2 + res3 

if (total == "75"){
    alert(nombre+", Exelente");
}else if(total == "50"){
    alert(nombre+", Lo has hecho bien");
}else if (total == "25"){
    alelert(nombre+", Lo puedes hacer mejor");
}else if (total == "0"){
    alelert(nombre+", Hazlo de nuevo");
}

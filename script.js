function calcIMC(){

var peso = document.getElementById('peso').value;
var altura = document.getElementById('altura').value;
const resultado = document.getElementById('Resultado');

    if ( peso !== "" && altura !==""){

        peso = parseFloat(peso);
        altura = parseFloat(altura);
        altura= altura/100;

        var imc = peso / (altura * altura);
        imc = imc.toFixed(2);
        console.log(imc);
        let msg = "";

        if ( imc < 18.5){
            msg = "Magreza";
        }
        else if ( imc > 18.5 && imc < 24.9){
            msg = "Normal";
        }
        else if ( imc > 25 && imc < 29.9){
            msg = "Sobrepeso";
        }
        else if ( imc > 30 && imc < 34.9){
            msg = "Obesidade grau I";
        }
        else if ( imc > 35 && imc < 39.9){
            msg = "Obesidade grau II";
        }
        else if ( imc > 40){
            msg = "Obesidade grau III";
        }

        document.querySelector(".resultado").innerHTML = imc;
        document.querySelector(".classificacao").innerHTML = msg;
    }
}
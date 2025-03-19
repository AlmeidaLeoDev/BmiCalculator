document.querySelector('.buttonCalculate').addEventListener('click', function() {
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");

    let myFirstName = firstName.value;
    let myLastName = lastName.value;
    let weightValue = Number(weight.value);
    let heightValue = Number(height.value);
    
    if (!weightValue || !heightValue) {
        console.log("Preencha todos os campos corretamente!");
        document.getElementById("result").innerHTML = "Preencha todos os campos corretamente"
        return;
    }

    let heightInMeters = heightValue / 100;
    let imc = weightValue / (Math.pow(heightInMeters, 2));

    let myResult = imc < 18.5 ? "Classificação: Magreza" : 
            imc >= 18.5 && imc <= 24.9 ? "Classificação: Normal" : 
            imc >= 25 && imc <= 29.9 ? "Classificação: Sobrepeso" :
            imc >= 30 && imc <= 39.9 ? "Classificação: Obesidade" :   
            "Classificação: Obesidade grave";
    
    
    document.getElementById("result").innerHTML = `Olá ${myFirstName} ${myLastName} <br> Seu IMC é ${imc.toFixed(2)}<br>${myResult}`;
});

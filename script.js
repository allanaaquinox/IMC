document.body.style.backgroundColor = "#f5f5dc";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";


var containerInfo  = document.createElement("div");
document.body.appendChild(containerInfo);


containerInfo.style.width = "500px";
containerInfo.style.height = "300px";
containerInfo.style.border = "3px solid #000";
containerInfo.style.borderRadius ="3px";
containerInfo.style.backgroundColor = "#f39e3d";
containerInfo.style.margin = "margin: 0 auto";
containerInfo.style.display = "flex";
containerInfo.style.justifyContent = "space-between";
containerInfo.style.flexWrap = "wrap";
containerInfo.style.alignItems ="center";

var nomeUsu = document.createElement("input");
containerInfo.appendChild(nomeUsu);
nomeUsu.id = "nome";
nomeUsu.setAttribute("type","text");
nomeUsu.placeholder = "Insira seu nome: ";
nomeUsu.style.width = "400px";
nomeUsu.style.height = "25px";
nomeUsu.style.background = "#fff";
nomeUsu.style.borderRadius = "5px";
nomeUsu.style.marginLeft = "40px";
nomeUsu.style.marginTop = "20px"



var container2 = document.createElement("div")
containerInfo.appendChild(container2);

// container2.style.backgroundColor = '#000';
container2.style.width = "400px";
container2.style.height = "40px";
container2.style.position = "relative";
container2.style.display = "flex";
container2.style.justifyContent = "space-between";
container2.style.flexWrap = "wrap";
container2.style.margin = "40px";




var idadeUsu = document.createElement("input");
container2.appendChild(idadeUsu)
idadeUsu.id = "idade";
idadeUsu.setAttribute("type","number");
idadeUsu.placeholder = "Idade:";
idadeUsu.style.width = "60px";
idadeUsu.style.height = "25px";
idadeUsu.style.background = "#fff";
idadeUsu.style.borderRadius = "5px";

var pesoUsu = document.createElement("input");
container2.appendChild(pesoUsu);
pesoUsu.id = "peso";
pesoUsu.setAttribute("type","number");
pesoUsu.placeholder = "Peso:";
pesoUsu.style.width = "60px";
pesoUsu.style.height = "25px";
pesoUsu.style.background = "#fff";
pesoUsu.style.borderRadius = "5px";


var alturaUsu = document.createElement("input");
container2.appendChild(alturaUsu)
alturaUsu.id = "altura";
alturaUsu.setAttribute("type","number");
alturaUsu.placeholder = "Altura:";
alturaUsu.style.width = "60px";
alturaUsu.style.height = "25px";
alturaUsu.style.background = "#fff";
alturaUsu.style.borderRadius = "5px";

var botao = document.createElement("button");
botao.textContent = "Calcular IMC"; 
containerInfo.appendChild(botao);
botao.style.width = "150px";
botao.style.height = "50px";
botao.style.marginLeft = "170px";
botao.style.border = "1px solid #000";
botao.style.borderRadius = "25px";
botao.style.marginBottom = "50px";

botao.addEventListener("mouseover", () => {
    botao.style.cursor = "pointer";
});


var container3 = document.createElement("div");
document.body.appendChild(container3);

container3.style.width = "1200px";
container3.style.height = "80px";
container3.style.margin = "0 auto";
container3.style.position = "relative";
container3.style.display = "flex";
container3.style.justifyContent = "space-between";
container3.style.flexWrap = "wrap";
container3.style.padding ="30px 30px 30px 30px";

var caixa1 = document.createElement("div");
container3.appendChild(caixa1);
caixa1.style.width = "220px";
caixa1.style.height = "70px";
caixa1.style.display = "flex";
caixa1.style.justifyContent = "space-around";
caixa1.style.alignItems = "center";

var muitoAbaixoPeso = document.createElement("div");
caixa1.appendChild(muitoAbaixoPeso);
muitoAbaixoPeso.style.width = "60px";
muitoAbaixoPeso.style.height = "60px";
muitoAbaixoPeso.style.backgroundColor = "rgb(255, 255, 3)";
muitoAbaixoPeso.style.borderRadius = "50px";

var texto1 = document.createElement("p");
caixa1.appendChild(texto1);
texto1.textContent = "Muito abaixo do peso!";
texto1.style.textAlign = "center";

var caixa2 = document.createElement("div");
container3.appendChild(caixa2);
caixa2.style.width = "180px";
caixa2.style.height = "70px";
caixa2.style.display = "flex";
caixa2.style.justifyContent = "space-around";
caixa2.style.alignItems = "center";

var abaixoPeso = document.createElement("div");
caixa2.appendChild(abaixoPeso);
abaixoPeso.style.width = "60px";
abaixoPeso.style.height = "60px";
abaixoPeso.style.backgroundColor = "rgb(3, 104, 255)";
abaixoPeso.style.borderRadius = "50px";

var texto2 = document.createElement("p");
caixa2.appendChild(texto2);
texto2.textContent = "Abaixo do peso";
texto2.style.textAlign = "center";

var caixa3 = document.createElement("div");
container3.appendChild(caixa3);
caixa3.style.width = "140px";
caixa3.style.height = "70px";
caixa3.style.display = "flex";
caixa3.style.justifyContent = "space-around";
caixa3.style.alignItems = "center";

var pesoIdeal = document.createElement("div");
caixa3.appendChild(pesoIdeal);
pesoIdeal.style.width = "60px";
pesoIdeal.style.height = "60px";
pesoIdeal.style.backgroundColor = "rgb(5, 240, 16)";
pesoIdeal.style.borderRadius = "50px";

var texto3 = document.createElement("p");
caixa3.appendChild(texto3);
texto3.textContent = "Peso ideal";
texto3.style.textAlign = "center";

var caixa4 = document.createElement("div");
container3.appendChild(caixa4);
caixa4.style.width = "180px";
caixa4.style.height = "70px";
caixa4.style.display = "flex";
caixa4.style.justifyContent = "space-around";
caixa4.style.alignItems = "center";

var acimaPeso = document.createElement("div");
caixa4.appendChild(acimaPeso);
acimaPeso.style.width = "60px";
acimaPeso.style.height = "60px";
acimaPeso.style.backgroundColor = "rgb(255, 153, 0)";
acimaPeso.style.borderRadius = "50px";

var texto4 = document.createElement("p");
caixa4.appendChild(texto4);
texto4.textContent = "Acima do peso";
texto4.style.textAlign = "center";

var caixa5 = document.createElement("div");
container3.appendChild(caixa5);
caixa5.style.width = "180px";
caixa5.style.height = "70px";
caixa5.style.display = "flex";
caixa5.style.justifyContent = "space-around";
caixa5.style.alignItems = "center";

var obesidade = document.createElement("div");
caixa5.appendChild(obesidade);
obesidade.style.width = "60px";
obesidade.style.height = "60px";
obesidade.style.backgroundColor = "rgb(255, 0, 0)";
obesidade.style.borderRadius = "50px";

var texto5 = document.createElement("p");
caixa5.appendChild(texto5);
texto5.textContent = "Obesidade";
texto5.style.textAlign = "center";

var classificacao  = document.createElement("div");
document.body.appendChild(classificacao);

classificacao.style.backgroundColor = "rgb(238, 207, 123)";
classificacao.style.width = "800px";
classificacao.style.height = "50%";
classificacao.style.margin = "0 auto";
classificacao.style.position = "relative";
classificacao.style.display = "flex";
classificacao.style.justifyContent = "space-between";
classificacao.style.flexWrap = "wrap";
classificacao.style.padding ="30px 30px 30px 30px";
classificacao.style.marginTop = "5px";

botao.addEventListener("click", function() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = Math.round((peso/(altura*altura)));

    if (!nome && !peso && !altura && !idade) {
        return
    } 

    var resultado = document.createElement("div");
    classificacao.appendChild(resultado);
    resultado.style.display = "flex";
    resultado.style.justifyContent = "center";
    resultado.style.width = "750px";
    resultado.style.height = "60px"
    resultado.style.borderRadius = "10px";
    resultado.style.paddingLeft = "40px";
    resultado.style.textAlign = "center";
    resultado.style.paddingTop = "15px";
    resultado.style.paddingRight ="50px";
    resultado.style.marginBottom = "10px";
    
    
    if (imc < 16.5) {
        resultado.style.backgroundColor = "rgb(255, 255, 3)";
        resultado.textContent = `Paciente ${nome}, identificamos que você está  muito abaixo do peso, pois seu IMC é: ${imc} aos ${idade} anos. Não deixe de procurar a ajuda do médico, fazer um checkup e deixar os exames em dia. Saúde não é brincadeira!`;
    } else if (imc >= 16.5 && imc < 18.5){
        resultado.style.backgroundColor = "rgb(3, 104, 255)";
        resultado.textContent = `Paciente ${nome}, identificamos que você está abaixo do peso, pois seu IMC é: ${imc} aos ${idade} anos. Não deixe de procurar a ajuda do médico, fazer um checkup e deixar os exames em dia. Saúde não é brincadeira!`;
    } else if (imc >= 18.5 && imc < 24.9){
        resultado.style.backgroundColor = "rgb(5, 240, 16)";
        resultado.textContent = `Paciente ${nome}, identificamos que você está com o peso ideal!! Seu IMC é: ${imc} aos ${idade} anos. Apesar do resultado não deixe de procurar a ajuda do médico, fazer um checkup e deixar os exames em dia. Saúde não é brincadeira!`;
    } else if (imc >= 24.9 && imc < 29.9){
        resultado.style.backgroundColor = "rgb(255, 153, 0)";
        resultado.textContent = `Paciente ${nome}, identificamos que você acima do peso, pois seu IMC é: ${imc} aos ${idade} anos. Não deixe de procurar a ajuda do médico, fazer um checkup e deixar os exames em dia. Saúde não é brincadeira!`;
    } else {
        resultado.style.backgroundColor = "rgb(255, 0, 0)";
        resultado.textContent = `Paciente ${nome}, identificamos que você está muito além do peso ideal, pois seu IMC é: ${imc} aos ${idade} anos. Não deixe de procurar a ajuda do médico, fazer um checkup e deixar os exames em dia. Saúde não é brincadeira!`;
    }

    document.getElementById("nome").value = ("");
    document.getElementById("peso").value = ("");
    document.getElementById("altura").value = ("");
    document.getElementById("idade").value = ("");
})
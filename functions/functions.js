const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let qtdN;
let Numeros = [];

//ok, aqui eu precisei de muita ajuda, mas deu certo
//gemini salvando
/**
 * @returns {promise<number>}*/

function qtdNs() {
    return new Promise((resolve, reject) =>{
        rl.question('Quantos numeros deseja ordenar? ', (resposta) => {
            qtdN = parseInt(resposta.trim());
            //console.log(resposta);
            rl.close();
            if(!qtdN || isNaN(qtdN) || qtdN <= 0){
                return reject("Valor inválido!");
            }else{
                return resolve(qtdN);
            }
        })
    })
}
//arrumar depois, preciso ver a doc do return para return como int
function digitar(qtdN){
    for(var i = 0; i <= qtdN; i++){
        rl.question("Por favor, digite o ", i + 1, " número:", (Numero) =>{
            console.log(Numero);
            Numeros[i] = Numero;
        });
    }
    return Numeros;
}
module.exports = {qtdNs, digitar, qtdN, Numeros};
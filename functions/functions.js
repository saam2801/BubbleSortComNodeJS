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
            
            if(!qtdN || isNaN(qtdN) || qtdN <= 0){
                return reject("Valor inválido!");
            }else{
                return resolve(qtdN);
            }
        })
    })
}


//basicamente, a partir daqui está tudo errado
//pedir ajuda para o gemini depois, porquê não tem como

async function digitar(qtdN){
        for(var i = 0; i < qtdN; i++){
            const texto = `Agora digite o ${i+1} numero por favor: `
            const resposta = await pergunta(texto);
            //achar um jeito de tratar essa exceção depois
            //provavelmente qtdN - i , digitar(qtdN)
            //if(isNaN(resposta)){}
            Numeros.push(resposta)
        }
        return Numeros;
}
/***
 * @param {Array<Number>} array
 */
function teste(array){
    for(i = 0; i< array.length; i++){
        console.log(array[i]);
    }
}

/***
 * @param {string} texto
 * @returns {promise<number>}
 */
//dei uma adiantada e fui vendo oque o gemini respondeu
function pergunta(texto){
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {
            const numero = parseInt(resposta.trim());
            
            if(isNaN(numero)){
                console.log("Entrada inválida, tente novamente.")
                resolve(numero);
            }else{
                resolve(numero);
            }

        })
    })

}

module.exports = {qtdNs, digitar, teste, qtdN, Numeros, rl};